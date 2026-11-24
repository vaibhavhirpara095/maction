import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/ui/section-heading";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  id?: string;
}

/**
 * Reusable FAQ accordion. Also emits FAQPage structured data so the questions
 * are eligible for rich results.
 */
export default function Faq({
  items,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  description,
  className,
  id,
}: FaqProps) {
  if (!items?.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <Accordion type="single" collapsible className="gap-2">
          {items.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="rounded-2xl border border-slate-100 bg-white px-5 shadow-sm not-last:border-b"
            >
              <AccordionTrigger className="py-5 text-base font-semibold text-slate-900 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
