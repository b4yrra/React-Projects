"use client";
import { useState } from "react";

const EachPerson = [
  {
    person: "tommy",
    job: "Full Stack Web Developer",
    name: "TOMMY",
    date: "December 2015 - Present",
    para1:
      "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
    para2:
      "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
    para3:
      "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
  },

  {
    person: "bigdrop",
    job: "Front-End Engineer",
    name: "BIGDROP",
    date: "May 2015 - December 2015",
    para1:
      "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
    para2:
      "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester.",
    para3:
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1.",
  },

  {
    person: "cuker",
    job: "Engineering Intern",
    name: "CUKER",
    date: "May 2014 - September 2015",
    para1:
      "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
    para2:
      "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
    para3:
      "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
  },
];

export default function Home() {
  const [activePerson, setActivePerson] = useState(EachPerson[0]);

  return (
    <div className="flex justify-center pt-20 bg-white h-screen">
      <div className="flex gap-24">
        <div className="flex flex-col gap-5">
          {EachPerson.map((item) => (
            <button
              key={item.person}
              onClick={() => setActivePerson(item)}
              className={`font-sans text-sm font-light cursor-pointer px-4 border-l-2 transition-all
                ${
                  activePerson.person === item.person
                    ? "text-teal-600 border-teal-600"
                    : "text-black border-transparent hover:text-teal-600 hover:border-teal-600"
                }
              `}
            >
              {item.name}
            </button>
          ))}
        </div>

        <Display {...activePerson} />
      </div>
    </div>
  );
}

const Display = ({ job, name, date, para1, para2, para3 }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-light text-slate-900 mb-4">{job}</h1>
        <h2 className="bg-slate-200 text-slate-700 text-sm px-3 py-1 rounded-md tracking-wide w-fit">
          {name}
        </h2>
        <h3 className="text-slate-500 text-lg">{date}</h3>
      </div>
      <div className="flex flex-col gap-4 w-200">
        <div className="flex gap-4">
          <span className="text-teal-400 text-2xl leading-none">»</span>
          <p className="text-black">{para1}</p>
        </div>
        <div className="flex gap-4">
          <span className="text-teal-400 text-2xl leading-none">»</span>
          <p className="text-black">{para2}</p>
        </div>
        <div className="flex gap-4">
          <span className="text-teal-400 text-2xl leading-none">»</span>
          <p className="text-black">{para3}</p>
        </div>
      </div>
    </div>
  );
};
