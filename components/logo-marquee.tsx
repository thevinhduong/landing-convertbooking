"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const customers = [
  { name: "Xing Fu Tang", tagline: "Boba Tea" },
  { name: "Ole Ole Burrito Express", tagline: "Mexican" },
  { name: "Riceful", tagline: "Japanese" },
  { name: "Empanada Factory", tagline: "Argentine" },
  { name: "Blue Bottle Coffee", tagline: "Coffee" },
  { name: "Tartine Bakery", tagline: "Bakery" },
  { name: "Bi-Rite Market", tagline: "Grocery" },
  { name: "La Marzocca", tagline: "Italian" },
  { name: "Gordo Taqueria", tagline: "Mexican" },
  { name: "Philz Coffee", tagline: "Coffee" },
]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Trusted by restaurant operators worldwide</p>
      </motion.div>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {[...customers, ...customers].map((customer, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px] h-20 mx-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-1 text-zinc-400">
                <span className="font-semibold text-sm" style={{ fontFamily: "var(--font-instrument-sans)" }}>
                  {customer.name}
                </span>
                <span className="text-xs text-zinc-600">{customer.tagline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
