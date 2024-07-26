import { AboutWorkingSteps } from "@/lib/dataWithJSX";

const AboutWorkingStepsContent = () => {
  return (
    <>
      <div className="container sm:mb-24 mb-5 mt-12">
        <div className="flex flex-wrap justify-center md:mx-[-16px] lg:mx-[-16px] lg:flex-nowrap">
          {AboutWorkingSteps.map((item) => (
            <div
              key={item.id}
              className="relative mb-8 basis-full overflow-hidden rounded-[0_70px] border border-border px-10 py-12 transition-transform delay-100 ease-linear hover:-translate-y-3 md:mx-4 md:basis-[calc(50%-32px)] lg:basis-1/3"
              data-aos="fade-up"
            >
              <span className="absolute right-0 top-0 flex size-[90px] items-center justify-center rounded-[0_70px] border-b border-l border-border text-[26px] font-semibold text-primary">
                {item.id}
              </span>
              <span className="mb-4 inline-block">{item.icon}</span>
              <h3 className="mb-4 text-[26px] font-semibold text-secondary">
                {item.title}
              </h3>
              <p className="text-base text-primary-headline">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default AboutWorkingStepsContent;
