"use client";
import { useState } from "react";

const Cards = () => [
  {
    id: 1,
    category: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
    name: "Buttermilk Pancakes",
    price: "$15.99",
    about:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },

  {
    id: 6,
    category: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
    name: "American Classic",
    price: "$12.99",
    about:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },

  {
    id: 9,
    category: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-9.jpeg",
    name: "Quarantine Buddy",
    price: "$16.99",
    about:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },

  {
    id: 2,
    category: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-4.jpeg",
    name: "Country Delight",
    price: "$20.99",
    about:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
  },

  {
    id: 5,
    category: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
    name: "Egg Attack",
    price: "$22.99",
    about:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },

  {
    id: 8,
    category: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-6.jpeg",
    name: "Orea Dream",
    price: "$18.99",
    about:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },

  {
    id: 3,
    category: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-7.jpeg",
    name: "Buttermilk Pancakes",
    price: "$15.99",
    about:
      "Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },

  {
    id: 4,
    category: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
    name: "Diner Double",
    price: "$13.99",
    about:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },

  {
    id: 7,
    category: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-3.jpeg",
    name: "Godzilla Milkshake",
    price: "$6.99",
    about:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
];

export default function Home() {
  const [Products, SetProducts] = useState(Cards);

  const ShowAll = () => {
    SetProducts(Cards);
  };

  const Breakfast = () => {
    const BreakfastBtn = Cards().filter((arr) => {
      return arr.category === "breakfast";
    });

    SetProducts(BreakfastBtn);
  };

  const Lunch = () => {
    const LunchBtn = Cards().filter((arr) => {
      return arr.category === "lunch";
    });

    SetProducts(LunchBtn);
  };

  const Shakes = () => {
    const ShakesBtn = Cards().filter((arr) => {
      return arr.category === "shakes";
    });

    SetProducts(ShakesBtn);
  };

  return (
    <div className="flex justify-center bg-gray-100 h-screen min-h-fit">
      <div className="flex flex-col items-center gap-15 mt-20 h-screen min-h-fit pb-20">
        <h1 className="text-black text-4xl font-medium">Our Menu</h1>
        <div className="flex gap-5">
          <button
            onClick={ShowAll}
            className="bg-amber-500 px-3 rounded-sm cursor-pointer hover:bg-amber-700 transition-all ease-linear"
          >
            All
          </button>
          <button
            onClick={Breakfast}
            className="bg-amber-500 px-3 rounded-sm cursor-pointer hover:bg-amber-700 transition-all ease-linear"
          >
            Breakfast
          </button>
          <button
            onClick={Lunch}
            className="bg-amber-500 px-3 rounded-sm cursor-pointer hover:bg-amber-700 transition-all ease-linear"
          >
            Lunch
          </button>
          <button
            onClick={Shakes}
            className="bg-amber-500 px-3 rounded-sm cursor-pointer hover:bg-amber-700 transition-all ease-linear"
          >
            Shakes
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5 justify-center">
          {Products.map(({ id, image, name, price, about }) => (
            <CardProduct
              key={id}
              id={id}
              image={image}
              name={name}
              price={price}
              about={about}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const CardProduct = ({ id, image, name, price, about }) => {
  return (
    <div className="bg-white rounded-sm hover:shadow-2xl cursor-pointer transition-all ease-linear">
      <img className="w-90 h-60 rounded-t-sm" src={image} alt="" />
      <div className="flex justify-between items-center text-black p-5">
        <h1 className="font-semibold text-xl">{name}</h1>
        <h2 className="text-white bg-amber-500 px-2 rounded-sm">{price}</h2>
      </div>
      <p className="w-90 px-5 pb-5 text-gray-500">{about}</p>
    </div>
  );
};
