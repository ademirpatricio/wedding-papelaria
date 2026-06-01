import { ArrowRight, Check } from "lucide-react";

export default function ChecklistPricing() {
  return (
    <section
      id="comprar"
      className="px-4 py-10 md:px-8"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl 
      bg-[#f3edf5] md:grid-cols-2">
        {/* LEFT */}
        <div
          className="relative flex items-center justify-center overflow-hidden 
          px-8 py-16"
          data-aos="fade-right"
          style={{
            backgroundImage: "url('/images/checklist-de-casamento/pricing-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

        </div>

        {/* RIGHT */}
        <div
          className="flex items-center px-8 py-16 md:px-16"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <div className="max-w-xl">
            {/* badge */}
            <span className="inline-block rounded-full bg-[#ff4fd8]/10 px-4 
            py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#c91bb2]">
              Oferta especial • 50% OFF
            </span>

            {/* title */}
            <h2 className="mt-6 font-['Source_Serif_4'] 
            text-3xl leading-[1.05] text-[#2d0b45] md:text-4xl">
              Garanta agora o seu eBook e comece a planejar um casamento inesquecível
            </h2>

            {/* benefits */}
            <div className="mt-8 space-y-4">
              {[
                "Checklist completo da papelaria",
                "Modelos editáveis Canva + PSD",
                "Acesso imediato após a compra",
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="flex items-center gap-2"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#7A1685]/10 text-[#7A1685]">
                    <Check size={12} />
                  </div>

                  <span className="text-lg text-[#5f5466]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* pricing */}
            <div className="mt-10 mb-6">
              <p className="text-lg text-[#5f5466]">
                De{" "}
                <span className="line-through">
                  R$39,90
                </span>{" "}
                por apenas:
              </p>

              <div className="mt-2 flex items-start">
                <span className="font-bolder leading-none text-[#7A1685] text-4xl md:text-6xl">
                  R$19
                </span>

                <span className="mt-2 text-2xl font-bold text-[#7A1685] md:text-4xl">
                  ,90
                </span>
              </div>
            </div>

            {/* CTA */}

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
