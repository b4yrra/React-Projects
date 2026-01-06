"use client";
import { useState } from "react";

const User = [
  {
    id: 1,
    name: "Bertie Yates",
    age: "29 years",
    image: "https://www.course-api.com/images/people/person-1.jpeg",
  },

  {
    id: 2,
    name: "Hester Hogan",
    age: "32 years",
    image: "https://www.course-api.com/images/people/person-2.jpeg",
  },

  {
    id: 3,
    name: "Larry Little",
    age: "36 years",
    image: "https://www.course-api.com/images/people/person-3.jpeg",
  },

  {
    id: 4,
    name: "Sean Walsh",
    age: "34 years",
    image: "https://www.course-api.com/images/people/person-4.jpeg",
  },

  {
    id: 5,
    name: "Lola Gardnen",
    age: "29 years",
    image: "https://www.course-api.com/images/people/person-5.jpeg",
  },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-pink-200 h-screen">
      <Card />
    </div>
  );
}

const Card = () => {
  const [Birthday, setBirthday] = useState(User);

  const Reset = () => {
    setBirthday([]);
  };

  return (
    <div className="flex flex-col gap-5 bg-white min-h-30 h-fit w-130 rounded-2xl shadow-2xl p-4">
      <h1 className="text-black text-3xl">{Birthday.length} Birthdays Today</h1>
      {Birthday.map((user) => (
        <Users key={user.id} {...user} />
      ))}
      <button
        onClick={Reset}
        className="text-center bg-pink-500 text-white cursor-pointer"
      >
        Clear All
      </button>
    </div>
  );
};

const Users = ({ name, age, image }) => {
  return (
    <div>
      <div className="flex gap-5">
        <img className="h-20 w-20 rounded-full" src={image} alt="" />
        <div>
          <h1 className="text-black font-bold ">{name}</h1>
          <p className="text-gray-500">{age}</p>
        </div>
      </div>
    </div>
  );
};
