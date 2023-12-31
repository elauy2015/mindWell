import { Button, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
interface RegisterSucccess {
  isOpen: boolean;
  onOpenChange: () => void;
}

const RegisterSucccess = ({ isOpen, onOpenChange }: RegisterSucccess) => {
  return (
    <Modal
      placement="center"
      isDismissable={false}
      isOpen={isOpen}
      hideCloseButton
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {() => (
          <ModalBody>
            <h3 className="text-3xl my-12 text-center">
              Muchas gracias por registrarse
            </h3>
            <Link href="/chat">
              <Button
                size="lg"
                className=" !bg-principal w-full text-white text-2xl mb-8 h-14 rounded-2xl font-bold "
              >
                Start Chat
              </Button>
            </Link>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default RegisterSucccess;
