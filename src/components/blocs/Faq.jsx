import { useState } from "react";

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
        <h2 className="text-4xl font-bold text-purple-800">
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
              <p className="text-purple-800 font-semibold">
                {item.question}
              </p>
              <span className="text-2xl text-purple-800">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-4 text-gray-700">
                {item.answer}
              </p>
            )}
          </div>
        ))}

      </div>

      {/* =========================
          💬 CTA FINAL
      ========================= */}
      <div className="max-w-7xl mx-auto px-6 mt-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGEM */}
        <div className="flex justify-center">
          <img
            src="/images/whatsapp.png"
            alt="Whatsapp"
            className="w-56"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h3 className="text-3xl font-bold text-purple-800 mb-4">
            Ainda ficou com alguma dúvida?
          </h3>

          <p className="text-gray-700 mb-6">
            Caso você tenha ficado com alguma dúvida ou precise de um orçamento customizado, 
            <strong> chama a gente no Whatsapp!</strong>
          </p>

          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition"
          >
            CHAMAR NO WHATSAPP
          </a>
        </div>

      </div>

    </section>
  );
}