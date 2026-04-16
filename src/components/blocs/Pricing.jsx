import Button from "../ui/Button";

export default function Pricing() {
  const plans = [
    {
      name: "🥂 Pacote Essencial",
      price: "490",
      items: [
        "Paleta de cores personalizada",
        "Logo dos noivos estilo monograma ou assinatura",
        "Arte para convite digital",
        "Arte para save the date",
        "Mockup do convite impresso",
      ],
    },
    {
      name: "💎 Pacote Exclusivo",
      price: "790",
      items: [
        "Tudo do Pacote Essencial +",
        "Padrão gráfico com textura",
        "Layout para plaquinhas e tags",
        "Layout para papelaria (menu, cardápio, número de mesa)",
        "Arte para posts nas redes sociais",
      ],
    },
    {
      name: "✨ Pacote Premium",
      price: "1590",
      items: [
        "Tudo do Pacote Exclusivo +",
        "Kit completo para Instagram",
        "Site ou página de casamento",
        "Consultoria personalizada",
      ],
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-purple-900 to-purple-800 text-white">
      
      {/* =========================
          🧠 TÍTULO
      ========================= */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl">
          Escolha o pacote ideal para você:
        </h2>
      </div>

      {/* =========================
          💰 PLANOS
      ========================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white text-gray-700 rounded-2xl p-8 flex flex-col justify-between shadow-xl"
          >
            
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-6">
                {plan.name}
              </h3>

              <ul className="space-y-3 mb-8">
                {plan.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-yellow-500">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PREÇO */}
            <div className="mb-6">
              <span className="text-purple-800 text-lg">R$</span>{" "}
              <span className="text-5xl font-bold text-purple-800">
                {plan.price}
              </span>
              <span className="text-purple-800">,00</span>
            </div>

            {/* CTA */}
            <Button
              label="QUERO ESTE PACOTE"
              variant="purple"
            />
          </div>
        ))}

      </div>

      {/* =========================
          💳 PAGAMENTO
      ========================= */}
      <div className="mt-24 text-center px-6">
        <p className="mb-10 text-lg">
          Escolha a <strong>forma de pagamento</strong> que melhor se adequa a você:
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          
          {[
            "Parcelado em até 12x",
            "Boleto Bancário",
            "À vista no PIX",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-white/40 rounded-xl px-10 py-8 text-center w-56"
            >
              <p>{item}</p>
            </div>
          ))}

        </div>
      </div>

      {/* =========================
          🎁 BÔNUS
      ========================= */}
      <div className="max-w-7xl mx-auto px-6 mt-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGEM */}
        <div className="flex justify-center">
          <img
            src="/images/ebook.png"
            alt=""
            className="max-w-md"
          />
        </div>

        {/* TEXTO */}
        <div>
          <p className="mb-2 text-sm">+ Bônus - Ebook Gratuito</p>

          <h3 className="text-3xl font-bold text-yellow-300 mb-4">
            Checklist completo da Papelaria do Casamento
          </h3>

          <p className="text-gray-200">
            Independente do pacote escolhido, você recebe um guia exclusivo com dicas
            de aplicação da identidade visual no seu casamento. Aposte na elegância,
            harmonia e exclusividade que só a Malabares Wedding pode oferecer!
          </p>
        </div>

      </div>

    </section>
  );
}