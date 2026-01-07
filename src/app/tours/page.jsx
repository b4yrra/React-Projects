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

  {
    id: 2,
    image: `https://www.course-api.com/images/tours/tour-2.jpeg`,
    price: `$3,895`,
    name: `Best of Ireland in 14 Days Tour`,
    about: `Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!`,
  },

  {
    id: 3,
    image: `https://www.course-api.com/images/tours/tour-3.jpeg`,
    price: `$2,695`,
    name: `Best of Salzburg & Vienna in 8 Days Tour`,
    about: `Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!`,
  },

  {
    id: 4,
    image: `https://www.course-api.com/images/tours/tour-4.jpeg`,
    price: `$2,095`,
    name: `Best of Rome in 7 Days Tour`,
    about: `Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!`,
  },

  {
    id: 5,
    image: `https://www.course-api.com/images/tours/tour-5.jpeg`,
    price: `$2,095`,
    name: `Best of Rome in 7 Days Tour`,
    about: `Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!`,
  },
];

export default function Home() {
  const [CardState, setCardState] = useState(Cards);

  const onSelect = (id) => {
    const newList = CardState.filter((arr) => arr.id !== id);
    setCardState(newList);

    console.log("id:", id);
  };

  const onReset = () => {
    setCardState(Cards);
  };

  return (
    <div className="flex flex-col gap-8 items-center bg-gray-200 h-screen min-h-fit p-22">
      <h1 className="text-black text-4xl">
        {CardState.length ? "Our Tours" : "No Tours Left"}
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {CardState.map(({ id, name, image, price, about }) => (
          <Card
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
            about={about}
            onSelect={onSelect}
          />
        ))}
      </div>
      {CardState.length === 0 && (
        <button
          className="bg-green-500 p-2 rounded-sm cursor-pointer"
          onClick={onReset}
        >
          Refresh
        </button>
      )}
    </div>
  );
}

const Card = ({ id, name, price, image, about, onSelect }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const ReadMore = () => {
    setIsReadMore((prev) => !prev);
  };

  const clickSelect = () => {
    onSelect(id);
  };

  return (
    <div className="flex flex-col gap-7 bg-white h-fit min-h-135 w-80 rounded-xl">
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
        <p
          className={`px-5 py-5 text-gray-500 h-fit min-h-42 overflow-hidden ${
            isReadMore ? "line-clamp-none" : "line-clamp-3"
          }`}
        >
          {about}
        </p>{" "}
        <button
          className="text-black px-4 cursor-pointer text-start"
          onClick={ReadMore}
        >
          {isReadMore ? "Read Less" : "Read More"}
        </button>
        <div className="flex justify-center items-center p-4">
          <button
            className="border border-green-500 border-solid w-full text-center text-green-500 cursor-pointer text-sm rounded-sm"
            onClick={clickSelect}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};
