export default function AboutMalabares() {
  return (
    <section className="w-full">
      
      <div className="grid md:grid-cols-2">
        
        {/* =========================
            🟣 TEXTO (lado esquerdo)
        ========================= */}
        <div className="bg-purple-700 text-white flex items-center">
          
          <div className="max-w-xl mx-auto px-8 py-20">
            
            <p className="text-lg mb-4">
              Conheça um pouquinho mais
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-yellow-300">sobre a Malabares</span>
            </h2>

            <p className="font-semibold mb-6">
              Somos uma dupla apaixonada por comunicação, design, inovação e tecnologia.
            </p>

            <p className="mb-6 text-white/90">
              Estamos localizados em Recife, centro de inovação, tecnologia e cultura e
              nascemos do sonho de transformar ideias criativas em negócios digitais de sucesso.
            </p>

            <p className="text-white/90">
              Unimos criatividade e análise de dados para criar conteúdo que atende às
              necessidades do seu público e projeto.
            </p>

          </div>
        </div>

        {/* =========================
            🖼️ IMAGEM (lado direito)
        ========================= */}
        <div className="h-[400px] md:h-auto">
          <img
            src="/images/malabares.jpg"
            alt="Equipe Malabares"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  );
}