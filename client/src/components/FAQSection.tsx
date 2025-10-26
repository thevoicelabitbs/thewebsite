import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "My English isn't great. Can I join?",
      answer: "Yes! All levels welcome. That's why we have prep."
    },
    {
      question: "What if I'm nervous?",
      answer: "Everyone is at first. That's what tonight's session is for."
    },
    {
      question: "What do I need?",
      answer: "Internet, Google Meet, Monday evenings free."
    },
    {
      question: "Is this really free?",
      answer: "Yes. Forever. No catches."
    },
    {
      question: "How do I start?",
      answer: "Join WhatsApp NOW. Introduce yourself (required). Show up tonight 8 PM."
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-650 via-blue-600 to-blue-550 py-32 overflow-hidden grainy-texture">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tight text-shadow-3d">
            Quick Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl overflow-hidden shadow-lg"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger className="px-6 md:px-8 py-6 text-left text-xl md:text-2xl font-bold text-white hover:bg-white/25 transition-all duration-300 hover:no-underline text-shadow-soft">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8 pb-6 text-lg md:text-xl font-bold text-white/90 text-shadow-soft">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
