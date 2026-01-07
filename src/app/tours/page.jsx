"use client";
import { useState, useStates } from "react";

const Cards = [
  {
    id: 1,
    image: `https://www.course-api.com/images/tours/tour-1.jpeg`,
    price: `$1,995`,
    name: `Best of Paris in 7 Days Tour`,
    about: `Paris is synonymous with the finest things that culture can offer — in
          art, fashion, food, literature, and ideas. On this tour, your
          Paris-savvy Rick Steves guide will immerse you in the very best of the
          City of Light: the masterpiece-packed Louvre and Orsay museums,
          resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and
          extravagant Palace of Versailles. You'll also enjoy guided
          neighborhood walks through the city's historic heart as well as
          quieter moments to slow down and savor the city's intimate cafés,
          colorful markets, and joie de vivre. Join us for the Best of Paris in
          7 Days!`,
  },
];

export default function Home() {
  const [CardState, setCardState] = useState(Cards);

  return (
    <div className="flex flex-col gap-8 items-center bg-gray-200 h-fit p-22">
      <h1 className="text-black text-4xl">Our Tours</h1>
      <div className="grid grid-cols-3 gap-8">
        {CardState.map(({ id, name, image, price, about }) => (
          <Card
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
            about={about}
          />
        ))}
      </div>
    </div>
  );
}

const Card = ({ id, name, price, image, about }) => {
  return (
    <div className="flex flex-col gap-7 bg-white h-fit min-h-135 w-80 rounded-xl overflow-hidden">
      <div
        className="flex justify-end h-70 w-full bg-cover bg-center rounded-t-xl"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="flex bg-green-500 h-8 w-15 justify-center items-center rounded-tr-xl">
          {price}
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-center text-black font-semibold text-xl">{name}</h1>
        <p className="px-5 py-5 text-gray-500 h-60 overflow-hidden">
          {about}{" "}
          <span>
            <button>Read More</button>
          </span>
        </p>
      </div>
    </div>
  );
};
