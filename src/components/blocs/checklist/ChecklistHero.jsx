import { ArrowRight } from "lucide-react";

export default function ChecklistHero() {
  return (
    <section className="px-4 md:px-8">
      

      {/* HERO */}
      <div
        className="relative mx-auto grid max-w-7xl overflow-hidden
        rounded-xl md:grid-cols-2" 
        style={{
          backgroundImage: "url('/images/checklist-de-casamento/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-up"
      >
        {/* TEXT */}
        <div
          className="relative z-10 flex flex-col justify-center px-8 py-14 md:px-16"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <span className="relative mb-5 text-sm font-light 
          uppercase tracking-[0.2em] text-[#7A1685]">
            Checklist Completo da Papelaria de Casamento
          </span>

          <h1 className="relative max-w-xl font-['Source_Serif_4'] 
          text-4xl leading-[1.05] text-[#2d0b45] md:text-5xl">
            Planeje cada detalhe do seu casamento com perfeição 💍✨
          </h1>

          <p className="relative mt-8 max-w-xl text-lg 
          font-regular leading-relaxed text-[#5c4966]">
            A identidade visual do seu casamento começa muito antes
            do grande dia. Este checklist e modelos editáveis
            ajudam você a criar uma celebração elegante, organizada
            e inesquecível.
          </p>

          {/* CTA */}
          <div className="relative mt-10 flex flex-wrap gap-4">
            <a
              href="#comprar"
              className="group inline-flex items-center gap-3 px-12 py-5
              rounded-lg bg-[#7A1685] text-lg font-semibold text-white 
              transition hover:bg-[#540F5E]"
            >
              Comprar ebook

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="relative flex items-end justify-center overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="250"
        >

          {/* seal */}
          <div
            className="absolute right-8 top-8 z-20 flex
            items-center justify-center text-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <img
              src="/images/checklist-de-casamento/selo.png"
              alt="Modelos editáveis em CANVA e PHOTOSHOP"
              className="animate-spin-slow"
            />
          </div>

          {/* ebook */}
          <img
            src="/images/checklist-de-casamento/thayna-checklist.png"
            alt="Checklist completo da papelaria do casamento"
            className="relative z-10 w-full max-w-md object-contain -ml-20"
          />
        </div>
      </div>
    </section>
  );
}
