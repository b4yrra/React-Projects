"use client";
import { useState } from "react";

const person = [
  {
    id: 1,
    firstName: "John",
  },
];

export default function Home() {
  const [review, setReview] = useState(person);

  return (
    <div>
      {review.map((r) => {
        return <p>{r.firstName}</p>;
      })}
    </div>
  );
}
