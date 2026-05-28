import { Play } from "lucide-react";

export default function ChecklistVideo() {
  return (
    <section className="bg-[#f7f3ef] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-5xl text-center">
        {/* HEADING */}
        <div className="mx-auto max-w-4xl" data-aos="fade-up">
          <span className="mb-4 inline-block rounded-full bg-[#7A1685]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1685]">
            Apresentação do ebook
          </span>

          <h2 className="font-['Source_Serif_4'] text-4xl leading-tight text-[#2d0b45] md:text-6xl">
            Com esse eBook, você aprenderá a organizar
            cada detalhe da papelaria do seu casamento
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#5f5466] md:text-xl">
            Desde o Save the Date até os cartões de agradecimento
            pós-evento. Tudo pensado para criar uma experiência
            memorável para seus convidados e garantir que a
            identidade visual do seu casamento esteja presente
            em cada momento.
          </p>
        </div>

        {/* VIDEO */}
        <div
          className="relative mx-auto mt-16 overflow-hidden rounded-[32px] border border-white/50 bg-white shadow-[0_30px_100px_rgba(45,11,69,0.08)]"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f3d9ff]/30 to-[#dff4ff]/20 pointer-events-none" />

          {/* iframe */}
          <div className="relative aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/SEU_VIDEO_ID"
              title="Checklist Completo da Papelaria de Casamento"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* CTA opcional */}
        <div className="mt-10" data-aos="fade-up" data-aos-delay="250">
          <a
            href="#comprar"
            className="group inline-flex items-center gap-3 rounded-2xl bg-[#7A1685] px-8 py-5 text-lg font-semibold text-white transition hover:scale-[1.02] hover:shadow-2xl"
          >
            Garantir meu ebook

            <Play
              size={18}
              className="transition group-hover:translate-x-1"
              fill="white"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
