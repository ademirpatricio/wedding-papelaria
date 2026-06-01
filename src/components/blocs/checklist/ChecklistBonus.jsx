import { Gift, ArrowRight } from "lucide-react";

export default function ChecklistBonus() {
  return (
    <section
  className="relative overflow-hidden px-12 py-10 md:px-8"
  style={{
    backgroundImage: "url('/images/checklist-de-casamento/bonus-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#7A1685]/75" />


      {/* CONTENT */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
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
          <h2 className="font-['Source_Serif_4'] 
          text-3xl leading-[1.05] text-white md:text-4xl">
            Modelos editáveis para deixar seu casamento ainda mais especial 🎁 
          </h2>

          {/* text */}
          <p className="mt-8 text-xl leading-relaxed text-white/80">
            Receba modelos editáveis no Canva e Photoshop
            de Save the Date e convites para personalizar
            cada detalhe da sua identidade visual.
          </p>

          {/* CTA */}
          <a
            href="https://gex.goexplosion.com/link/checkout?utm=checklist-completo-da-papelaria-de-casamento"
            className="group mt-10 inline-flex items-center gap-3 
            rounded-xl border-2 border-white/40 bg-white/10 px-8 
            py-5 text-lg font-semibold text-white w-full md:w-auto
            transition hover:bg-white hover:text-[#7A1685]"
          >
            Quero o meu bônus

            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* DIREITA */}
          <div
            className="relative flex justify-center"
            data-aos="fade-left"
          >
            {/* Card principal */}
            <img
              src="/images/checklist-de-casamento/save-the-date.png"
              alt="Modelo editável Save the Date"
              className="w-full max-w-[520px] -mb-10"
            />

            {/* Selo PSD */}
            <img
              src="/images/checklist-de-casamento/selo-psd.png"
              alt="PSD"
              className="
              absolute
              right-4
              md:righ-12
              top-8
              z-20
              w-28
              md:w-36
              animate-spin-slow"
            />

            {/* Selo Canva */}
            <img
              src="/images/checklist-de-casamento/selo-canva.png"
              alt="Canva"
              className="
              absolute
              top-36
              md:top-48
              right-4
              md:righ-12
              z-20
              w-28
              md:w-36
              animate-spin-slow"
            />
          </div>
      </div>
    </section>
  );
}
