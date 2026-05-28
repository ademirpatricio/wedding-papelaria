import { ArrowRight, Check } from "lucide-react";

export default function ChecklistPricing() {
  return (
    <section
      id="comprar"
      className="bg-[#f7f3ef] px-4 py-24 md:px-8"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[40px] bg-[#f3edf5] shadow-[0_30px_100px_rgba(45,11,69,0.08)] md:grid-cols-2">
        {/* LEFT */}
        <div
          className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#7A1685] via-[#8c1697] to-[#5c0f66] px-8 py-16"
          data-aos="fade-right"
        >
          {/* glow */}
          <div className="absolute h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-3xl" />

          {/* ebook stack */}
          <div className="relative" data-aos="zoom-in" data-aos-delay="150">
            {/* back book */}
            <img
              src="/images/checklist/ebook.png"
              alt=""
              className="absolute left-[-90px] top-10 w-[320px] rotate-[-14deg] opacity-60 blur-[1px]"
            />

            {/* middle book */}
            <img
              src="/images/checklist/ebook.png"
              alt=""
              className="absolute left-[-45px] top-5 w-[340px] rotate-[-8deg] opacity-80"
            />

            {/* main */}
            <img
              src="/images/checklist/ebook.png"
              alt="Checklist Completo da Papelaria de Casamento"
              className="relative z-10 w-full max-w-[480px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] transition duration-700 hover:rotate-2 hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="flex items-center px-8 py-16 md:px-16"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <div className="max-w-xl">
            {/* badge */}
            <span className="inline-block rounded-full bg-[#ff4fd8]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#c91bb2]">
              Oferta especial • 50% OFF
            </span>

            {/* title */}
            <h2 className="mt-6 font-['Source_Serif_4'] text-5xl leading-[1.05] text-[#2d0b45] md:text-6xl">
              Garanta agora o seu eBook e comece a planejar um casamento inesquecível
            </h2>

            {/* benefits */}
            <div className="mt-8 space-y-4">
              {[
                "Checklist completo da papelaria",
                "Modelos editáveis Canva + PSD",
                "Guia visual e estratégico",
                "Acesso imediato após a compra",
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7A1685]/10 text-[#7A1685]">
                    <Check size={16} />
                  </div>

                  <span className="text-lg text-[#5f5466]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* pricing */}
            <div className="mt-10">
              <p className="text-lg text-[#5f5466]">
                De{" "}
                <span className="line-through">
                  R$39,90
                </span>{" "}
                por apenas:
              </p>

              <div className="mt-2 flex items-start">
                <span className="font-bold leading-none text-[#7A1685] text-6xl md:text-8xl">
                  R$19
                </span>

                <span className="mt-2 text-3xl font-bold text-[#7A1685] md:text-5xl">
                  ,90
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="group mt-10 inline-flex items-center gap-3 rounded-2xl border-2 border-[#7A1685] bg-[#7A1685] px-8 py-5 text-lg font-semibold text-white transition hover:scale-[1.02] hover:shadow-2xl"
            >
              Comprar Checklist Completo

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </a>

            {/* security */}
            <p className="mt-5 text-sm text-[#7b6f83]">
              Pagamento seguro • Acesso imediato • Download digital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
