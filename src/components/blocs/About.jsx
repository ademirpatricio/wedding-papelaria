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
        <div className="relative h-[500px]">
          
          <img
            src="/images/img1.png"
            alt=""
            className="absolute top-0 left-0 w-60 rounded-xl shadow-lg rotate-[-6deg]"
          />

          <img
            src="/images/img2.png"
            alt=""
            className="absolute top-10 left-32 w-72 rounded-xl shadow-lg rotate-3"
          />

          <img
            src="/images/img3.png"
            alt=""
            className="absolute bottom-0 left-10 w-64 rounded-xl shadow-lg"
          />

        </div>

        {/* 📝 TEXTO */}
        <div className="bg-white p-20 rounded-2xl shadow-xl text-left">
          
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
            O convite do seu casamento deveria ser tão especial quanto a sua história.
          </h2>

          <p className="text-gray-600 mb-4">
            Você já procurou convites e papelaria para casamento e sentiu que tudo parecia genérico?
            Muitos casais acabam escolhendo modelos prontos, sem personalidade.
          </p>

          <p className="text-gray-600">
            Agora imagine ter uma identidade visual que <strong>traduz exatamente a essência do seu amor</strong>,
            criando uma experiência única para você e seus convidados.
          </p>

        </div>
      </div>

      {/* =========================
          🔹 BLOCO 2
      ========================= */}
      <div className="max-w-5xl mx-auto px-6 mt-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* 📝 TEXTO */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
            É isso que a Malabares Wedding faz por você.
          </h2>

          <p className="text-gray-600 mb-6">
            Criamos um <strong>conceito exclusivo</strong> que vai do convite à papelaria,
            garantindo harmonia, sofisticação e um toque especial em cada detalhe.
          </p>

          <Button
            label="💍 ESCOLHA SEU PLANO"
            variant="purple"
          />
        </div>

        {/* 🖼️ IMAGEM */}
        <div className="flex justify-center">
          <img
            src="/images/mockup.png"
            alt=""
            className="w-full max-w-md"
          />
        </div>

      </div>

    </section>
  );
}