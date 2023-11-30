"use client";
import { useState } from "react";
import HomeCard from "./components/HomeCard";
import { Button, Progress } from "@nextui-org/react";
import Imagen1 from "./assets/slider1.jpeg";
import Imagen2 from "./assets/slider2.jpeg";
import Imagen3 from "./assets/slider3.jpeg";
import arrowBlack from "./assets/arrowBlack.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";

export default function Home() {
  const [changeView, setChangeView] = useState(0);
  console.log(useAuth()?.isLoggedIn);

  const router = useRouter();
  const sections = [
    {
      component: (
        <HomeCard
          image={Imagen1}
          title={"MindWell "}
          text={
            " Interactúa con nuestro ChatBot amigable que se adapta a tus necesidades, ofreciendo apoyo emocional y consejos a medida que avanzas en tu viaje de salud mental."
          }
        />
      ),
    },
    {
      component: (
        <HomeCard
          image={Imagen2}
          title={"Educacion en la salud mental"}
          text={
            'La "Educación en Salud Mental" enseña cómo cuidar la salud emocional y entender los trastornos mentales.'
          }
        />
      ),
    },
    {
      component: (
        <HomeCard
          image={Imagen3}
          title={"Apoyo en tiempo real con profesionales"}
          text={
            "Ya sea que necesites una sesión de terapia completa o simplemente una conversación rápida para afrontar un momento difícil, MindWell está diseñada para adaptarse a tus necesidades."
          }
        />
      ),
    },
  ];
  const currentSection = sections[changeView];

  const canGoBack = changeView > 0;
  const canGoNext = changeView < sections.length - 1;

  const handleBack = () => {
    if (canGoBack) {
      setChangeView(changeView - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setChangeView(changeView + 1);
    }
  };

  return (
    <div className="bgGradient min-h-screen px-[5%] md:px-[10%] xl:px-[15%] 2xl:px-[20%]">
      {canGoBack && (
        <Button
          isIconOnly
          onPress={() => handleBack()}
          disabled={!canGoBack}
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
      )}

      <div className="h-[680px]">{currentSection?.component}</div>
      <div className="flex justify-between items-end pb-12 pr-6">
        <div className="flex items-center w-full justify-between h-16">
          <Progress
            value={changeView}
            maxValue={sections.length - 1}
            className="max-w-[60%]"
            classNames={{
              indicator: "bg-white",
            }}
          />
          {canGoNext ? (
            <Button
              isIconOnly
              onPress={() => handleNext()}
              size="lg"
              radius="full"
              className="!bg-white text-2xl "
              disabled={!canGoNext}
            >
              <Image
                src={arrowBlack}
                width={50}
                height={50}
                quality={50}
                className="mx-auto rounded-3xl w-8 h-8"
                alt="Picture of the author"
              />
            </Button>
          ) : (
            <Button
              size="lg"
              onPress={() => {
                router.push("/login");
              }}
              radius="md"
              className="ml-5 !bg-white"
            >
              Iniciar sesión
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
