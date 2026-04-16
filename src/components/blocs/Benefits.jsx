import Button from "../ui/Button";

export default function Benefits() {
  const items = [
    {
      number: "01",
      title: "Harmonia em cada detalhe:",
      text: "do convite ao menu, tudo refletirá um conceito visual coeso e elegante.",
    },
    {
      number: "02",
      title: "Exclusividade garantida:",
      text: "criamos designs únicos inspirados na história e personalidade do casal.",
    },
    {
      number: "03",
      title: "Encante seus convidados:",
      text: "materiais personalizados elevam a experiência e deixam lembranças duradouras.",
    },
    {
      number: "04",
      title: "Memórias para a vida toda:",
      text: "um design pensado para eternizar a emoção do seu grande dia.",
    },
  ];

  return (
    <section className="w-full px-10 py-24 bg-gradient-to-b from-purple-900 to-purple-800 text-white">
      
      {/* =========================
          🧠 TÍTULO
      ========================= */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Por que ter uma <span className="font-bold">Identidade Visual</span> personalizada para seu casamento?
        </h2>
      </div>

      {/* =========================
          🧱 GRID DE CARDS
      ========================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {items.map((item) => (
          <div key={item.number} className="relative">
            
            {/* 🔢 BADGE */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-white border-4 border-yellow-400 text-purple-800 font-bold text-lg shadow-lg">
              {item.number}
            </div>

            {/* 📦 CARD */}
            <div className="bg-white/95 text-gray-700 rounded-2xl p-6 pt-10 text-center shadow-lg">
              
              <h3 className="font-bold text-purple-800 mb-3">
                {item.title}
              </h3>

              <p className="text-sm">
                {item.text}
              </p>

            </div>
          </div>
        ))}

      </div>

      {/* =========================
          🎯 CTA
      ========================= */}
      <div className="mt-16 flex justify-center">
        <Button
          label="💍 ESCOLHA SEU PLANO"
          variant="primary"
        />
      </div>

    </section>
  );
}