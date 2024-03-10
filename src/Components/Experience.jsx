import React from "react";
import css from "../assets/experience/css.png";
import github from "../assets/experience/github.png";
import graphql from "../assets/experience/graphql.png";
import html from "../assets/experience/html.png";
import javascript from "../assets/experience/javascript.png";
import nextjs from "../assets/experience/nextjs.png";
import node from "../assets/experience/node.png";
import react from "../assets/experience/react.png";
import tailwind from "../assets/experience/tailwind.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GrapghQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: node,
      title: "Node JS",
      style: "shadow-green-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen pt-[5rem]  md:pt-[9rem]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are technologies I have worked with</p>
        </div>
        <div className="w-full h-full grid grid-cols-3 gap-3 md:gap-8 text-center md:py-8 px-12 sm:px-0">
          {experiences.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-3 my- 2md:py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className=" w-10 md:w-20 mx-auto " />
                <p className=" text-sm md:text-lg mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
