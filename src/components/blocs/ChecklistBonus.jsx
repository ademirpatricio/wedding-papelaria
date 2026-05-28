import { Gift, ArrowRight } from "lucide-react";

export default function ChecklistBonus() {
  return (
    <section className="relative overflow-hidden bg-[#7A1685] px-4 py-24 md:px-8">
      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-pink-300 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500 blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* LEFT */}
        <div className="max-w-xl" data-aos="fade-right">
          {/* label */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur-sm">
            <Gift className="text-yellow-300" size={24} />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Bônus exclusivo
            </span>
          </div>

          {/* title */}
          <h2 className="font-['Source_Serif_4'] text-5xl leading-[1.05] text-white md:text-7xl">
            Modelos editáveis para deixar seu casamento ainda mais especial
          </h2>

          {/* text */}
          <p className="mt-8 text-xl leading-relaxed text-white/80">
            Receba modelos editáveis no Canva e Photoshop
            de Save the Date e convites para personalizar
            cada detalhe da sua identidade visual.
          </p>

          {/* badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-pink-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
              Canva
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#7A1685] shadow-lg">
              PSD
            </span>
          </div>

          {/* CTA */}
          <a
            href="#comprar"
            className="group mt-10 inline-flex items-center gap-3 rounded-2xl border-2 border-white/40 bg-white/10 px-8 py-5 text-lg font-semibold text-white backdrop-blur-sm transition hover:scale-[1.02] hover:bg-white hover:text-[#7A1685]"
          >
            Quero o ebook e meu bônus

            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* RIGHT */}
        <div
          className="relative flex items-center justify-center"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          {/* glow */}
          <div className="absolute h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-3xl" />

          {/* floating card */}
          <div
            className="relative rotate-[-6deg] transition duration-700 hover:rotate-[-2deg]"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src="/images/checklist/save-the-date.png"
              alt="Modelo editável de Save the Date"
              className="relative z-10 w-full max-w-[500px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
            />

            {/* floating badges */}
            <div className="absolute -right-6 top-12 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#7A1685] shadow-2xl">
              PSD
            </div>

            <div className="absolute -left-6 bottom-12 rounded-full bg-[#f7c400] px-5 py-3 text-sm font-bold text-[#5f4300] shadow-2xl">
              Canva
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
