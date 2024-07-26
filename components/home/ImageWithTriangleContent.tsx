import React from "react";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import Button from "../shared/Button";
import { ImageWithTriangleItems } from "@/lib/data";

interface ImageWithTriangleContentProps {
  title?: string;
  content?: string;
  list?: "yes" | "no";
}

const ImageWithTriangleContent = ({
  title = "Title",
  content = "Content",
  list,
}: ImageWithTriangleContentProps) => {
  const formattedContent = content.replace(/<br\/>/g, "\n");
  return (
    <>
      <div className="mb-6 lg:mb-0 lg:pl-14 lg:pr-4 lg:pt-9">
        <HeadlineWithIcon
          title={title || "Choose Us"}
          alignment="start"
          borderColor="primary"
          headlineColor="secondary"
          arrowColor="primary"
        />

        <p
          className="mb-5 mt-2 text-base text-primary-headline"
          style={{ whiteSpace: "pre-line" }}
        >
          {formattedContent ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."}
        </p>

        {list === "yes" && (
          <ul className="*:square-dot-list mb-9">
            {ImageWithTriangleItems.map((item) => {
              return (
                <div key={item.id}>
                  <li>{item.title}</li>
                </div>
              );
            })}
          </ul>
        )}

        <Button href="#" title="Read More" />
      </div>
    </>
  );
};
export default ImageWithTriangleContent;
