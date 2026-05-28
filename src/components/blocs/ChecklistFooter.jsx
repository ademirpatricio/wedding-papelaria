import { Heart } from "lucide-react";

export default function ChecklistFooter() {
  return (
    <footer className="bg-[#f7f3ef] px-4 pb-10 pt-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <div
          className="flex flex-col items-center justify-between gap-10 border-t border-[#eadff0] pt-10 md:flex-row"
          data-aos="fade-up"
        >
          {/* LOGO */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <img
              src="/logo.svg"
              alt="Malabares Wedding"
              className="h-14 w-auto"
            />

            <p className="max-w-sm text-center text-sm leading-relaxed text-[#7b6f83] md:text-left">
              Papelaria e identidade visual para casamentos
              com mais emoção, organização e personalidade.
            </p>
          </div>

          {/* CENTER */}
          <div className="text-center">
            <p className="text-base text-[#5f5466]">
              ©2025{" "}
              <span className="font-semibold text-[#4b1162]">
                Malabares MKT
              </span>
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
            <a
              href="#"
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#eadff0] bg-white text-[#7A1685] transition hover:-translate-y-1 hover:border-[#d8b5e8] hover:shadow-lg"
            >
              <img
                src="/icons/ic-instagram.svg"
                alt="Instagram"
                className="h-7 w-7"
              />
            </a>

            <a
              href="#"
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#eadff0] bg-white text-[#7A1685] transition hover:-translate-y-1 hover:border-[#d8b5e8] hover:shadow-lg"
            >
              <img
                src="/icons/ic-linkedin.svg"
                alt="LinkedIn"
                className="h-7 w-7"
              />
            </a>

            <a
              href="#"
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#eadff0] bg-white text-[#7A1685] transition hover:-translate-y-1 hover:border-[#d8b5e8] hover:shadow-lg"
            >
              <img
                src="/icons/ic-tiktok.svg"
                alt="TikTok"
                className="h-7 w-7"
              />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-[#eadff0] pt-6 text-center">
          <p className="text-sm text-[#9b8fa3]">
            Todos os direitos reservados • Malabares Wedding
          </p>
        </div>
      </div>
    </footer>
  );
}
