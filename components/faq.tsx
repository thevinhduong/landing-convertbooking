import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an agentic booking agent?",
    answer:
      "An agentic booking agent is an AI system that acts on your behalf to optimize your presence across multiple booking channels. Unlike passive tools, it proactively analyzes, adjusts, and improves your listings, descriptions, photos, and responses to maximize bookings — without you having to do it manually.",
  },
  {
    question: "Which platforms does ConvertBooking support?",
    answer:
      "We currently support Google Maps / Google Business, Tripadvisor, Yelp, Dianping (大众点评), Airbnb, and your own website. We're continuously adding more platforms based on customer demand.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most businesses are fully set up in under 5 minutes. Simply connect your existing platform accounts, and our AI agent begins analyzing and optimizing immediately. You'll see initial improvements within the first week.",
  },
  {
    question: "Do I need technical skills to use ConvertBooking?",
    answer:
      "Not at all. ConvertBooking is designed for business owners, not developers. The dashboard is simple and visual, and our AI agent handles all the technical optimization work. If you can use email, you can use ConvertBooking.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "Yes! We offer a 14-day free trial with no credit card required. You'll get full access to all features so you can see the impact before paying anything.",
  },
  {
    question: "How does Dianping integration work?",
    answer:
      "Our Dianping module optimizes your listing for the Chinese market — including bilingual descriptions (Chinese + English), culturally adapted content, review management, and ranking optimization. This is especially valuable for businesses in areas popular with Chinese tourists or in Greater China.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-primary mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
