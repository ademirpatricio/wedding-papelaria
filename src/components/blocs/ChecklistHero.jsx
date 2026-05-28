import { ArrowRight } from "lucide-react";

export default function ChecklistHero() {
  return (
    <section className="bg-[#f7f3ef] px-4 pt-6 pb-10 md:px-8">
      {/* NAV */}
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* LOGO */}
        <img
          src="/logo.svg"
          alt="Malabares Wedding"
          className="h-12 w-auto md:h-14"
        />

        {/* RIGHT */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#"
              className="text-[#7A1685] transition hover:scale-110"
            >
              <img
                src="/icons/ic-instagram.svg"
                alt="Instagram"
                className="h-8 w-8"
              />
            </a>

            <a
              href="#"
              className="text-[#7A1685] transition hover:scale-110"
            >
              <img
                src="/icons/ic-linkedin.svg"
                alt="LinkedIn"
                className="h-8 w-8"
              />
            </a>

            <a
              href="#"
              className="text-[#7A1685] transition hover:scale-110"
            >
              <img
                src="/icons/ic-tiktok.svg"
                alt="TikTok"
                className="h-8 w-8"
              />
            </a>
          </div>

          <a
            href="#comprar"
            className="rounded-2xl border-2 border-[#7A1685] px-6 py-3 text-sm font-semibold text-[#7A1685] transition hover:bg-[#7A1685] hover:text-white md:px-8 md:text-base"
          >
            Garanta seu ebook
          </a>
        </div>
      </div>

      {/* HERO */}
      <div
        className="relative mx-auto mt-8 grid max-w-7xl overflow-hidden rounded-[40px] bg-white md:grid-cols-2"
        data-aos="fade-up"
      >
        {/* TEXT */}
        <div
          className="relative z-10 flex flex-col justify-center px-8 py-14 md:px-16"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          {/* glow */}
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />

          <span className="relative mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1685]">
            Checklist Completo da Papelaria de Casamento
          </span>

          <h1 className="relative max-w-xl font-['Source_Serif_4'] text-5xl leading-[1.05] text-[#2d0b45] md:text-7xl">
            Planeje cada detalhe do seu casamento com perfeição.
          </h1>

          <p className="relative mt-8 max-w-xl text-lg leading-relaxed text-[#5c4966]">
            A identidade visual do seu casamento começa muito antes
            do grande dia. Este checklist e modelos editáveis
            ajudam você a criar uma celebração elegante, organizada
            e inesquecível.
          </p>

          {/* CTA */}
          <div className="relative mt-10 flex flex-wrap gap-4">
            <a
              href="#comprar"
              className="group inline-flex items-center gap-3 rounded-2xl bg-[#7A1685] px-8 py-5 text-lg font-semibold text-white transition hover:scale-[1.02] hover:shadow-2xl"
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
          {/* background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5d9ff] via-transparent to-[#d9f0ff]" />

          {/* texture */}
          <div className="absolute inset-0 opacity-30 mix-blend-multiply">
            <img
              src="/images/about.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* seal */}
          <div
            className="absolute right-8 top-8 z-20 flex h-28 w-28 items-center justify-center rounded-full bg-[#f4b400] p-4 text-center text-xs font-bold uppercase leading-tight text-[#5a3400] shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Canva + PSD
          </div>

          {/* ebook */}
          <img
            src="/images/ebook.png"
            alt="Checklist completo da papelaria do casamento"
            className="relative z-10 w-full max-w-md object-contain p-8 md:p-12"
          />
        </div>
      </div>
    </section>
  );
}
