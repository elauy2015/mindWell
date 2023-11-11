import React from "react";
import Image from "next/image";
import Archive from "../assets/archive-add.svg";
import Element from "../assets/element.svg";
import Messages from "../assets/messages.svg";

const ChatFooter = () => {
  return (
    <div className="flex h-14 justify-evenly text-center text-xs text-principal bg-backGroundGray">
      <div className="flex flex-col justify-center mx-4 cursor-pointer">
        <Image
          src={Messages}
          width={500}
          height={500}
          quality={100}
          className="mx-auto w-6 h-6"
          alt="Picture of the author"
        />
        <p>Chat</p>
      </div>
      <div className="flex flex-col justify-center mx-4 cursor-pointer">
        <Image
          src={Element}
          width={500}
          height={500}
          quality={100}
          className="mx-auto w-6 h-6"
          alt="Picture of the author"
        />
        <p className="text-lightGrey">Category</p>
      </div>
      <div className="flex flex-col justify-center mx-4 cursor-pointer">
        <Image
          src={Archive}
          width={500}
          height={500}
          quality={100}
          className="mx-auto w-6 h-6"
          alt="Picture of the author"
        />
        <p className="text-lightGrey">Saved</p>
      </div>
    </div>
  );
};

export default ChatFooter;
