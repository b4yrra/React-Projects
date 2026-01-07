"use client";
import { useState } from "react";

const Arr = [
  {
    id: 1,
    question: "Do I have to allow the use of cookies?",
    about:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },

  {
    id: 2,
    question: "How do I change my My Page password?",
    about:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },

  {
    id: 3,
    question: "What is BankID?",
    about:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },

  {
    id: 4,
    question: "Whose birth number can I use",
    about:
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },

  {
    id: 5,
    question: "When do I recieve a password ordered by letter?",
    about:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan.",
  },
];

export default function Home() {
  const [Quest, setQuest] = useState(Arr);

  return (
    <div className="flex justify-center bg-cyan-100 h-screen">
      <div className="bg-white mt-20 w-200 shadow-2xs p-10 flex flex-col gap-5">
        <h1 className="text-blue-950 text-center p-10 text-5xl">Questions</h1>
        {Quest.map(({ id, question, about }) => (
          <Questions key={id} id={id} question={question} about={about} />
        ))}
      </div>
    </div>
  );
}

const Questions = ({ id, question, about }) => {
  const [show, setShow] = useState(false);

  const toggleAnswer = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="bg-white border-2 border-solid border-gray-200 shadow-2xl rounded-sm">
      <div className="flex justify-between items-center p-5">
        <h1 className="text-blue-950 text-2xl">{question}</h1>
        <button
          className="bg-blue-950 w-8 h-8 text-2xl rounded-full cursor-pointer flex justify-center items-center"
          onClick={toggleAnswer}
        >
          {show ? "-" : "+"}
        </button>
      </div>
      {show && <p className="text-gray-500 text-xl px-5 pb-5">{about}</p>}
    </div>
  );
};
