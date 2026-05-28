import { ArrowRight } from "lucide-react";

export default function ChecklistCTA() {
  return (
    <section className="bg-[#f7f3ef] px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[40px] bg-[#f3edf5] md:grid-cols-2">
        {/* LEFT */}
        <div
          className="flex items-center px-8 py-16 md:px-16"
          data-aos="fade-right"
        >
          <div className="max-w-xl">
            <span className="mb-5 inline-block rounded-full bg-[#7A1685]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1685]">
              Seu casamento começa aqui
            </span>

            <h2 className="font-['Source_Serif_4'] text-5xl leading-[1.05] text-[#2d0b45] md:text-7xl">
              Um casamento perfeito começa nos detalhes.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-[#5f5466]">
              Com um checklist prático e completo,
              você evita esquecimentos e garante
              que toda a papelaria do seu casamento
              reflita sua identidade e emoção.
            </p>

            <a
              href="#comprar"
              className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-[#7A1685] px-8 py-5 text-lg font-semibold text-white transition hover:scale-[1.02] hover:shadow-2xl"
            >
              Comprar ebook

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="relative min-h-[620px] overflow-hidden bg-gradient-to-br from-[#8f0d83] via-[#b3008f] to-[#74005e]"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          {/* glow */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

          {/* large image */}
          <div
            className="absolute right-10 top-10 w-[78%] overflow-hidden rounded-[28px] shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <img
              src="/images/checklist/main-convite.jpg"
              alt="Convite de casamento"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* small image 1 */}
          <div
            className="absolute bottom-10 left-8 w-[32%] overflow-hidden rounded-[24px] border-4 border-white shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <img
              src="/images/checklist/detail-1.jpg"
              alt="Detalhes da papelaria"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* small image 2 */}
          <div
            className="absolute bottom-10 right-8 w-[32%] overflow-hidden rounded-[24px] border-4 border-white shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <img
              src="/images/checklist/detail-2.jpg"
              alt="Envelope personalizado"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
