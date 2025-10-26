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
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 py-24 overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter">
            Quick Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-md overflow-hidden"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger className="px-6 md:px-8 py-6 text-left text-xl md:text-2xl font-bold text-white hover:bg-white/10 transition-all duration-300 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8 pb-6 text-lg md:text-xl font-semibold text-white/90">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
