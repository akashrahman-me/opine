import React from "react";
import FaqsItem from "./FaqsItem";
const faqs = [
  {
    question: "Do I still take calls?",
    answer:
      "Face to face discussion is invaluable. Where Opine fits in is giving your team fast and efficient communication between calls. This means many meetings can be skipped or reduced - so you can use meeting time to focus on the important stuff.",
  },
  {
    question: "My clients prefer everything in email",
    answer:
      "Opine can complement email communication by providing a more visual and interactive way to share feedback.",
  },
  {
    question: "What’s the difference between Opine and Loom?",
    answer:
      "Opine focuses on providing instant video feedback, while Loom is more about asynchronous video messaging.",
  },
  {
    question: "Does Opine work for simple projects?",
    answer:
      "Absolutely - just drag and drop your file or add your website url, share the link, and you can get instant video feedback.",
  },
  {
    question: "Does Opine work for big projects?",
    answer:
      "Yes, Opine can handle large projects and streamline communication between team members.",
  },
  {
    question: "Is it faster to read feedback, or watch a video?",
    answer:
      "It depends on personal preferences and the type of feedback. Video can provide more context, while text might be quicker for some users.",
  },
  {
    question: "Can clients and newbies use it?",
    answer:
      "Yes, Opine is designed to be user-friendly for both clients and new users.",
  },
  {
    question: "Can I see multiple images together on a canvas?",
    answer:
      "Yes, Opine allows you to view multiple images on a single canvas for easy comparison and feedback.",
  },
  {
    question: "Can I edit my work in Opine?",
    answer:
      "Opine is primarily for providing feedback, but it may have some basic editing features.",
  },
  {
    question: "Can developers see the CSS specifications in Opine?",
    answer:
      "Opine focuses on visual feedback, but developers can use other tools to inspect CSS specifications.",
  },
];

function Faqs() {
  return (
    <section className="py-0 md:py-20 bg-white mb-20 overflow-hidden">
      <div className="container">
        <div className="max-w-contain bg-[#FBFBFB] rounded-3xl mx-auto sm:p-12 md:p-20">
          <h2
            data-aos="fade-up"
            className="text-5xl text-dark-800 block mb-10 sm:mb-14 md:mb-20 text-center"
          >
            People often ask...
          </h2>
          <div>
            {faqs.map(({question, answer}, index) => (
              <FaqsItem answer={answer} question={question} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
