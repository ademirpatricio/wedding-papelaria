import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "O que vou encontrar no eBook?",
    answer:
      "Você encontrará um checklist completo da papelaria de casamento, dicas de identidade visual, sugestões de cronograma, referências visuais e modelos editáveis no Canva e Photoshop.",
  },

  {
    question:
      "O conteúdo serve para qualquer estilo de casamento?",
    answer:
      "Sim! As dicas e o checklist são adaptáveis a diferentes estilos, do clássico ao rústico, moderno ou temático.",
  },

  {
    question:
      "Como recebo o eBook após a compra?",
    answer:
      "Após a confirmação do pagamento, você receberá automaticamente o acesso ao eBook e aos bônus diretamente no seu e-mail.",
  },

  {
    question:
      "Posso usar os modelos mesmo sem saber design?",
    answer:
      "Sim. Os modelos foram criados para serem fáceis de editar, inclusive para quem não possui experiência com design.",
  },
];

export default function ChecklistFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="text-center" data-aos="fade-up">
          <span className="mb-4 inline-block rounded-full bg-[#7A1685]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1685]">
            Tire suas dúvidas
          </span>

          <h2 className="font-['Source_Serif_4'] text-3xl text-[#2d0b45] md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        {/* FAQ */}
        <div className="mt-16 space-y-5">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="overflow-hidden rounded-xl border border-[#eadff0] bg-white transition duration-300 hover:border-[#d6b3e4]"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between 
                  gap-4 px-6 py-4 text-left"
                >
                  <h3 className="text-lg font-bold leading-snug text-[#4b1162] md:text-xl">
                    {item.question}
                  </h3>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7A1685]/10 text-[#7A1685]">
                    {isOpen ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} />
                    )}
                  </div>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 text-lg leading-relaxed text-[#5f5466]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
