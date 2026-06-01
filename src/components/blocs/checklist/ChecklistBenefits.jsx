const benefits = [
  {
    icon: "/images/checklist-de-casamento/icons/benefits-icon-1.png",
    title: "Todos os itens essenciais da papelaria de casamento",
    description:
      "Para que nenhum detalhe importante passe despercebido.",
  },

  {
    icon: "/images/checklist-de-casamento/icons/benefits-icon-2.png",
    title: "Dicas para escolher convites, tags, menus e muito mais",
    description:
      "Escolhas alinhadas ao estilo e personalidade do casal.",
  },

  {
    icon: "/images/checklist-de-casamento/icons/benefits-icon-3.png",
    title: "Guia para um casamento visualmente impecável",
    description:
      "Crie uma experiência elegante e memorável para seus convidados.",
  },

  {
    icon: "/images/checklist-de-casamento/icons/benefits-icon-4.png",
    title: "Sugestões do que enviar e quando enviar",
    description:
      "Organize cada etapa da comunicação do seu casamento.",
  },

  {
    icon: "/images/checklist-de-casamento/icons/benefits-icon-5.png",
    title: "Modelos editáveis no Canva e Photoshop",
    description:
      "Convites e Save the Dates prontos para personalizar.",
    featured: true,
  },

  {
    icon: "/images/checklist-de-casamento/icons/benefits-icon-6.png",
    title: "Dicas sobre paleta de cores, tipografia e materiais",
    description:
      "Deixe sua identidade visual mais sofisticada e coerente.",
  },
];

export default function ChecklistBenefits() {
  return (
    <section className="px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mx-auto text-center" data-aos="fade-up">
          <span
            className="mb-5 inline-block rounded-full bg-[#7A1685]/10 
            px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] 
            text-[#7A1685]"
          >
            O que você vai encontrar
          </span>

          <h2
            className="font-['Source_Serif_4'] mb-4
            text-3xl leading-tight text-[#2d0b45] md:text-4xl"
          >
            Um guia completo para criar uma experiência visual inesquecível
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-[#5f5466]">
            Tudo pensado para ajudar você a organizar,
            personalizar e elevar a identidade visual
            do seu casamento.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className={`group relative overflow-hidden rounded-xl
              border border-[#eadff0] bg-white p-8 transition duration-300
              ${
                item.featured
                  ? "border-[#f0b4ff] bg-gradient-to-br from-[#fff7ff] to-white"
                  : ""
              }`}
            >
              {/* glow */}
              <div
                className="absolute right-0 top-0 h-32 w-32 rounded-full
                bg-[#f3d9ff]/30 blur-3xl transition group-hover:scale-150"
              />

              {/* badges */}
              {item.featured && (
                <div className="absolute right-5 top-5 flex gap-2">
                  <span
                    className="rounded-full bg-[#ff4fd8]
                    px-3 py-1 text-xs font-bold text-white shadow-lg"
                  >
                    Canva
                  </span>

                  <span
                    className="rounded-full bg-[#7A1685]
                    px-3 py-1 text-xs font-bold text-white shadow-lg"
                  >
                    PSD
                  </span>
                </div>
              )}

              {/* icon */}
              <div className="relative mb-6">
                <img
                  src={item.icon}
                  alt=""
                  className="h-16 w-16 object-contain"
                />
              </div>

              {/* content */}
              <div className="relative">
                <h3 className="text-2xl font-bold leading-tight text-[#4b1162]">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-[#5f5466]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}