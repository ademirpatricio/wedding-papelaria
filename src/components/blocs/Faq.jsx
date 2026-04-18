import { useState } from "react";
import Button from "../ui/Button";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "⏱️ Quanto tempo demora para criar a Identidade Visual?",
      answer: "O prazo varia conforme o pacote, mas geralmente leva entre 7 a 15 dias úteis após o briefing.",
    },
    {
      question: "🎨 Posso sugerir ideias para o design?",
      answer: "Sim! Você pode (e deve) compartilhar referências, ideias e inspirações para personalizar ao máximo.",
    },
    {
      question: "📄 Vocês fazem a impressão ou só entregam o design?",
      answer: "Entregamos o design pronto para impressão, mas também podemos indicar fornecedores.",
    },
    {
      question: "🔄 Posso pedir ajustes depois de receber o design?",
      answer: "Sim, cada pacote inclui uma quantidade de revisões para garantir que tudo fique perfeito.",
    },
    {
      question: "💻 Eu preciso saber de design para usar os arquivos?",
      answer: "Não! Os arquivos são entregues prontos para uso com orientações simples.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-[#f5f1ed]">
      
      {/* =========================
          🧠 TÍTULO
      ========================= */}
      <div className="text-center mb-16 px-6">
        <h2 className="title emphasis text-purple-800">
          F.A.Q <span className="text-2xl font-normal ml-4">Perguntas Frequentes</span>
        </h2>
      </div>

      {/* =========================
          📚 FAQ LIST
      ========================= */}
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-[#e7e2db] rounded-xl p-5 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-normal text-body">
                {item.question}
              </p>
              <span className="text-2xl text-purple-800">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-4 text-gray-700 text-md text-light">
                {item.answer}
              </p>
            )}
          </div>
        ))}

      </div>

      {/* =========================
          💬 CTA FINAL
      ========================= */}
      <div className="max-w-7xl mx-auto px-6 mt-24 grid md:grid-cols-2 gap-2 items-center">
        
        {/* IMAGEM */}
        <div className="flex justify-center">
          <img
            src="/images/whatsapp.png"
            alt="Whatsapp"
            className="w-64"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h3 className="small-title emphasis text-purple-800 mb-5">
            Ainda ficou com alguma dúvida?
          </h3>

          <p className="text-body mb-7">
            Caso você tenha ficado com alguma dúvida ou precise de um orçamento customizado, 
            <strong> chama a gente no Whatsapp!</strong>
          </p>

          <Button
              variant="whatsapp"
              label="Chama a gente no Whatsapp"
              link="https://wa.me/5581997278234?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Malabares%20Wedding.%20"
              target="_blank"
            />
        </div>

      </div>

    </section>
  );
}