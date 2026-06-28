import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const tiers = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for single-location businesses getting started.",
    features: [
      "1 location",
      "Website & SEO optimization",
      "Google Maps optimization",
      "Basic analytics dashboard",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "$79",
    description: "For businesses ready to maximize every channel.",
    features: [
      "1 location",
      "All platform optimizations",
      "Website, SEO, Google, Tripadvisor, Yelp, Dianping",
      "AI review response automation",
      "Experiment engine & A/B tests",
      "AI daily summary for owners",
      "Priority email support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    price: "$199",
    description: "Multi-location businesses that need everything.",
    features: [
      "Up to 5 locations",
      "All Growth features included",
      "Multi-location dashboard",
      "Custom integrations",
      "Dedicated account manager",
      "API access",
      "White-label reports",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-primary mb-3">PRICING</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simple Pricing That Scales With You
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative border bg-card flex flex-col ${
                tier.popular ? "border-primary shadow-lg shadow-primary/5" : ""
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">{tier.name}</CardTitle>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {tier.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
