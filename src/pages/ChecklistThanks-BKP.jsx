import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function ChecklistThanks() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f3ef] px-4 py-20 md:px-8">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#d58de5]/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Ícone */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#7A1685]/10">
          <CheckCircle2
            size={56}
            className="text-[#7A1685]"
          />
        </div>

        {/* Título */}
        <h1
          className="
          font-['Source_Serif_4']
          text-3xl
          leading-tight
          text-[#2d0b45]
          md:text-4xl"
        >
          Compra realizada com sucesso! 🎉
        </h1>

        {/* Texto */}
        <p
          className="
          mt-6
          max-w-2xl
          text-lg
          leading-relaxed
          text-[#5f5466]"
        >
          Obrigada por adquirir o{" "}
          <strong>
            Checklist Completo da Papelaria de Casamento
          </strong>
          .
          <br />
          Seu acesso já está sendo preparado e chegará no email
          informado durante a compra.
        </p>

        {/* Card */}
        <div
          className="
          mt-12
          w-full
          max-w-xl
          rounded-xl
          border
          border-[#eadff0]
          bg-white
          p-8
          shadow-sm"
        >
          <div className="flex flex-col gap-6 text-left">
            <div className="flex items-start gap-4">
              <Mail
                size={28}
                className="mt-1 text-[#7A1685]"
              />

              <div>
                <h2 className="text-xl font-semibold text-[#2d0b45]">
                  Verifique seu email
                </h2>

                <p className="mt-2 text-[#5f5466]">
                  O material será enviado para o email utilizado
                  na compra. Caso não encontre na caixa de entrada,
                  confira também a pasta de spam ou promoções.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Suporte */}
        <div className="mt-10 max-w-md">
          <p className="text-[#5f5466]">
            Não recebeu o acesso após alguns minutos? Entre em contato conosco e teremos prazer em ajudar.
          </p>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/5581997278234?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Malabares%20Wedding.%20"
          target="_blank"
          rel="noopener noreferrer"
          className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-xl
          bg-[#7A1685]
          px-10
          py-5
          text-lg
          font-semibold
          text-white
          transition
          hover:bg-[#5f1168]"
        >
          Falar com a Malabares

          <ArrowRight size={20} />
        </a>

        {/* Rodapé */}
        <div className="mt-16">
          <img
            src="/logo-wedding-color.svg"
            alt="Malabares Wedding"
            className="mx-auto h-12"
          />

          <p className="mt-4 text-sm text-[#7f7388]">
            © {new Date().getFullYear()} Malabares Wedding
          </p>
        </div>
      </div>
    </section>
  );
}