"use client";
import { useStates } from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center bg-gray-200 h-fit p-22">
      <h1 className="text-black text-4xl">Our Tours</h1>
      <div className="grid grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <div className="flex flex-col gap-7 bg-white min-h-135 h-fit w-80 rounded-xl">
      <div className="flex justify-end bg-[url('https://www.course-api.com/images/tours/tour-1.jpeg')] h-70 w-full bg-cover bg-center rounded-t-xl">
        <p className="flex bg-green-500 h-8 w-15 justify-center items-center rounded-tr-xl">
          $1,995
        </p>
      </div>
      <h1 className="text-center text-black font-semibold text-xl">
        Best of Paris in 7 Days Tour
      </h1>
      <p className="px-5 text-gray-500">
        Paris is synonymous with the finest things that culture can offer — in
        art, fashion, food, literature, and ideas. On this tour, your
        Paris-savvy Rick Steves guide will immerse you in the very best of
      </p>
    </div>
  );
};
