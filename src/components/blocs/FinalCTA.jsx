import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="w-full py-24 bg-[#f5f1ed] text-center"
    style={{ 
      backgroundImage: "url('/images/about.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
     }}>
      
      <div className="max-w-3xl mx-auto px-6">
        
        {/* =========================
            🧠 HEADLINE
        ========================= */}
        <h2 className="title emphasis text-purple-800 mb-6 leading-snug">
          Seu casamento merece um design à altura da sua história.
        </h2>

        {/* SUB */}
        <h3 className="sub-title font-medium mb-4">
          A identidade visual do seu casamento é mais do que um detalhe – é um reflexo do amor que vocês compartilham.
        </h3>

        <p className="text-body font-light mb-10">
          Com a Malabares Wedding, cada elemento do seu grande dia será pensado com carinho e personalidade,
          criando uma experiência inesquecível para você e seus convidados.
        </p>

        {/* =========================
            🎯 CTAs
        ========================= */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          
          <Button
            label="💍 ESCOLHA SEU PLANO"
            variant="purple"
          />
          <Button
            label="CHAMA NO WHATSAPP"
            variant="whatsapp"
            target="_blank"
            link="https://wa.me/5581997278234?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Malabares%20Wedding.%20"
          />

        </div>

        {/* =========================
            🧾 FOOTER
        ========================= */}
        <div className="flex flex-col items-center gap-4">
          
          <img
            src="/logo-color.svg"
            alt="Malabares"
            className="h-10"
          />

          <p className="text-sm text-gray-500">
            © 2026 Malabares | Todos os direitos reservados
          </p>

        </div>

      </div>

    </section>
  );
}