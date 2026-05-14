import React, { useContext, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AppContext } from '../context/AppContext'

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams()
  const appointmentId = searchParams.get('appointmentId')
  const { backendUrl, token } = useContext(AppContext)
  const [syncStatus, setSyncStatus] = useState('Confirming payment…')

  useEffect(() => {
    if (!appointmentId) {
      setSyncStatus('Missing appointment information.')
      toast.error('Missing appointment id')
      return
    }

    if (!token) {
      setSyncStatus('Log in to finish updating your appointment.')
      toast.warn('Login to confirm payment')
      return
    }

    const confirmPayment = async () => {
      try {
        const { data } = await axios.post(
          backendUrl + '/api/payment-success',
          { appointmentId },
          { headers: { token } }
        )

        if (data.success) {
          setSyncStatus('Payment confirmed.')
        } else {
          setSyncStatus(data.message || 'Could not confirm payment')
          toast.error(data.message || 'Could not confirm payment')
        }
      } catch (error) {
        console.log(error)
        const msg = error.response?.data?.message || error.message
        setSyncStatus(msg)
        toast.error(msg)
      }
    }

    confirmPayment()
  }, [appointmentId, backendUrl, token])

  return (
    <div className='mt-24 text-center'>
      <p className='text-xl font-medium text-zinc-800'>Payment successful</p>
      <p className='text-zinc-600 mt-2'>Thank you. Your appointment fee was received.</p>
      <p className='text-sm text-zinc-500 mt-2'>{syncStatus}</p>
      <Link to='/my-appointments' className='inline-block mt-6 text-primary hover:underline'>
        Back to my appointments
      </Link>
    </div>
  )
}

export default PaymentSuccess
