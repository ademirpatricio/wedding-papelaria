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
    <section className="w-full px-10 py-24 bg-gradient-to-b from-purple-900 to-purple-800 text-white"
    style={{ backgroundImage: "url('/images/benefits.jpg')" }}>
      
      {/* =========================
          🧠 TÍTULO
      ========================= */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-16">
        <h2 className="small-title">
          Por que ter uma <span className="font-bold">Identidade Visual</span> personalizada para seu casamento?
        </h2>
      </div>

      {/* =========================
          🧱 GRID DE CARDS
      ========================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        
        {items.map((item) => (
          <div key={item.number} className="relative">
            
            {/* 🔢 BADGE */}
            <div className="title absolute z-50 -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center rounded-full bg-white border-8 border-primary text-purple-800 font-bold text-3xl shadow-lg">
              {item.number}
            </div>

            {/* 📦 CARD */}
            <div className="bg-white/95 text-gray-700 rounded-2xl p-10 pt-14 text-center shadow-md h-full 
            transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
              
              <h3 className="sub-title font-bold text-purple-800 mb-4 leading-none">
                {item.title}
              </h3>

              <p className="text-body">
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