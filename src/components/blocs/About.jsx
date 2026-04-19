import Button from "../ui/Button";

export default function About() {
  return (
    <section className="w-full py-20 bg-[#f5f1ed]"
    style={{ backgroundImage: "url('/images/about.jpg')" }}>
      
      {/* =========================
          🔹 BLOCO 1
      ========================= */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* 🖼️ IMAGENS */}
        <div className="relative h-[240px]  md:h-[500px]">
          
          <img
            src="/images/img2.png" alt=""
            className="absolute  shadow-lg rotate-0  border-white
            w-40 border-4 top-12 left-4
            md:w-64 md:border-8 md:top-16 md:left-0"
          />

          <img
            src="/images/img3.png" alt=""
            className="absolute shadow-lg rotate-[-10deg] border-white
            w-40 border-4 top-24 left-20
            md:w-64 md:border-8 md:top-40 md:left-24"
          />

          <img
            src="/images/img1.png" alt=""
            className="absolute shadow-lg rotate-[-12deg] border-white
            w-40 border-4 left-36 top-0
            md:w-72 md:border-8 md:left-56 md:top-0"
          />

        </div>

        {/* 📝 TEXTO */}
        <div className="bg-white p-10 md:p-20 rounded-2xl shadow-xl text-left">
          
          <h2 className="small-title text-purple-800">
            O convite do seu casamento deveria ser
            <span className="emphasis"> tão especial quanto a sua história.</span> 
          </h2>

          <p className="text-body mb-4 ">
            Você já procurou convites e papelaria para casamento e sentiu que tudo parecia genérico?
            Muitos casais acabam escolhendo modelos prontos, sem personalidade.
          </p>

          <p className="text-body">
            Agora imagine ter uma <strong>identidade visual que traduz exatamente a essência do seu amor</strong>,
            criando uma experiência única para você e seus convidados.
          </p>

        </div>
      </div>

      {/* =========================
          🔹 BLOCO 2
      ========================= */}
      <div className="max-w-5xl mx-auto px-6 mt-24 grid md:grid-cols-[1fr_1.8fr] gap-12 items-center">
        
        {/* 📝 TEXTO */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="small-title text-purple-800">
            É isso que a Malabares Wedding faz por você.
          </h2>

          <p className="text-body mb-8">
            Criamos um <strong>conceito exclusivo</strong> que vai do convite à papelaria,
            garantindo harmonia, sofisticação e um toque especial em cada detalhe.
          </p>

          <Button
            label="💍 ESCOLHA SEU PLANO"
            variant="purple"
            link="#pricing"
          />
        </div>

        {/* 🖼️ IMAGEM */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src="/images/mockup.png"
            alt=""
            className="w-full"
          />
        </div>

      </div>

    </section>
  );
}