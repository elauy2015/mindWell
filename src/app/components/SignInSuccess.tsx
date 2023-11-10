'use client'
import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react'
import React from 'react'
import Image from "next/image";
import Robot from "../assets/robot.png";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
interface SignInSuccess {
    isOpen: boolean
    onOpenChange: any 
}


const SignInSuccess = ({isOpen, onOpenChange}:SignInSuccess) => {
  const router = useRouter()
  return (
    <Modal  size='full' isOpen={isOpen} onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalBody>
          <div className='flex flex-col justify-center items-center h-full'>
          <h2 className='text-3xl text-principal'>Welcome to </h2>
          <h2 className='text-3xl text-principal mb-10'>MindWell</h2>

          <Image
              src={Robot}
              width={500}
              height={500}
              quality={100}
              className="mx-auto w-64 h-64"
              alt="Picture of the author"
            />
            <h3 className='text-3xl text-lightGrey mt-10'>MindWell</h3>
            <Link href="/chat"><Button
            size="lg"
            className=" !bg-principal w-full text-white text-2xl mt-32 h-14 rounded-2xl font-bold "
          >
            Start Chat
          </Button></Link>
            
          </div>
          </ModalBody>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}

export default SignInSuccess