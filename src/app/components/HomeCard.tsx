"use client";
import React from "react";
import Image from "next/image";

interface HomeCard {
  image?: any;
  text?: string;
  title?: string;
}
const HomeCard = ({ image, title, text }: HomeCard) => {
  return (
    <div className="text-white">
      <div className="h-96 pt-14 ">
        <Image
          src={image}
          width={350}
          height={350}
          quality={100}
          className="mx-auto rounded-3xl"
          alt="Picture of the author"
        />
      </div>

      <h2 className="text-4xl mt-12">{title}</h2>
      <p className="mt-6">{text}</p>
    </div>
  );
};

export default HomeCard;
