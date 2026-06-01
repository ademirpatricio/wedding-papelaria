import {
  Mail,
  Image,
  Sparkles,
  CalendarDays,
  FileText,
  Palette,
} from "lucide-react";

const benefits = [
  {
    icon: Mail,
    title: "Todos os itens essenciais da papelaria de casamento",
    description:
      "Para que nenhum detalhe importante passe despercebido.",
  },

  {
    icon: Image,
    title: "Dicas para escolher convites, tags, menus e muito mais",
    description:
      "Escolhas alinhadas ao estilo e personalidade do casal.",
  },

  {
    icon: Sparkles,
    title: "Guia para um casamento visualmente impecável",
    description:
      "Crie uma experiência elegante e memorável para seus convidados.",
  },

  {
    icon: CalendarDays,
    title: "Sugestões do que enviar e quando enviar",
    description:
      "Organize cada etapa da comunicação do seu casamento.",
  },

  {
    icon: FileText,
    title: "Modelos editáveis no Canva e Photoshop",
    description:
      "Convites e Save the Dates prontos para personalizar.",
    featured: true,
  },

  {
    icon: Palette,
    title: "Dicas sobre paleta de cores, tipografia e materiais",
    description:
      "Deixe sua identidade visual mais sofisticada e coerente.",
  },
];

export default function ChecklistBenefits() {
  return (
    <section className="bg-[#f7f3ef] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mx-auto text-center" data-aos="fade-up">
          <span className="mb-5 inline-block rounded-full bg-[#7A1685]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1685]">
            O que você vai encontrar
          </span>

          <h2 className="font-['Source_Serif_4'] mb-4
          text-3xl leading-tight text-[#2d0b45] md:text-4xl">
            Um guia completo para criar uma experiência visual inesquecível
          </h2>

          <p className="text-lg leading-relaxed text-[#5f5466]">
            Tudo pensado para ajudar você a organizar,
            personalizar e elevar a identidade visual
            do seu casamento.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className={`group relative overflow-hidden rounded-[28px] border border-[#eadff0] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(45,11,69,0.08)]
                  
                  ${
                    item.featured
                      ? "border-[#f0b4ff] bg-gradient-to-br from-[#fff7ff] to-white"
                      : ""
                  }
                `}
              >
                {/* glow */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#f3d9ff]/30 blur-3xl transition group-hover:scale-150" />

                {/* badges */}
                {item.featured && (
                  <div className="absolute right-5 top-5 flex gap-2">
                    <span className="rounded-full bg-[#ff4fd8] px-3 py-1 text-xs font-bold text-white shadow-lg">
                      Canva
                    </span>

                    <span className="rounded-full bg-[#7A1685] px-3 py-1 text-xs font-bold text-white shadow-lg">
                      PSD
                    </span>
                  </div>
                )}

                {/* icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7A1685]/10 text-[#7A1685]">
                  <Icon size={32} strokeWidth={2} />
                </div>

                {/* content */}
                <div className="relative mt-8">
                  <h3 className="text-2xl font-bold leading-tight text-[#4b1162]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-[#5f5466]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
