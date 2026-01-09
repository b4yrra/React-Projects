"use client";
import { useState } from "react";

const person = [
  {
    id: 1,
    image: "https://www.course-api.com/images/people/person-1.jpeg",
    name: "MARIA FERGUSON",
    job: "Office Manager",
    about:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },

  {
    id: 2,
    image: "https://www.course-api.com/images/people/person-2.jpeg",
    name: "SUSAN ANDERSEN",
    job: "The Boss",
    about:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag.",
  },

  {
    id: 3,
    image: "https://www.course-api.com/images/people/person-3.jpeg",
    name: "PETER SMITH",
    job: "Product Designer",
    about:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },

  {
    id: 4,
    image: "https://www.course-api.com/images/people/person-4.jpeg",
    name: "JOHN DOE",
    job: "Reguler Guy",
    about:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
];

export default function Home() {
  const [review, setReview] = useState(person[0]);
  const { id, image, name, job, about } = review;

  const next = () => {
    const index = person.findIndex((item) => item.id === id);

    setReview(person[index + 1]);
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <button className="bg-slate-500 p-1 px-3 text-2xl rounded-sm cursor-pointer hover:bg-purple-500 transition-all ease-linear">
        ↞
      </button>

      <Display key={id} image={image} name={name} job={job} about={about} />

      <button
        onClick={next}
        className="bg-slate-500 p-1 px-3 text-2xl rounded-sm cursor-pointer hover:bg-purple-500 transition-all ease-linear"
      >
        ↠
      </button>
    </div>
  );
}

const Display = ({ image, name, job, about }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col gap-2">
        <img
          className="w-40 h-40 rounded-full border-4 border-purple-200 shadow-xl"
          src={image}
          alt=""
        />
        <h1 className="text-purple-500 text-xl text-center">{name}</h1>
        <h2 className="text-center text-slate-600">{job}</h2>
      </div>
      <p className="text-slate-500 w-150 text-center text-sm">{about}</p>
      <p className="text-purple-500 text-9xl">"</p>
    </div>
  );
};
