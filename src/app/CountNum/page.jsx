"use client";
import { useState } from "react";

export default function Home() {
  const [num, setNum] = useState(0);

  const IncreaseNum = () => {
    setNum(num + 1);
  };

  const DecreaseNum = () => {
    setNum(num - 1);
  };

  const ResetNum = () => {
    setNum(num === 0);
  };

  return (
    <div className="flex flex-col gap-20 items-center justify-center bg-blue-200 h-screen">
      <h1 className="text-white text-9xl">{num}</h1>
      <div className="flex gap-10 text-black">
        <button onClick={DecreaseNum}>Decrease</button>
        <button onClick={ResetNum}>Reset</button>
        <button onClick={IncreaseNum}>Increase</button>
      </div>
    </div>
  );
}
