import React, { ComponentType } from "react";
import { HeroContactDetails } from "../../data/HeroCardData";

const SocialBtn = ({ Icon, link }: { Icon: ComponentType; link: string }) => {
  return (
    <div className="w-fit h-fit rounded-full p-2 text-4xl bg-white hover:bg-transparent duration-100">
      <a href={link} target="_blank">
        <Icon />
      </a>
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full min-h-screen h-fit flex flex-col lg:flex lg:flex-row justify-between gap-5">
      <div className="w-full h-fit lg:w-[75vw] rounded-lg bg-gradient-to-tr from-purple-400 via-yellow-400 to-blue-400 p-8 flex flex-col gap-5 justify-evenly">
        <div className=" text-3xl md:text-7xl font-semibold text-white">
          <h1>Hey, I'm Pradyumna a student into web development</h1>
        </div>
        <div className="text-xl md:text-xl font-medium text-gray-200">
          <h1>
            I enjoy desiging and bringing web pages to life by creating unique
            and beautiful UI and UX
          </h1>
        </div>
        <div className="flex flex-col md:flex md:flex-row gap-10 md:gap-20">
          <div className="w-40 h-14 rounded-full bg-[#282c34] text-white font-medium text-xl flex justify-center items-center hover:bg-transparent hover:border-white hover:border-[1px] duration-100 cursor-pointer">
            <h1>Contact Me!</h1>
          </div>
          <div className="flex gap-5">
            {HeroContactDetails.map((item, key) => {
              return (
                <div key={key}>
                  <SocialBtn Icon={item.icon} link={item.link} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full h-fit lg:w-[25vw] lg:h-fit rounded-lg bg-gradient-to-tr from-yellow-400 via-red-400 to-green-400 p-[3px]">
        <img className="rounded-lg" src="Assets/ProfilePic.jpg" alt="" />
      </div>
    </div>
  );
};

export default About;
