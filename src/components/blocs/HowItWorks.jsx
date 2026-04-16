export default function HowItWorks() {
  const steps = [
    {
      type: "outline",
      text: "Confira o que está previsto em cada pacote e escolha aquele que se adequa melhor às suas necessidades.",
    },
    {
      type: "filled",
      text: "Após entrar no checkout do pacote escolhido, escolha a forma de pagamento que seja melhor para você.",
    },
    {
      type: "highlight",
      text: "Após a confirmação do pagamento, nossa equipe irá entrar em contato para conversarmos sobre seu projeto e alinharmos os prazos e planejamento.",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#f5f1ed]">
      
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* =========================
            🖼️ IMAGEM
        ========================= */}
        <div className="flex justify-center">
          <img
            src="/images/person.png"
            alt=""
            className="w-full max-w-md"
          />
        </div>

        {/* =========================
            🧠 CONTEÚDO
        ========================= */}
        <div className="text-left">
          
          {/* TÍTULO */}
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-10">
            Passo a passo para contratar seu plano de{" "}
            <span className="font-bold">
              Identidade Visual para Casamento
            </span>{" "}
            com a gente
          </h2>

          {/* TIMELINE */}
          <div className="relative">
            
            {/* LINHA */}
            <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-gray-300" />

            <div className="space-y-10">
              
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 relative">
                  
                  {/* ÍCONE */}
                  <div className="relative z-10">
                    {step.type === "outline" && (
                      <div className="w-8 h-8 rounded-full border-2 border-purple-700 bg-white" />
                    )}

                    {step.type === "filled" && (
                      <div className="w-8 h-8 rounded-full bg-purple-700" />
                    )}

                    {step.type === "highlight" && (
                      <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm">
                        ✓
                      </div>
                    )}
                  </div>

                  {/* TEXTO */}
                  {step.type === "highlight" ? (
                    <div className="bg-purple-100 p-6 rounded-xl text-gray-700">
                      {step.text}
                    </div>
                  ) : (
                    <p className="text-gray-700 max-w-md">
                      {step.text}
                    </p>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}