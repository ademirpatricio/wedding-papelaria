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
      link: "https://wa.me/5581997278234?text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20o%20%F0%9F%A5%82%20Pacote%20Essencial%20da%20Malabares%20Wedding."
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
      link: "https://wa.me/5581997278234?text=Ol%C3%A1!%20Gostaria%20de%20contratar%20%F0%9F%92%8E%20Pacote%20Exclusivo%20da%20Malabares%20Wedding."
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
      link: "https://wa.me/5581998590849?text=Ol%C3%A1!%20Gostaria%20de%20contratar%20o%20%E2%9C%A8%20Pacote%20Premium%20da%20Malabares%20Wedding."
    },
  ];

  return (
    <section id="pricing" className="w-full py-24 bg-[#4f2286] text-white">
      
      {/* =========================
          🧠 TÍTULO
      ========================= */}
      <div className="text-center mb-10 px-6">
        <h2 className="small-title">
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
            className="bg-white text-body rounded-2xl 
            md:p-12 p-6 py-8 flex flex-col justify-between shadow-xl"
          >
            
            <div>
              <h3 className="text-2xl emphasis text-purple-800 mb-6 text-center">
                {plan.name}
              </h3>

              <ul className="space-y-2 mb-8">
                {plan.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span>🔸</span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PREÇO */}
            <div className="mb-6 text-center emphasis">
              <span className="text-purple-800 text-lg">R$</span>{" "}
              <span className="text-7xl text-purple-800">
                {plan.price}
              </span>
              <span className="text-purple-800">,00</span>
            </div>

            {/* CTA */}
            <Button
              label="QUERO ESTE PACOTE"
              variant="purple"
              link={plan.link}
              target="_blank"
            />
          </div>
        ))}

      </div>

      {/* =========================
          💳 PAGAMENTO
      ========================= */}
      <div className="mt-24 text-center px-6">
  <p className="mb-10 text-xl text-white/90">
    Escolha a <strong>forma de pagamento</strong> que melhor se adequa a você:
  </p>

  <div className="flex flex-wrap justify-center gap-6">
    
    {[
      {
        label: "Parcelado em até 12x",
        icon: "/images/icons/ic-cartao.png",
      },
      {
        label: "Boleto Bancário",
        icon: "/images/icons/ic-boleto.png",
      },
      {
        label: "À vista no PIX",
        icon: "/images/icons/ic-pix.png",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="w-56 h-48 flex flex-col items-center justify-center gap-4
        border border-white/30 rounded-xl
        backdrop-blur-sm bg-white/5
        transition-all duration-300
        hover:bg-white/10 hover:scale-105"
      >
        {/* ÍCONE */}
        <img
          src={item.icon}
          alt={item.label}
          className="w-10 h-10 opacity-90"
        />

        {/* TEXTO */}
        <p className="text-white text-sm leading-snug">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</div>

      {/* =========================
          🎁 BÔNUS
      ========================= */}
      <div className="max-w-7xl mx-auto px-6 mt-24 grid md:grid-cols-[1.6fr_1fr] gap-2 items-center">
        
        {/* IMAGEM */}
        <div className="flex justify-center">
          <img
            src="/images/ebook.png"
            alt=""
            className="md:max-w-xl"
          />
        </div>

        {/* TEXTO */}
        <div className="text-center md:text-left">
          <p className="mb-2 text-lg emphasis">+ Bônus - Ebook Gratuito</p>

          <h3 className="small-title emphasis text-primary mb-6">
            Checklist completo da Papelaria do Casamento
          </h3>

          <p className="text-body text-white">
            Independente do pacote escolhido, você recebe um guia exclusivo com dicas
            de aplicação da identidade visual no seu casamento. <span className="emphasis">Aposte na elegância,
            harmonia e exclusividade que só a Malabares Wedding pode oferecer!</span>
          </p>
        </div>

      </div>

    </section>
  );
}