import React from "react";
import Robot from "../assets/robot.png";
import Image from "next/image";

const NoChats = () => {
  return (
    <div>
      <Image
        src={Robot}
        width={500}
        height={500}
        quality={100}
        className="mx-auto w-40 h-40"
        alt="Picture of the author"
      />
      <h3 className="text-3xl text-lightGrey mt-4 text-center">MindWell</h3>
      <div className=" space-y-4 text-lightGrey mt-6 text-center">
        <div className="bg-backGroundGray p-6 rounded-2xl ">
          ChatGPT is an artificial-intelligence chatbot developed by Open AI
        </div>
        <div className="bg-backGroundGray p-6 rounded-2xl ">
          ChatGPT launched in November 2022.
        </div>
        <div className="bg-backGroundGray p-6 rounded-2xl ">
          ChatGPT is an artificial-intelligence chatbot developed by OpenAI
        </div>
        <div>This is example that what can i do for you.</div>
      </div>
    </div>
  );
};

export default NoChats;
