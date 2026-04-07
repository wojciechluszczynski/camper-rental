import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase-server'
import { stripe } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { camper_id, user_email, user_name, user_phone, date_from, date_to, total_price, delivery_address } = body

    if (!camper_id || !user_email || !user_name || !user_phone || !date_from || !date_to || !total_price) {
      return NextResponse.json({ error: 'Brakujące pola' }, { status: 400 })
    }

    const supabase = createServiceClient()

    // Create booking with pending status
    const { data: booking, error } = await supabase
      .from('bookings')
      .insert({
        camper_id,
        user_email,
        user_name,
        user_phone,
        date_from,
        date_to,
        total_price: Number(total_price),
        status: 'pending',
        ...(delivery_address ? { delivery_address } : {}),
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Stripe is optional - if key not configured, skip payment and confirm directly
    if (process.env.STRIPE_SECRET_KEY) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(Number(total_price) * 100),
        currency: 'pln',
        payment_method_types: ['card', 'blik', 'p24'],
        metadata: { booking_id: booking.id, camper_id, user_email },
      })
      await supabase
        .from('bookings')
        .update({ stripe_payment_id: paymentIntent.id })
        .eq('id', booking.id)
      return NextResponse.json({
        booking_id: booking.id,
        client_secret: paymentIntent.client_secret,
      })
    }

    // No Stripe - mark as pending and return booking_id only
    return NextResponse.json({ booking_id: booking.id })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Wewnętrzny błąd serwera'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
