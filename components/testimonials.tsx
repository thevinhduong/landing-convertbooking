import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Minh Nguyen",
    role: "Owner, The Coffee House",
    location: "Ho Chi Minh City",
    initials: "MN",
    quote:
      "Before ConvertBooking, I was manually updating our Google Maps listing once a month. Now our Map Pack ranking jumped from #12 to #3, and we're getting 47% more bookings from Google alone.",
    metric: "+47%",
    metricLabel: "Google Maps bookings",
  },
  {
    name: "Somchai Prasert",
    role: "Manager, Riverside Thai Kitchen",
    location: "Bangkok",
    initials: "SP",
    quote:
      "Tourists find us on Tripadvisor now. Our review response rate went from 20% to 95% and our ranking improved significantly. The AI handles everything in Thai and English.",
    metric: "+32%",
    metricLabel: "Tripadvisor inquiries",
  },
  {
    name: "Made Sari",
    role: "Owner, Ubud Boutique Villa",
    location: "Bali",
    initials: "MS",
    quote:
      "Chinese travelers started finding us after ConvertBooking optimized our Dianping listing. We doubled our bookings from that market in just one month. Incredible ROI.",
    metric: "2x",
    metricLabel: "Dianping bookings",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-primary mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Business Owners Love ConvertBooking
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See how local businesses are growing with AI-powered optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border bg-card flex flex-col"
            >
              <CardHeader className="pb-3">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </CardContent>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                {/* Metric */}
                <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-primary/5">
                  <div className="text-2xl font-bold text-primary">
                    {t.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.metricLabel}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role} · {t.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
