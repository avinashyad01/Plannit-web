"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const QuestionPage = () => {
  const [openQuestion, setOpenQuestion] = useState(0);
  const questions = [
    {
      id: 1,
      question: "What is webinar software?",
      answer:
        "Webinar software or webinar platform allows you to host large online gatherings to present information or an interactive experience. Attendees are invited to the webinar leveraging the webinar software registration and invitation features.\n\nDuring these webinars, depending on the webinar software or webinar platform that you use, attendees can typically interact with the speakers or presenters, ask questions, respond to polls, or network with another using chat features.",
    },
    {
      id: 2,
      question: "How do marketers measure the success of a webinar?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quas quaerat voluptates natus rem officiis excepturi consectetur velit nobis aliquam tempora numquam labore temporibus, incidunt ab nesciunt eius necessitatibus nisi commodi maiores delectus rerum cupiditate soluta culpa. Ut, quis obcaecati libero accusamus voluptatum fuga.", 
    },
    {
      id: 3,
      question: "How do marketers measure the success of a webinar?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit atque praesentium dolorum, odit veniam soluta magnam numquam placeat dolor? Quasi rerum provident molestiae tenetur perferendis eaque distinctio vitae animi.", 
    },
    {
      id: 4,
      question: "Can Welcome’s webinar software be used for virtual events or virtual conferences?",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, quidem laboriosam quia sequi nihil iste eaque assumenda asperiores expedita velit culpa tenetur! Similique fuga minus quam vitae unde dicta suscipit." ,
    },
    {
      id: 5,
      question:"Can Welcome's webinar software be used for virtual events or virtual conferences?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eos facere recusandae ad voluptatem rem, autem, rerum alias asperiores fuga molestiae maiores beatae ipsa nam earum explicabo, ea nemo odio at molestias qui deleniti. Iste reprehenderit quos eum sit omnis?",
    },
  ];

  return (
    <div className="lg:px-24 md:px-6 px-6 py-4 bg-gradient-to-b from-[#f3e9d9] to-[#f1e9db]">
      <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-8 gap-4">
        {/* Left column with title */}
        <div className="lg:col-span-4 md:col-span-2 sticky lg:top-8 self-start">
          <h1 className="lg:text-6xl md:text-3xl text-2xl font-medium text-black">
            Frequently <br />
            asked <br /> questions
          </h1>
        </div>
        {/* Right column with questions */}
        <div className="lg:ml-0 md:ml-12 ml-0 lg:col-span-8 md:col-span-6 col-span-2">
          <div className="space-y-2">
            <div className="border-b-2 border-gray-400"></div>
            {questions.map((q, index) => (
              <div key={q.id}
                className="border-b-2 border-gray-400 last:border-b-0" >
                <button onClick={() =>
                  setOpenQuestion(openQuestion === index ? -1 : index)
                  }
                  className="w-full flex justify-between items-center mt-1 lg:mb-4 md:mb-4 mb-2 text-left group" >
                  <span className="font-bold lg:pr-8 md:pr-8 pr-4 lg:text-lg md:text-lg text-[12px] text-text_black">
                    {q.question}
                  </span>
                  {openQuestion === index ? (
                    <Minus className="flex-shrink-0 h-8 w-12 bg-[#1414140D] rounded-xl p-2" />
                  ) : (
                    <Plus className="flex-shrink-0 h-8 w-12 bg-[#1414140D] rounded-xl p-2" />
                  )}
                </button>
                {openQuestion === index && (
                  <div className="font-normal lg:text-[14px] md:text-[14px] text-[10px] pb-6 text-text_black whitespace-pre-wrap mr-2">
                    {q.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionPage;
