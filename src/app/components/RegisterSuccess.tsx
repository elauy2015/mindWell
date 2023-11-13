import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
interface RegisterSucccess {
    isOpen: boolean
    onOpenChange: any 
}

const RegisterSucccess = ({isOpen, onOpenChange}:RegisterSucccess) => {
  return (
    <Modal placement='center' isDismissable={false} isOpen={isOpen} hideCloseButton onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalBody>
           <h3 className="text-xl my-12 text-center">Muchas gracias por registrarse</h3>
           <Link href="/chat"><Button
            size="lg"
            className=" !bg-principal w-full text-white text-2xl mt-32 h-14 rounded-2xl font-bold "
          >
            Start Chat
          </Button></Link>
          </ModalBody>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}

export default RegisterSucccess