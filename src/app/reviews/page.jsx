"use client";
import { useState } from "react";

const ListArr = [
  {
    id: 1,
    image: "https://course-api.com/images/people/person-4.jpeg",
    name: "Peter Jones",
    job: "INTERN",
    about:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },

  {
    id: 2,
    image: "https://course-api.com/images/people/person-1.jpeg",
    name: "Susan Smith",
    job: "WEB DEVELOPER ",
    about:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },

  {
    id: 3,
    image: "https://course-api.com/images/people/person-2.jpeg",
    name: "Anna Johnson",
    job: "WEB DESIGNER",
    about:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },

  {
    id: 4,
    image: "https://course-api.com/images/people/person-3.jpeg",
    name: "Bill Anderson",
    job: "THE BOSS",
    about:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const prevPerson = () => {
    setIndex((prev) => (prev === 0 ? ListArr.length - 1 : prev - 1));
  };

  const nextPerson = () => {
    setIndex((prev) => (prev === ListArr.length - 1 ? 0 : prev + 1));
  };

  const surpriseMe = () => {
    let random = Math.floor(Math.random() * ListArr.length);
    if (random === index) {
      random = (index + 1) % ListArr.length;
    }
    setIndex(random);
  };

  const { id, name, job, about, image } = ListArr[index];

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white w-150 h-110 p-5 transition-all ease-linear hover:shadow-lg">
        <Reviews
          key={id}
          id={id}
          name={name}
          job={job}
          about={about}
          image={image}
          prev={prevPerson}
          next={nextPerson}
          surp={surpriseMe}
        />
      </div>
    </div>
  );
}

const Reviews = ({ id, name, job, about, image, prev, next, surp }) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <img className="w-35 h-35 rounded-full" src={image} alt="" />
      <div>
        <h1 className="text-black text-center text-2xl">{name}</h1>
        <p className="text-purple-800 text-center text-xs">{job}</p>
      </div>
      <p className="text-center text-gray-600">{about}</p>
      <div className="flex gap-5 text-purple-800">
        <button className="cursor-pointer hover:text-purple-950" onClick={prev}>
          Prev
        </button>
        <button className="cursor-pointer hover:text-purple-950" onClick={next}>
          Next
        </button>
      </div>
      <button
        className="text-purple-800 bg-purple-300 px-3 transition-all ease-linear rounded-sm cursor-pointer hover:text-purple-300 hover:bg-purple-800"
        onClick={surp}
      >
        Surprise Me!
      </button>
    </div>
  );
};
