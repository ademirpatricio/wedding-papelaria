import { ArrowRight } from "lucide-react";

function ChecklistNav() {
  return (
    <section id="checklistNav" className=" px-4 pt-6 pb-0 md:py-10 md:px-8">

      {/* Containter */}
      <div className="mx-auto flex flex-col md:flex-row max-w-7xl items-center justify-between">

        {/* LOGO */}
        <img
        src="/logo-wedding-color.svg"
        alt="Malabares Wedding"
        className="h-14 w-auto mb-6 md:mb-0"
        />
        
        <div className="flex items-center gap-4 md:gap-6">

          {/* Ícones das redes sociais */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Instagram */}
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

          <a
            href="https://gex.goexplosion.com/link/checkout?utm=checklist-completo-da-papelaria-de-casamento"
            className="group inline-flex items-center gap-3 border-2 px-8 py-4
            border-[#7A1685] rounded-lg text-md text-[#7A1685] font-semibold
            transition hover:bg-[#7A1685] hover:text-white hidden md:inline-flex"
            >
            <ArrowRight size={20}/>
              Garanta seu e-Book
            </a>
        </div>
      </div>
        
    </section>
    )
}
export default ChecklistNav;