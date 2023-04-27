import React, {type ReactNode} from "react";

interface TermBlockProps {
  title: string;
  children?: ReactNode;
}

function TermBlock(props: TermBlockProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="flex flex-col gap-4 py-6"
    >
      <h4 className="">{props.title}</h4>
      {props.children}
    </div>
  );
}

export default TermBlock;
