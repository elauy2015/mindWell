import React from "react";

interface ChatBox {
  content: string;
  role: "user" | "assistant";
}
const ChatBox = ({ content = "", role }: ChatBox) => {
  return role === "assistant" ? (
    <div className="bg-bubbleGray p-4 w-4/5 rounded-r-2xl rounded-tl-2xl text-bubbleBlack">{content}</div>
  ) : (
    <div className="bg-principal p-4 ml-auto w-4/5 rounded-l-2xl rounded-tr-2xl text-white">{content}</div>
  );
};

export default ChatBox;
