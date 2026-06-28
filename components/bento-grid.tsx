"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Search, MapPin, Star, MessageSquare, TrendingUp } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const features = [
  {
    title: "Website Optimization",
    description: "Convert visitors into customers with AI-optimized landing pages, booking flows, and conversion-focused design.",
    icon: Globe,
    stats: "+45% conversions",
  },
  {
    title: "SEO & Google Search",
    description: "Rank higher on Google. Our agent continuously optimizes your content, keywords, and technical SEO.",
    icon: Search,
    stats: "Top 3 rankings",
  },
  {
    title: "Google Maps & Business",
    description: "Dominate local search. Optimize your Google Business profile to attract nearby customers.",
    icon: MapPin,
    stats: "+60% local visibility",
  },
  {
    title: "Tripadvisor",
    description: "Build trust and attract travelers. Manage reviews, optimize listings, and increase bookings.",
    icon: Star,
    stars: 5,
  },
  {
    title: "Yelp",
    description: "Win more local customers. Optimize your Yelp presence and stand out from competitors.",
    icon: MessageSquare,
    stats: "4.8+ avg rating",
  },
  {
    title: "Dianping (大众点评)",
    description: "Reach Chinese tourists and locals. Optimize your Dianping profile for maximum visibility.",
    icon: TrendingUp,
    stats: "Expand to new markets",
  },
]

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            One Agent. Every Channel. More Bookings.
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            ConvertBooking automatically optimizes your presence across all major booking channels — so you can focus on running your business.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-zinc-800 w-fit">
                    <Icon className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
                  </div>
                  {feature.stats && (
                    <span className="text-sm text-emerald-400 font-medium">{feature.stats}</span>
                  )}
                  {feature.stars && (
                    <div className="flex gap-0.5">
                      {Array.from({ length: feature.stars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                      ))}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
