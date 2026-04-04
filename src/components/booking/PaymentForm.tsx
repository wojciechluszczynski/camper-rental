'use client'
import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import styles from './PaymentForm.module.css'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutProps {
  bookingId: string
}

function CheckoutForm({ bookingId }: CheckoutProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    setError('')

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/potwierdzenie?booking_id=${bookingId}`,
      },
    })

    if (stripeError) {
      setError(stripeError.message ?? 'Błąd płatności')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Płatność</h2>
      <PaymentElement />
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.submit} disabled={loading || !stripe}>
        {loading ? 'Przetwarzanie...' : 'Zapłać'}
      </button>
    </form>
  )
}

interface Props {
  bookingId: string
}

export function PaymentForm({ bookingId }: Props) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  useEffect(() => {
    // Retrieve client_secret stored by BookingForm after /api/bookings/create
    const secret = sessionStorage.getItem(`booking_secret_${bookingId}`)
    if (secret) {
      setClientSecret(secret)
    }
  }, [bookingId])

  if (!clientSecret) {
    return (
      <div className={styles.loading}>
        <p>Ładowanie płatności...</p>
        <p className={styles.hint}>
          Jeśli strona nie ładuje się, wróć do kampera i spróbuj ponownie.
        </p>
      </div>
    )
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#2D6A4F',
            borderRadius: '8px',
          },
        },
      }}
    >
      <CheckoutForm bookingId={bookingId} />
    </Elements>
  )
}
