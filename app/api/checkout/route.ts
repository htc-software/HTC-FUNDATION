import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe is not configured. Please set STRIPE_SECRET_KEY." },
        { status: 500 }
      )
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const { amount, cause } = await req.json()

    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: "Invalid donation amount. Minimum is $1." },
        { status: 400 }
      )
    }

    // Different donation causes get a distinct product name/description in Stripe
    // and return to the right page after a cancelled checkout.
    const causes: Record<
      string,
      { name: string; description: string; cancelPath: string }
    > = {
      venezuela: {
        name: "Donación – Ayuda a Venezuela (Terremotos 2026)",
        description:
          "Ayuda humanitaria para las víctimas del doble terremoto del 24 de junio de 2026 en Venezuela",
        cancelPath: "/venezuela",
      },
      default: {
        name: "Donation to HTC Foundation",
        description:
          "Support vocational training and empowerment for the Latino Community",
        cancelPath: "/donate",
      },
    }

    const selected = causes[cause as string] ?? causes.default

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: selected.name,
              description: selected.description,
            },
            unit_amount: Math.round(amount * 100), // Convert dollars to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      metadata: { cause: (cause as string) ?? "default" },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}${selected.cancelPath}`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error("Stripe checkout error:", error)
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    )
  }
}
