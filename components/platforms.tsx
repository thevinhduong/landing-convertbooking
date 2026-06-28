import { Badge } from "@/components/ui/badge";

const platforms = [
  {
    name: "Google Maps & Business",
    icon: "G",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    description:
      "Optimize your Google Business Profile to appear at the top of local search results and Maps.",
    actions: [
      "Auto-optimize business description with local keywords",
      "Schedule photo updates and posts",
      "Respond to reviews with AI-powered replies",
      "Track ranking improvements weekly",
    ],
    metric: "+23% average increase in Map Pack visibility",
  },
  {
    name: "Tripadvisor",
    icon: "T",
    color:
      "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
    description:
      "Climb the rankings on the world's largest travel platform where millions research before booking.",
    actions: [
      "Optimize listing copy for traveler keywords",
      "Auto-respond to reviews in multiple languages",
      "Competitor pricing and ranking analysis",
      "Photo curation and upload scheduling",
    ],
    metric: "+32% more traveler inquiries on average",
  },
  {
    name: "Yelp",
    icon: "Y",
    color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
    description:
      "Strengthen your presence on the platform that influences dining and service decisions worldwide.",
    actions: [
      "Profile completeness optimization",
      "Review response strategy and automation",
      "Competitive positioning analysis",
      "Ad spend optimization (if applicable)",
    ],
    metric: "+18% higher review engagement rate",
  },
  {
    name: "Dianping 大众点评",
    icon: "D",
    color:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    description:
      "Capture the Chinese traveler and local market on the platform they trust most for recommendations.",
    actions: [
      "Bilingual listing optimization (Chinese + English)",
      "Review management for Chinese-speaking customers",
      "Cultural preference adaptation",
      "Ranking in Dianping's recommendation algorithms",
    ],
    metric: "2x bookings from Chinese market in 30 days",
  },
];

export function Platforms() {
  return (
    <section id="platforms" className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-primary mb-3">PLATFORMS</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            One Agent. Every Platform.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep integration with each platform means your business is optimized
            where it matters most.
          </p>
        </div>

        <div className="space-y-6">
          {platforms.map((platform, idx) => (
            <div
              key={platform.name}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 items-start rounded-2xl border bg-card p-6 md:p-8`}
            >
              {/* Platform header */}
              <div className="md:w-1/3 flex flex-col items-start">
                <div
                  className={`h-14 w-14 rounded-2xl ${platform.color} flex items-center justify-center text-xl font-bold mb-4`}
                >
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {platform.description}
                </p>
                <Badge
                  variant="secondary"
                  className="mt-4 bg-accent/10 text-accent"
                >
                  {platform.metric}
                </Badge>
              </div>

              {/* Actions */}
              <div className="md:w-2/3">
                <div className="grid sm:grid-cols-2 gap-3">
                  {platform.actions.map((action) => (
                    <div
                      key={action}
                      className="flex items-start gap-2 text-sm"
                    >
                      <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="h-3 w-3 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
