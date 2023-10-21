import { Modal, ModalBody, ModalContent } from '@nextui-org/react'
import React from 'react'
interface RegisterSucccess {
    isOpen: boolean
    onOpenChange: any 
}

const RegisterSucccess = ({isOpen, onOpenChange}:RegisterSucccess) => {
  return (
    <Modal placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalBody>
           <h3 className="text-xl my-12 text-center">Muchas gracias por registrarse</h3>
          </ModalBody>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}

export default RegisterSucccess