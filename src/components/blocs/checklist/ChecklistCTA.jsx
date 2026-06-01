import { ArrowRight } from "lucide-react";

export default function ChecklistCTA() {
  return (
    <section className="px-4 py-4 md:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden 
      rounded-xl bg-[#f3edf5] md:grid-cols-2">
        {/* LEFT */}
        <div
          className="flex items-center px-12 md:px-16 py-12 md:px-24"
          data-aos="fade-right"
        >
          <div className="max-w-xl">
            <span className="mb-5 inline-block rounded-full 
            bg-[#7A1685]/10 px-4 py-2 text-sm font-semibold 
            uppercase tracking-[0.2em] text-[#7A1685] hidden md:inline-block">
              Seu casamento começa aqui
            </span>

            <h2 className="font-['Source_Serif_4'] text-3xl 
            leading-[1.05] text-[#2d0b45] md:text-4xl mb-8">
              Um casamento perfeito começa nos detalhes ✨
            </h2>

            <p className=" text-xl mb-10 leading-relaxed text-[#5f5466]">
              Com um checklist prático e completo,
              você evita esquecimentos e garante
              que toda a papelaria do seu casamento
              reflita sua identidade e emoção.
            </p>

            {/* CTA */}
            <div className="relative mt-10 flex flex-wrap gap-4">
              <a
                href="https://gex.goexplosion.com/link/checkout?utm=checklist-completo-da-papelaria-de-casamento"
                className="group inline-flex items-center gap-3 px-6 md:px-12 py-5
                rounded-lg bg-[#7A1685] text-lg font-semibold text-white 
                transition hover:bg-[#540F5E] w-full md:w-auto"
              >
                Comprar e-Book

                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="relative min-h-[350px] md:min-h-[620px] overflow-hidden"
          data-aos="fade-left"
          style={{
            backgroundImage: "url('/images/checklist-de-casamento/cta-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </section>
  );
}
