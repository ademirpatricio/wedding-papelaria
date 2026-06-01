import { Play } from "lucide-react";

export default function ChecklistVideo() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-5xl text-center">
        {/* HEADING */}
        <div className="mx-auto max-w-4xl" data-aos="fade-up">
          <span className="mb-4 inline-block rounded-full bg-[#7A1685]/10 px-4 
          py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1685]">
            Apresentação do e-Book
          </span>

          <h2 className="font-['Source_Serif_4'] text-3xl mb-4
          leading-tight text-[#2d0b45] md:text-4xl">
            Com esse e-Book, você aprenderá a organizar
            cada detalhe da papelaria do seu casamento
          </h2>

          <p className="mx-auto mt-8 max-w-3xl mb-8
          text-lg leading-relaxed text-[#5f5466]">
            Desde o Save the Date até os cartões de agradecimento
            pós-evento. Tudo pensado para criar uma experiência
            memorável para seus convidados e garantir que a
            identidade visual do seu casamento esteja presente
            em cada momento.
          </p>
        </div>

        {/* VIDEO */}
        <div
          className="relative mx-auto overflow-hidden rounded-xl 
          border border-white/50 bg-white"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          {/* glow */}
          <div className="absolute inset-0 pointer-events-none" />

          {/* iframe */}
          <div className="relative aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/AbsZvSVgdYQ"
              title="Checklist Completo da Papelaria de Casamento"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
              gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
