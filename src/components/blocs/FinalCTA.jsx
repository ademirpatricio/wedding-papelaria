import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="w-full py-24 bg-[#f5f1ed] text-center">
      
      <div className="max-w-3xl mx-auto px-6">
        
        {/* =========================
            🧠 HEADLINE
        ========================= */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6 leading-snug">
          Seu <span className="font-bold">casamento merece</span> um design à altura da sua história.
        </h2>

        {/* SUB */}
        <p className="font-semibold text-gray-700 mb-4">
          A identidade visual do seu casamento é mais do que um detalhe – é um reflexo do amor que vocês compartilham.
        </p>

        <p className="text-gray-600 mb-10">
          Com a Malabares Wedding, cada elemento do seu grande dia será pensado com carinho e personalidade,
          criando uma experiência inesquecível para você e seus convidados.
        </p>

        {/* =========================
            🎯 CTAs
        ========================= */}
        <div className="flex flex-col items-center gap-4 mb-12">
          
          <Button
            label="💍 ESCOLHA SEU PLANO"
            variant="primary"
          />

          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            className="inline-block bg-green-500 text-white px-10 py-4 rounded-full font-bold hover:bg-green-600 transition"
          >
            CHAMAR NO WHATSAPP
          </a>

        </div>

        {/* =========================
            🧾 FOOTER
        ========================= */}
        <div className="flex flex-col items-center gap-4">
          
          <img
            src="/logo.svg"
            alt="Malabares"
            className="h-10"
          />

          <p className="text-sm text-gray-500">
            © 2025 Malabares | Todos os direitos reservados
          </p>

        </div>

      </div>

    </section>
  );
}