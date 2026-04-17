import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Social from "../ui/Social";

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };

    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 scale-110 will-change-transform"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              isMobile
                ? "/images/hero-mobile.jpg"
                : "/images/hero.jpg"
            })`,
          }}
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.75)_40%,rgba(0,0,0,0.6)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.65)_35%,rgba(0,0,0,0.2)_65%,transparent_100%)]" />

      {/* NAVBAR */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-center md:justify-between">

          <img
            src="/logo.svg"
            alt="Malabares Wedding"
            className="h-10 md:h-11 opacity-90"
          />

          <div className="hidden md:flex items-center gap-5">
            <Social />

            <Button
              variant="white"
              label="Fale conosco"
              link="#"
              target="_blank"
            />
          </div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 flex items-center min-h-[calc(80vh-100px)]">
        <div className="max-w-6xl mx-auto px-6 w-full">
          
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            
            <h1 className="title text-white leading-tight">
              Transforme seu casamento com uma
              <span className="emphasis"> identidade visual única e personalizada</span>
            </h1>

            <p className="sub-title text-gray-200 leading-snug">
              Dê ao seu grande dia um toque especial com designs que refletem a essência do seu amor.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button
                variant="primary"
                label="💍 ESCOLHA SEU PLANO"
                link="#"
                target="_blank"
              />
            </div>

          </div>
        </div>
      </div>

      {/* BARRA */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-purple-900 to-pink-800 
      py-8 px-8 text-center text-body tracking-wide">
        <span className="text-white">ATENÇÃO! Exclusivo para</span>{" "}
        <span className="text-yellow-300 emphasis">
          casais verdadeiramente apaixonados.
        </span>
      </div>

    </section>
  );
}