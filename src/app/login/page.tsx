/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Button,
  Checkbox,
  Input,
  Link,
  useDisclosure,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import arrowBlack from "../assets/arrowBlack.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import Apple from "../assets/apple.svg";
import SignInSuccess from "../components/SignInSuccess";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface form {
  email: string;
  password: string;
}

const page = () => {
  const auth = useAuth();
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit = async (data: form) => {
    toast.loading("Signing In...", { id: "signing" });
    try {
      await auth?.login(data.email, data.password);
      onOpen();
      toast.success("Signing in successfully ", { id: "signing" });
    } catch (error) {
      toast.error("Signing in failed", { id: "signing" });
    }
  };

  useEffect(() => {
    if (auth?.user && !isOpen) {
      router.push("/chat");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <div className="h-screen layout-padding">
      <Link href="/">
        <Button
          isIconOnly
          size="lg"
          radius="full"
          className="absolute top-2 text-3xl"
        >
          <Image
            src={arrowBlack}
            width={50}
            height={50}
            quality={50}
            className="mx-auto rounded-3xl w-8 h-8 rotate-180"
            alt="Picture of the author"
          />
        </Button>
      </Link>
      <div className="pt-20 flex flex-col">
        <h1 className="text-xl font-bold mb-4">Welcome back 👋</h1>
        <p className=" text-sm text-gray-500 mb-14">
          Please enter you email & password to sign in
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <Input
              {...register("email", {
                required: "Porfavor llene la vaina",
                pattern: {
                  message: "Formato inválido",
                  value: /[a-zA-Z0-9ñÑ]+@[a-zA-ZñÑ]+\.[a-zA-ZñÑ]{2,3}/g,
                },
              })}
              type="email"
              label="Email"
              className="h-16 "
              variant="underlined"
              labelPlacement="outside"
              placeholder="Enter your email"
            />
            {errors.email?.message}
            <Input
              {...register("password", {
                required: "Porfavor llene la vaina",
                pattern: {
                  message: "Formato inválido",
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
                },
              })}
              type="password"
              label="Password"
              className="h-16 mt-10"
              variant="underlined"
              labelPlacement="outside"
              placeholder="Enter your password"
            />
            {errors.password?.message}

          <Checkbox className="mt-6">Remember me</Checkbox>

          <Button
            size="lg"
            type="submit"
            className=" !bg-principal text-white text-2xl mt-10 h-14 rounded-2xl font-bold "
          >
            Sign in
          </Button>

          <a href="/" className="text-principal text-center mt-4">
            Forget password?
          </a>
          <div className="flex flex-row w-full justify-center gap-2 mt-4">
            <p className="font-semibold">Don`t have an account?</p>
            <Link href="/signup" className="text-principal">
              Sign up
            </Link>
          </div>
          <p className="text-center text-lightGrey mt-10">or continue with</p>
          <div className="grid grid-cols-3 mt-10 mb-30">
            <Image
              src={Google}
              width={50}
              height={50}
              quality={50}
              className="mx-auto rounded-3xl w-8 h-8"
              alt="Picture of the author"
            />
            <Image
              src={Facebook}
              width={50}
              height={50}
              quality={50}
              className="mx-auto rounded-3xl w-8 h-8"
              alt="Picture of the author"
            />
            <Image
              src={Apple}
              width={50}
              height={50}
              quality={50}
              className="mx-auto rounded-3xl w-8 h-8"
              alt="Picture of the author"
            />
          </div>
        </form>
      </div>
      <SignInSuccess
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      ></SignInSuccess>
    </div>
  );
};

export default page;
