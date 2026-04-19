import Button from "../ui/Button";

export default function AboutMalabares() {
  return (
    <section className="w-full">
      
      <div className="grid md:grid-cols-2">
        
        {/* =========================
            🟣 TEXTO (lado esquerdo)
        ========================= */}
        <div className="bg-[#4f2286] text-white flex items-center">
          
          <div className="max-w-xl mx-auto px-8 py-20">

            <h2 className="title mb-8 text-primary text-center md:text-left">
              <span className="small-title text-white">Conheça um pouquinho mais </span>
              sobre a Malabares
            </h2>

            <h3 className="sub-title font-medium mb-4">
              Somos uma dupla apaixonada por comunicação, design, inovação e tecnologia.
            </h3>

            <p className="text-body text-ligh text-white/80 mb-6">
              Estamos localizados em Recife, centro de inovação, tecnologia e cultura e
              nascemos do sonho de transformar ideias criativas em negócios digitais de sucesso.
            </p>

            <p className="text-body text-ligh text-white/80 mb-8">
              Unimos criatividade e análise de dados para criar conteúdo que atende às
              necessidades do seu público e projeto.
            </p>
            <Button 
              variant="white"
              label="Conheça a Malabares"
              link="https://malabares.com.br/"
              target="_blank"
            />

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