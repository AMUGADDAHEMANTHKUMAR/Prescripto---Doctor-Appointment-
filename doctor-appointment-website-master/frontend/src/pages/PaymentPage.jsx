import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AppContext } from '../context/AppContext'

const PaymentPage = () => {
  const [searchParams] = useSearchParams()
  const amountParam = searchParams.get('amount')
  const appointmentIdParam = searchParams.get('appointmentId')
  const [status, setStatus] = useState('Preparing checkout…')
  const { backendUrl, token } = useContext(AppContext)

  useEffect(() => {
    const amount = Number(amountParam)

    if (!token) {
      setStatus('Please log in to pay.')
      toast.warn('Login to pay')
      return
    }

    if (!appointmentIdParam) {
      setStatus('Missing appointment.')
      toast.error('Missing appointment')
      return
    }

    if (!amountParam || !Number.isFinite(amount) || amount <= 0) {
      setStatus('Invalid payment amount.')
      toast.error('Invalid payment amount')
      return
    }

    const run = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/create-checkout-session`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', token },
          body: JSON.stringify({ amount, appointmentId: appointmentIdParam }),
        })

        const data = await response.json()

        if (data.success === false) {
          throw new Error(data.message || 'Could not start checkout')
        }

        if (!response.ok) {
          throw new Error(data.error || data.message || 'Could not start checkout')
        }

        if (data.url) {
          window.location.href = data.url
          return
        }

        throw new Error('Checkout URL missing from server response')
      } catch (err) {
        console.log(err)
        setStatus(err.message || 'Payment failed to start')
        toast.error(err.message || 'Payment failed to start')
      }
    }

    run()
  }, [amountParam, appointmentIdParam, backendUrl, token])

  return (
    <div className='mt-24 text-center text-zinc-600'>
      <p className='font-medium text-zinc-800'>{status}</p>
    </div>
  )
}

export default PaymentPage
