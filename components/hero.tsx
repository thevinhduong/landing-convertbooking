import Link from "next/link";
import { ArrowRight, Bot, Globe, MapPin, Star, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <Badge variant="secondary" className="gap-1.5 mb-6 px-4 py-1.5">
            <Bot className="h-3.5 w-3.5" />
            AI-Powered Booking Agent
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Turn Every Channel Into{" "}
            <span className="gradient-text">Confirmed Bookings</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            ConvertBooking is your AI agent that optimizes your website, SEO,
            Google Maps, Tripadvisor, Yelp, and Dianping — so you get more
            customers while you run your business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
            <Button size="lg" className="h-12 px-8 text-base">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              Watch Demo
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required · Free 14-day trial · Setup in 5 minutes
          </p>
        </div>

        {/* Hero visual — multi-channel booking flow illustration */}
        <div className="mt-16 md:mt-20 relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl border bg-card shadow-2xl overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
                <div className="h-3 w-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-8">
                <div className="h-6 rounded-md bg-muted/50 max-w-sm mx-auto" />
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="p-6 md:p-8">
              {/* KPI row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <KpiCard
                  icon={<Globe className="h-4 w-4 text-primary" />}
                  label="Website"
                  value="1,247"
                  change="+12%"
                />
                <KpiCard
                  icon={<MapPin className="h-4 w-4 text-primary" />}
                  label="Google Maps"
                  value="834"
                  change="+23%"
                />
                <KpiCard
                  icon={<Star className="h-4 w-4 text-primary" />}
                  label="Tripadvisor"
                  value="429"
                  change="+8%"
                />
                <KpiCard
                  icon={<TrendingUp className="h-4 w-4 text-accent" />}
                  label="Total Bookings"
                  value="3,891"
                  change="+31%"
                />
              </div>

              {/* Chart placeholder */}
              <div className="rounded-xl border bg-muted/20 p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-medium">Booking Performance</div>
                    <div className="text-xs text-muted-foreground">
                      Last 30 days across all channels
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    +31% vs last month
                  </Badge>
                </div>
                <div className="flex items-end gap-1.5 h-32 md:h-40">
                  {[40, 55, 45, 65, 58, 72, 68, 85, 78, 92, 88, 95, 90, 100, 96, 105].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-primary/20 hover:bg-primary/40 transition-colors"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Floating channel badges */}
          <div className="absolute -left-4 top-1/3 hidden md:flex items-center gap-2 rounded-xl border bg-card shadow-lg px-4 py-3 animate-fade-in">
            <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">G</span>
            </div>
            <div>
              <div className="text-xs font-medium">Google Maps</div>
              <div className="text-xs text-accent">+23% bookings</div>
            </div>
          </div>

          <div className="absolute -right-4 top-1/2 hidden md:flex items-center gap-2 rounded-xl border bg-card shadow-lg px-4 py-3 animate-fade-in">
            <div className="h-8 w-8 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
              <span className="text-sm font-bold text-teal-600 dark:text-teal-400">T</span>
            </div>
            <div>
              <div className="text-xs font-medium">Tripadvisor</div>
              <div className="text-xs text-accent">+8% inquiries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KpiCard({
  icon,
  label,
  value,
  change,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-xl border bg-background p-3 md:p-4">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <div className="text-xl md:text-2xl font-bold">{value}</div>
      <div className="text-xs text-accent font-medium mt-0.5">{change}</div>
    </div>
  );
}
