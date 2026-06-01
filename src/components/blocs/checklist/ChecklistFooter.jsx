import { Heart } from "lucide-react";

export default function ChecklistFooter() {
  return (
    <footer className="px-4 pb-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <div
          className="flex flex-col items-center justify-between gap-10 pt-10 md:flex-row"
          data-aos="fade-up"
        >
          {/* LOGO */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <img
              src="/logo-wedding-color.png"
              alt="Malabares Wedding"
              className="h-14 w-auto"
            />
          </div>

          {/* CENTER */}
          <div className="text-center">
            <p className="text-base text-[#5f5466]">
              ©2025{" "}
              <span className="font-semibold text-[#4b1162]">
                Malabares MKT
              </span>
              • Todos os direitos reservados{" "}
            </p>

            <p className="mt-2 flex items-center justify-center gap-2 text-sm text-[#7b6f83]">
              Feito com
              <Heart
                size={14}
                className="fill-pink-500 text-pink-500"
              />
              em Recife • PE
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/malabaresmkt" 
              className="transition hover:scale-110"
              title="Seguir no Instagram" target="_blank" rel="noopener noreferrer">
              <img src="/icons/ic-instagram-primary.svg" alt="Instagram" className="h-8 w-8"/>
            </a>

            {/* Linkedin */}
            <a href="https://www.linkedin.com/company/malabaresmkt/?viewAsMember=true" 
              className="text-[#7A1685] transition hover:scale-110"
              title="Seguir no LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src="/icons/ic-linkedin-primary.svg" alt="LinkedIn" className="h-8 w-8"/>
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/@malabares.mkt" 
              className="text-[#7A1685] transition hover:scale-110" 
              title="Seguir no TikTok" target="_blank" rel="noopener noreferrer">
              <img src="/icons/ic-tiktok-primary.svg" alt="TikTok" className="h-8 w-8"/>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
