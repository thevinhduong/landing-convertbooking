import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-primary" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
              Ready to Fill Every Table, Every Room, Every Appointment?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
              Join hundreds of businesses already growing with ConvertBooking.
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
              <Button
                size="lg"
                className="h-12 px-8 text-base bg-white text-primary hover:bg-white/90"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base bg-transparent text-white border-white/30 hover:bg-white/10"
              >
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
