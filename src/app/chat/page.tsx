/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import Microphone from "../assets/microphone.svg";
import Spin from "../assets/spinner-white.svg";
import Send from "../assets/send.svg";
import NoChats from "../components/NoChats";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import ChatNavBar from "../components/ChatNavBar";
import ChatFooter from "../components/ChatFooter";
import ChatBox from "../components/ChatBox";
import { useAuth } from "../context/AuthContext";
import { getUserChats, sendChatRequest } from "../helper/api-communicator";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type UserRole = "user" | "assistant";
interface Message {
  role: UserRole;
  content: string;
}

const page = () => {
  const auth = useAuth();
  const router = useRouter();
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [loadingChatBot, setLoadingChatBot] = useState(false);
  const inputStyles = {
    input: ["text-base", "placeholder:text-lightGray", "px-3"],
    inputWrapper: ["bg-backGroundGray", "", "h-14", "!rounded-xl", "shadow"],
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    values: {
      prompt: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: any) => {
    scrollChatToBottom();
    setLoadingChatBot(true);
    const newMessage: Message = { role: "user", content: data.prompt };
    setChatMessages((prev) => [...prev, newMessage]);
    setValue("prompt", "");

    const chatData = await sendChatRequest(data.prompt);
    setChatMessages([...chatData.chats]);
    setLoadingChatBot(false);
  };

  const scrollChatToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Loading Chats", { id: "loadchats" });

      getUserChats()
        .then((data) => {
          setChatMessages([...data.chats]);
          if(data.chats.length >= 1){
            toast.success("Succesfully loaded chats", { id: "loadchats" });
          }else{
            toast.dismiss();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [auth]);

  useEffect(() => {
    scrollChatToBottom();
  }, [chatMessages]);

  useEffect(() => {
    return()=>{
      if (!auth?.user) {
        router.push("/login");
      }
    }
     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <>
      <ChatNavBar setChatMessages={setChatMessages} />
      <section className="h-[calc(100vh-200px)] my-16 layout-padding overflow-y-auto pt-4 ">
        {chatMessages.length < 1 ? (
          <NoChats />
        ) : (
          <div className="layout-padding flex flex-col gap-3">
            {chatMessages.map((message, index) => {
              return (
                <ChatBox
                  key={index}
                  content={message.content}
                  role={message.role}
                />
              );
            })}
            <div
              className="mt-6"
              id="chatContainer"
              ref={chatContainerRef}
            ></div>
          </div>
        )}
      </section>

      <section className="flex flex-col fixed w-full bottom-0 justify-end bg-white">
        <form
          className="flex items-center mb-4 layout-padding"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-5/6 h-16">
            <Input
              {...register("prompt", {
                required: "Porfavor llene la vaina",
                pattern: {
                  message: "Formato inválido",
                  value: /^[\s\S]*$/g,
                },
              })}
              maxLength={300}
              className=""
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
              isInvalid={!!errors.prompt?.message}
              errorMessage={errors.prompt?.message}
              placeholder="Ask me anything... "
            />
          </div>

          <Button
            isIconOnly
            type="submit"
            size="lg"
            isDisabled={!!loadingChatBot}
            className="ml-auto flex !bg-principal rounded-full shadow-md shadow-cyan-500/50"
          >
            <Image
              src={!!loadingChatBot ? Spin : Send}
              width={500}
              height={500}
              quality={100}
              className={`${!!loadingChatBot && "animate-spin"} w-8 h-8`}
              alt="Picture of the author"
            />
          </Button>
        </form>
        <ChatFooter />
      </section>
    </>
  );
};

export default page;
