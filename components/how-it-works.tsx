import { Link2, Wand2, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <Link2 className="h-6 w-6" />,
    title: "Connect",
    description:
      "Link your business profiles across Google Maps, Tripadvisor, Yelp, Dianping, Airbnb, and your own website. One-time setup takes less than 5 minutes.",
    step: "01",
  },
  {
    icon: <Wand2 className="h-6 w-6" />,
    title: "Optimize",
    description:
      "Your AI agent analyzes listings, descriptions, photos, pricing, and reviews — then automatically improves them for maximum visibility and conversion.",
    step: "02",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "Convert",
    description:
      "More visibility means more booking requests. Our agent ensures every inquiry is handled quickly and converted into confirmed customers.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-primary mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Your AI Agent Never Sleeps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to fill every table, room, and appointment slot.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step) => (
            <div key={step.title} className="relative text-center">
              {/* Step number */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xs font-bold text-accent-foreground">
                    {step.step}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
