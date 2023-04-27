import React, {useState} from "react";
import SmoothCollapse from "react-smooth-collapse";

export interface FaqsItemProps {
  question: string;
  answer: string;
}

function FaqsItem(props: FaqsItemProps) {
  const {answer, question} = props;

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);

  return (
    <div className="border-b-[#DEDEDE] last:border-b-0 border-b py-6">
      <div
        role="button"
        className="flex justify-between gap-3 mb-4"
        onClick={toggleOpen}
      >
        <p className="">{question}</p>
        <img
          className={`duration-200 ${open ? "-rotate-180" : ""}`}
          src="/images/Component 2.svg"
          alt=""
        />
      </div>
      <SmoothCollapse expanded={open}>
        <p className="text-dark-300 text-xl">{answer}</p>
      </SmoothCollapse>
    </div>
  );
}

export default FaqsItem;
