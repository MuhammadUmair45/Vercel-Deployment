import Image from "next/image";
import { propertyReviewContent } from "@/lib/data";
import { Star } from "lucide-react";

const PropertyReview = () => {
  return (
    <>
      <div className="pt-11">
        <h3 className="relative mb-[25px] pl-5 text-2xl font-semibold leading-5 text-[#101010] before:absolute before:left-0 before:top-1/2 before:size-2 before:-translate-y-1/2 before:bg-primary before:content-['']">
          3 Reviews
        </h3>
      </div>
      <div className="bg-background-blue p-5">
        {propertyReviewContent.map((item) => (
          <div key={item.id} className="py-6">
            <div className="flex flex-wrap md:flex-nowrap">
              <div className="mr-0 flex shrink-0 basis-full justify-center pb-12 text-center md:mr-8 md:block md:basis-[75px] md:justify-center md:pb-0">
                <Image
                  src={item.headshot}
                  alt="Headshot Image"
                  className="rounded-full"
                />
              </div>
              <div className="flex-auto">
                <div className="flex justify-between">
                  <div>
                    <h3 className="mb-3 text-primary">{item.name}</h3>
                    <span className="inline-block text-[15px] text-primary-headline">
                      {item.date}
                    </span>
                  </div>
                  <div className="flex justify-end text-primary">
                    <Star fill="#fb6a19" />
                    <Star fill="#fb6a19" />
                    <Star fill="#fb6a19" />
                    <Star fill="#fb6a19" />
                    <Star fill="#fb6a19" />
                  </div>
                </div>
                <p className="mt-3 text-[15px] text-primary-headline">
                  {item.text}
                </p>
                {item.image && (
                  <Image
                    src={item.image}
                    alt="Review Image"
                    className="inline-block w-1/2 pt-6"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertyReview;
