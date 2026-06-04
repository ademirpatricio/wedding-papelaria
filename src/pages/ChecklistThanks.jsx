import { ArrowRight } from "lucide-react";

export default function ChecklistThanks() {
  return (
    <main className="bg-[#f7f3ef] overflow-hidden">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="px-4 pb-12 pt-12 sm:pt-16 md:px-6 md:pb-0 md:pt-20"
      style={{
          backgroundImage: "url('/images/checklist-de-casamento/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">

          {/* IMAGE */}
          <div className="order-2 md:order-1">
            <img
              src="/images/checklist-de-casamento/thayna-checklist.png"
              alt=""
              className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-none -mb-12 md:mb-0"
            />
          </div>

          {/* CONTENT */}
          <div className="order-1 text-center md:order-2 md:text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A1685] sm:text-sm">
              Compra confirmada
            </span>

            <h1
              className="
              mt-4
              font-['Source_Serif_4']
              text-3xl
              leading-tight
              text-[#2d0b45]
              sm:text-4xl
              md:text-6xl"
            >
              Seu acesso está a caminho ✨
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5f5466] sm:text-lg md:mx-0 md:text-xl">
              Obrigada por adquirir o Checklist Completo da
              Papelaria de Casamento. Em instantes você receberá tudo no email
              utilizado durante a compra, mas caso precise, você pode clicar no 
              botão abaixo para baixar seu ebook agora.
            </p>

            <a
              href="https://malabares.com.br/arquivos/wedding/Checklist%20Completo%20da%20Papelaria%20de%20Casamento-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
              mt-8 inline-flex w-full items-center justify-center gap-3
              rounded-xl bg-[#7A1685]
              px-6 py-4 text-base font-semibold text-white
              sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
            >
              Baixar meu Checklist
              <ArrowRight className="shrink-0" size={20} />
            </a>
          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* BLOCO 2 */}
      {/* ================================================= */}

      <section className="bg-white px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">

          {/* CONTENT */}
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A1685] sm:text-sm">
              Próximo passo
            </span>

            <h2
              className="
              mt-4
              font-['Source_Serif_4']
              text-3xl
              text-[#2d0b45]
              sm:text-4xl
              md:text-5xl"
            >
              Acesse seu material e comece a planejar
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5f5466] sm:text-lg md:mx-0">
              Seu ebook fica disponível para download na página de membros 
              da <strong>GoExplosion</strong>. Para acessar, clique no botão abaixo e
              faça login com o email utilizado na compra.
            </p>

            <a
              href="https://malabares.goexplosion.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              mt-8 inline-flex w-full items-center justify-center gap-3
              rounded-xl bg-[#7A1685]
              px-6 py-4 text-base font-semibold text-white
              sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
            >
              Acessar área de Membros
              <ArrowRight className="shrink-0" size={20} />
            </a>

          </div>

          {/* IMAGE */}
          <div>
            <img
              src="/images/checklist-de-casamento/pricing-bg.jpg"
              alt=""
              className="mx-auto w-full max-w-md rounded md:max-w-none"
            />
          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* GRID 2x2 */}
      {/* ================================================= */}

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-8 md:mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="
              font-['Source_Serif_4']
              text-3xl
              text-[#2d0b45]
              sm:text-4xl
              md:text-5xl"
            >
              Bônus com modelos editáveis 🎁
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#5f5466] sm:text-lg">
              Acesse ou baixe os modelos editáveis para deixar seu casamento ainda mais especial.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">

            {/* ITEM 1 */}
            <div className="flex flex-col gap-5 rounded bg-white px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-6">
              <img
                src="/images/checklist-de-casamento/bonus-1.jpg"
                alt=""
                className="h-40 w-full rounded object-cover sm:h-36 sm:w-36 sm:shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-[#2d0b45] mb-2">Convite para Photoshop</h3>
                <p className="mb-2 text-[#5f5466]">Arquivo editável de convite de casamento em psd.</p>
                <a href="https://malabares.com.br/arquivos/wedding/malabares-wedding-convite.psd.zip" 
                target="_blank" rel="noopener noreferrer" className="text-[#7A1685] hover:underline">Baixar arquivo</a>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col gap-5 rounded bg-white px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-6">
              <img
                src="/images/checklist-de-casamento/bonus-2.jpg"
                alt=""
                className="h-40 w-full rounded object-cover sm:h-36 sm:w-36 sm:shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-[#2d0b45] mb-2">Convite para Canva</h3>
                <p className="mb-2 text-[#5f5466]">Arquivo editável do convite direto no Canva.</p>
                <a href="https://canva.link/10xeyt2ukbpv2jx" target="_blank" className="text-[#7A1685] hover:underline">Acessar arquivo</a>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col gap-5 rounded bg-white px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-6">
              <img
                src="/images/checklist-de-casamento/bonus-3.jpg"
                alt=""
                className="h-40 w-full rounded object-cover sm:h-36 sm:w-36 sm:shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-[#2d0b45] mb-2">Save the Date para Photoshop</h3>
                <p className="mb-2 text-[#5f5466]">Arquivo editável de save the date em psd.</p>
                <a href="https://malabares.com.br/arquivos/wedding/malabares-wedding-save-the-date.psd.zip" 
                target="_blank" rel="noopener noreferrer" className="text-[#7A1685] hover:underline">Baixar arquivo</a>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex flex-col gap-5 rounded bg-white px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-6">
              <img
                src="/images/checklist-de-casamento/bonus-4.jpg"
                alt=""
                className="h-40 w-full rounded object-cover sm:h-36 sm:w-36 sm:shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-[#2d0b45] mb-2">Save the Date para Canva</h3>
                <p className="mb-2 text-[#5f5466]">Arquivo editável de save the date no Canva.</p>
                <a href="https://canva.link/nvypxt9cgq4jifn" target="_blank" className="text-[#7A1685] hover:underline">Acessar arquivo</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* BLOCO FINAL */}
      {/* ================================================= */}

      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="w-full">
            <h2
              className="
              font-['Source_Serif_4']
              text-3xl
              text-[#2d0b45]
              sm:text-4xl
              md:text-5xl"
            >
              Precisa de ajuda?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5f5466] sm:text-lg">
              Caso tenha qualquer dúvida sobre seu acesso,
              fale conosco pelo WhatsApp.
            </p>

            <a
              href="https://wa.me/5581997278234"
              target="_blank"
              rel="noopener noreferrer"
              className="
              mt-8 inline-flex w-full items-center justify-center gap-3
              rounded-xl bg-[#7A1685]
              px-6 py-4 text-base font-semibold text-white
              sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
            >
              Falar com a Malabares
              <ArrowRight className="shrink-0" size={20} />
            </a>
          </div>
          <img
            src="/logo-wedding-color.svg"
            alt="Malabares Wedding"
            className="mx-auto mt-10 h-10 sm:h-12"
          />
          <p className="mt-4 text-sm text-[#7f7388]">
            © {new Date().getFullYear()} Malabares Wedding
          </p>

        </div>
      </section>

    </main>
  );
}
