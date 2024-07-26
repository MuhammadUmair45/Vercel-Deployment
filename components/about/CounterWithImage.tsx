// "use client";

// import gsap from "gsap";
// // import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CounterContent } from "@/lib/dataWithJSX";
// import React, { useRef, useState } from "react";
// import { formatCurrency } from "@/lib/utilFunctons";

// gsap.registerPlugin(ScrollTrigger);

// const CounterWithImage = () => {
//   return (
//     <>
//       <div className="-mt-12 flex flex-wrap items-center md:justify-center lg:flex-nowrap lg:justify-between">
//         {CounterContent.map((item) => (
//           <div
//             key={item.id}
//             className="mb-10 flex basis-full md:basis-1/2 md:justify-center lg:basis-1/3 lg:justify-start"
//           >
//             <span className="inline-block">{item.icon}</span>
//             <div className="pl-5 *:text-white">
//               <h3 className="mb-3 inline-block font-poppins text-[55px] font-bold leading-none">
//                 {item.value}
//               </h3>
//               <h4 className="font-poppins text-lg font-normal leading-none">
//                 {item.title}
//               </h4>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
// export default CounterWithImage;

"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React, { useRef, useState } from "react";
import { formatCurrency } from "@/lib/utilFunctons";

gsap.registerPlugin(ScrollTrigger);

interface StatsCounterIconBoxProps {
  iconName: React.ReactNode;
  amount: number;
  text: string;
}

const StatsCounterIconBox = ({
  iconName,
  amount,
  text,
}: StatsCounterIconBoxProps) => {
  const [endAmount] = useState(amount);

  const amountRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.to(amountRef.current, {
      duration: 2,
      innerHTML: endAmount,
      roundProps: "innerHTML",
      scrollTrigger: {
        trigger: amountRef.current,
        start: "top 70%",
      },
      onUpdate: () => {
        if (amountRef.current) {
          const currentValue = parseFloat(
            amountRef.current.innerHTML.replace(/[^0-9.-]+/g, "")
          );
          amountRef.current.innerHTML = formatCurrency(currentValue);
        }
      },

      onComplete: () => {
        if (amountRef.current) {
          amountRef.current.innerHTML = formatCurrency(endAmount);
        }
      },
    });
  });

  return (
    <div className="mb-10 flex basis-full md:basis-1/2 md:justify-center lg:basis-1/3 lg:justify-start">
      {iconName}
      <h3 className="pl-5 font-poppins text-lg font-normal leading-none text-white ">
        <span className="block">
          <span
            className="mb-3 inline-block font-poppins text-[55px] font-bold leading-none text-white"
            ref={amountRef}
          >
            0
          </span>
        </span>{" "}
        {text}
      </h3>
    </div>
  );
};

export default StatsCounterIconBox;
