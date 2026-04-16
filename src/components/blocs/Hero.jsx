import Button from "../ui/Button";
import Social from "../ui/Social";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* =========================
          🎬 BACKGROUND
      ========================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.6)_40%,rgba(0,0,0,0.2)_70%,transparent_100%)]" />

      {/* =========================
          🧭 NAVBAR (dentro do hero)
      ========================= */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          
          {/* LOGO */}
          <img
            src="/logo.svg"
            alt="Malabares Wedding"
            className="h-12"
          />

          {/* DIREITA */}
          <div className="flex items-center gap-6">
            
            {/* SOCIAL */}
            <Social />

            {/* CTA */}
            <Button
                variant="white"
                label="Fale conosco"
                link="#"
                target="_blank"
            />

          </div>
        </div>
      </div>

      {/* =========================
          📦 CONTEÚDO
      ========================= */}
      <div className="relative z-10 h-[calc(100%-250px)] flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          
          <div className="max-w-2xl text-left">
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Transforme seu casamento com uma identidade visual única e personalizada
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12">
              Dê ao seu grande dia um toque especial com designs que refletem a essência do seu amor.
            </p>

            <Button
                variant="primary"
                label="💍 ESCOLHA SEU PLANO"
                link="#"
                target="_blank"
            />

          </div>
        </div>
      </div>

      {/* =========================
          🚨 BARRA INFERIOR
      ========================= */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-purple-900 to-pink-800 py-3 text-center text-sm md:text-base font-semibold">
        <span className="text-yellow-300">ATENÇÃO! EXCLUSIVO PARA</span>{" "}
        <span className="text-white">CASAIS VERDADEIRAMENTE APAIXONADOS</span>
      </div>

    </section>
  );
}