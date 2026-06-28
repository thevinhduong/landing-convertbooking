import type React from "react"
import type { Metadata } from "next"
import { Manrope, Instrument_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ConvertBooking — AI-Powered Booking Agent for Local Businesses",
  description: "ConvertBooking is your AI agent that optimizes your website, SEO, Google Maps, Tripadvisor, Yelp, and Dianping — so you get more customers while you run your business.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${instrumentSans.variable} font-sans antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
