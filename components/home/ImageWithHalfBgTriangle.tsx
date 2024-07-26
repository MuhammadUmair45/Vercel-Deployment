import React from "react";
import HomeTriangleImg from "@/public/assets/images/home-triangle-img.jpg";
import Image from "next/image";

const ImageTrianglebg = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:left-[-70px] before:top-0 before:h-full before:w-[70%] before:skew-x-[15deg] before:bg-primary before:content-['']">
      <Image
        src={HomeTriangleImg}
        alt="Home Triangle Img"
        className="relative z-[2] p-10 pr-0"
      />
    </div>
  );
};
export default ImageTrianglebg;
