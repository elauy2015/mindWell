import React from "react";
import Image from "next/image";
import Trash from "../assets/trash.svg";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { deleteUserChats } from "../helper/api-communicator";
import { Message } from "../types/common";

interface DeleteAllChatProps {
  setChatMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const DeleteAllChat = ({ setChatMessages }: DeleteAllChatProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleDelete = async (onClose: () => void) => {
    toast.loading("Deleting chats ", { id: "Deleting chats" });
    try {
      await deleteUserChats();
      setChatMessages([]);
      toast.success("Chats deleted", { id: "Deleting chats" });
      onClose();
    } catch (error) {
      toast.error("An error has ocurred", { id: "Deleting chats" });
    }
  };
  return (
    <>
      <div className="flex items-center absolute top-2 left-3">
        <Button
          isIconOnly
          size="lg"
          onClick={onOpen}
          className="ml-auto flex !bg-transparent rounded-full"
        >
          <Image
            src={Trash}
            width={500}
            height={500}
            quality={100}
            className=" w-8 h-8"
            alt="Picture of the author"
          />
        </Button>
      </div>
      <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <div className=" flex flex-col mt-12 mb-8">
                <h3 className="text-xl text-center">
                  Are you sure you want to delete all message?
                </h3>
                <Button
                  size="sm"
                  onClick={() => handleDelete(onClose)}
                  className=" !bg-customRed text-white text-xl h-12 rounded-2xl !w-fit mx-auto mt-4"
                >
                  Continue
                </Button>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteAllChat;
