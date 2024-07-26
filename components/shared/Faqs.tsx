import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqsProps } from "@/types";

interface FaqsData {
  data: FaqsProps[];
}

const FaqsContent = ({ data }: FaqsData) => {
  // Check if data is not empty and get the value of the first item
  const defaultValue = data.length > 0 ? `item-${data[0].id}` : undefined;

  return (
    <>
      <Accordion
        type="single"
        className="sm:mt-6 mt-0"
        collapsible
        defaultValue={defaultValue}
      >
        {data.map((item) => (
          <AccordionItem
            className="mb-3 border border-b-0 data-[state=closed]:border-transparent data-[state=open]:border-[#e6e9ef] data-[state=closed]:bg-[#f1f7fb] data-[state=open]:bg-white"
            value={`item-${item.id}`}
            key={item.id}
          >
            <AccordionTrigger className="relative items-start justify-start py-6 pl-[70px] pr-7 text-left text-xl font-semibold text-secondary no-underline hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-10 pb-7 text-base leading-8 text-primary-headline">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default FaqsContent;
