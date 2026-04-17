export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      text: "Confira o que está previsto em cada pacote e escolha o ideal para você.",
    },
    {
      number: "02",
      text: "Após entrar no checkout, escolha a forma de pagamento.",
    },
    {
      number: "03",
      text: "Falamos com você e criamos algo 100% seu.",
      highlight: true,
    },
  ];

  return (
    <section className="pt-24 px-6 bg-white"
    style={{ 
      backgroundImage: "url('/images/about.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat", }}>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* IMAGEM */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src="/images/thayna.png"
            alt=""
            className="w-full max-w-md"
          />
        </div>

        {/* CONTEÚDO */}
        <div className="order-1 md:order-2">
          
          <h2 className="small-title text-purple-800 ">
            Passo a passo para contratar sua <span className="emphasis"> Identidade Visual Personalizada</span>
          </h2>

          <div className="flex flex-col gap-4">
            
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 p-6 rounded-xl transition-all ${
                  step.highlight
                    ? "bg-purple-100 border border-purple-200"
                    : "border border-purple-200"
                }`}
              >
                
                {/* NÚMERO */}
                <div className={`py-2 px-3 flex items-center justify-center rounded-full font-bold text-body ${
                  step.highlight
                    ? "bg-purple-600 text-white"
                    : "bg-white border border-purple-300 text-purple-600"
                }`}>
                  {step.number}
                </div>

                {/* TEXTO */}
                <p className="text-body">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}