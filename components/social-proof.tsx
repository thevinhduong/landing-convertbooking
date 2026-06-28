import { Separator } from "@/components/ui/separator";

const platforms = [
  { name: "Google Maps", short: "G" },
  { name: "Tripadvisor", short: "T" },
  { name: "Yelp", short: "Y" },
  { name: "Dianping", short: "D" },
  { name: "Airbnb", short: "A" },
  { name: "OpenTable", short: "O" },
];

export function SocialProof() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Optimized for all major platforms your customers use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <div className="h-10 w-10 rounded-lg border flex items-center justify-center">
                <span className="text-base font-bold">{p.short}</span>
              </div>
              <span className="text-sm font-medium hidden sm:inline">
                {p.name}
              </span>
            </div>
          ))}
        </div>
        <Separator className="mt-12" />
      </div>
    </section>
  );
}
