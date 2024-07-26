import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface btnProps {
  href: string;
  title: string;
}

const Button = ({ href = "#", title = "Button" }: btnProps) => {
  return (
    <Link
      href={href || "#"}
      className='relative inline-block overflow-hidden bg-primary py-4 pe-20 ps-5 font-medium text-white transition-all before:absolute before:right-[-12px] before:top-0 before:h-full before:w-[75px] before:skew-x-[-20deg] before:bg-secondary before:content-[""] hover:bg-secondary'
    >
      {title || "Button"}
      <ArrowRight className="absolute inset-y-0 right-5 m-auto size-5 text-primary" />
    </Link>
  );
};

export default Button;
