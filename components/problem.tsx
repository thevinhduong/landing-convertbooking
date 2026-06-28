import { Layers, TrendingDown, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const problems = [
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "Fragmented Channels",
    description:
      "Managing Google, Tripadvisor, Yelp, Dianping, and your website separately is overwhelming. Each platform has different rules, algorithms, and customer expectations.",
  },
  {
    icon: <TrendingDown className="h-6 w-6 text-primary" />,
    title: "Lost to Competitors",
    description:
      "Businesses that optimize across all channels capture 3x more bookings. If your competitors are ranked higher on Google Maps or Tripadvisor, they're getting your customers.",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "No Time for Marketing",
    description:
      "You're running a business, not an SEO agency. Between managing staff, inventory, and customers, you don't have hours to research algorithm changes and update listings.",
  },
];

export function Problem() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Your Customers Are Everywhere.
            <br />
            <span className="text-muted-foreground">
              Your Bookings Should Be Too.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              className="border bg-card hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  {problem.icon}
                </div>
                <CardTitle className="text-xl">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
