import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import Stripe from 'stripe'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'
import authUser from './middlewares/authUser.js'
import appointmentModel from './models/appointmentModel.js'

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api end point
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

app.post('/api/create-checkout-session', authUser, async (req, res) => {
  if (!stripe) {
    return res.status(500).json({ error: 'Stripe is not configured' })
  }

  const { userId, appointmentId } = req.body
  const amountRupees = Number(req.body?.amount)

  if (!appointmentId) {
    return res.status(400).json({ error: 'Appointment id required' })
  }

  if (!Number.isFinite(amountRupees) || amountRupees <= 0) {
    return res.status(400).json({ error: 'Invalid amount' })
  }

  const appointment = await appointmentModel.findById(appointmentId)
  if (!appointment) {
    return res.status(400).json({ error: 'Appointment not found' })
  }
  if (String(appointment.userId) !== String(userId)) {
    return res.status(403).json({ error: 'Unauthorized' })
  }
  if (Number(appointment.amount) !== amountRupees) {
    return res.status(400).json({ error: 'Amount does not match appointment' })
  }
  if (appointment.cancelled) {
    return res.status(400).json({ error: 'Appointment is cancelled' })
  }
  if (appointment.payment) {
    return res.status(400).json({ error: 'Already paid' })
  }

  const unitAmount = Math.round(amountRupees * 100)
  if (unitAmount < 50) {
    return res.status(400).json({ error: 'Amount below minimum charge' })
  }

  const successUrl = `http://localhost:5173/success?appointmentId=${encodeURIComponent(appointmentId)}`

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: { name: 'Doctor Appointment' },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: 'http://localhost:5173/my-appointments',
    })
    res.json({ id: session.id, url: session.url })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

app.post('/api/payment-success', authUser, async (req, res) => {
  try {
    const { appointmentId, userId } = req.body

    if (!appointmentId) {
      return res.json({ success: false, message: 'Appointment id required' })
    }

    const appointment = await appointmentModel.findById(appointmentId)
    if (!appointment) {
      return res.json({ success: false, message: 'Appointment not found' })
    }
    if (String(appointment.userId) !== String(userId)) {
      return res.json({ success: false, message: 'Unauthorized action' })
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, { payment: true })

    res.json({ success: true, message: 'Payment recorded' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
})


app.get('/', (req, res) => {
  res.send('Api working...')
})

app.listen(port, () => console.log('Server started', port)) 