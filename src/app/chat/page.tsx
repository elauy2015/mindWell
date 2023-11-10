"use client";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Robot from "../assets/robot.png";
import Archive from "../assets/archive-add.svg";
import Element from "../assets/element.svg";
import Messages from "../assets/messages.svg";
import Microphone from "../assets/microphone.svg";
import Send from "../assets/send.svg";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const inputStyles = {
    input: ["text-base", "placeholder:text-lightGray", "px-3"],
    inputWrapper: ["bg-backGroundGray", "", "h-14", "!rounded-xl", "shadow"],
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm({
    values: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit = (data: any) => {
    onOpen();
  };
  return (
    <>
      <section className="flex h-20 border-b-3 justify-center items-center top-0 fixed w-full bg-white">
        <h1 className="text-2xl font-medium">MindWell</h1>
      </section>
      <section className=" h-screen mt-20 layout-padding">
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
      </section>
      <section className="flex flex-col fixed w-full bottom-0 justify-end">
        <div className="flex items-center mb-4 layout-padding">
          <Input
            {...register("password", {
              required: "Porfavor llene la vaina",
              pattern: {
                message: "Formato inválido",
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
              },
            })}
            className=" w-5/6"
            classNames={inputStyles}
            endContent={
              <Image
                src={Microphone}
                width={500}
                height={500}
                quality={100}
                className=" w-8 h-8 mr-2"
                alt="Picture of the author"
              />
            }
            label=" "
            placeholder="Ask me anything... "
          />
          <Button
            isIconOnly
            size="lg"
            className="ml-auto flex !bg-principal rounded-full shadow-md shadow-cyan-500/50"
          >
            <Image
              src={Send}
              width={500}
              height={500}
              quality={100}
              className=" w-8 h-8"
              alt="Picture of the author"
            />
          </Button>
        </div>
        <div className="flex h-[70px] justify-evenly text-center text-xs text-principal bg-backGroundGray">
          <div className="flex flex-col justify-center mx-4 cursor-pointer">
            <Image
              src={Messages}
              width={500}
              height={500}
              quality={100}
              className="mx-auto w-8 h-8"
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
              className="mx-auto w-8 h-8"
              alt="Picture of the author"
            />
            <p className="text-lightGrey">Chat</p>
          </div>
          <div className="flex flex-col justify-center mx-4 cursor-pointer">
            <Image
              src={Archive}
              width={500}
              height={500}
              quality={100}
              className="mx-auto w-8 h-8"
              alt="Picture of the author"
            />
            <p className="text-lightGrey">Chat</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
