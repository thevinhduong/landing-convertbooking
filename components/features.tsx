import {
  Globe,
  Search,
  MapPin,
  Star,
  ThumbsUp,
  Languages,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Website Optimization",
    description:
      "Landing page tuning, booking flow improvements, page speed optimization, and mobile UX — so visitors convert into bookings instantly.",
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "SEO & Content",
    description:
      "Local SEO, schema markup, blog content, and keyword targeting. Rank higher where your customers are searching.",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Google Maps & Business",
    description:
      "Google Business Profile optimization, review management, photo updates, and local ranking improvements.",
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "Tripadvisor",
    description:
      "Listing optimization, review response automation, ranking improvement, and traveler engagement strategies.",
  },
  {
    icon: <ThumbsUp className="h-5 w-5" />,
    title: "Yelp",
    description:
      "Profile enhancement, review strategy, ad optimization, and competitive positioning on the world's top review platform.",
  },
  {
    icon: <Languages className="h-5 w-5" />,
    title: "Dianping 大众点评",
    description:
      "Chinese market optimization, bilingual listings, review management, and visibility for the platform Chinese travelers rely on.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-primary mb-3">FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything Your Booking Channels Need,{" "}
            <span className="text-muted-foreground">On Autopilot</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your AI agent handles optimization across every channel so you can
            focus on running your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border bg-card hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <CardHeader className="pb-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg mt-3">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
