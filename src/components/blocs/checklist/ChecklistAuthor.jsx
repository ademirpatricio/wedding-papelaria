export default function ChecklistAuthor() {
  return (
    <section className="px-12 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* IMAGE */}
        <div
          className="relative flex justify-center"
          data-aos="fade-right"
        >
          {/* image */}
          <div className="relative overflow-hidden">
            <img
              src="/images/checklist-de-casamento/author-thayna-img.png"
              alt="Thayná Aguiar"
              className="relative z-10 w-full max-w-[540px] object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div data-aos="fade-left" data-aos-delay="150">
          <span className="mb-4 inline-block rounded-full bg-[#7A1685]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1685]">
            Sobre a autora ✍️
          </span>

          <h2 className="font-['Source_Serif_4'] text-3xl leading-tight text-[#2d0b45] 
          md:text-4xl">
            Criado por quem vive o universo dos casamentos todos os dias
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#5f5466]">
            <p>
              O Checklist Completo da Papelaria de Casamento
              foi criado por{" "}
              <strong className="text-[#4b1162]">
                Thayná Aguiar
              </strong>,
              especialista em comunicação visual e sócia da{" "}
              <strong className="text-[#4b1162]">
                Malabares Marketing
              </strong>.
            </p>

            <p>
              Com experiência no universo de eventos e identidade
              visual, Thayná já ajudou dezenas de noivas a
              transformarem seus casamentos em experiências
              memoráveis através da papelaria.
            </p>

            <p>
              Este eBook reúne orientações práticas, referências
              visuais e dicas essenciais para que você organize
              cada detalhe com mais segurança, sofisticação
              e personalidade.
            </p>
          </div>

          {/* signature */}
          <div className="mt-10">
            <span className="text-lg italic text-[#7A1685]">
              Com carinho,
            </span>

            <h3 className="mt-2 font-['Source_Serif_4'] text-2xl text-[#2d0b45]">
              Thayná Aguiar
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
