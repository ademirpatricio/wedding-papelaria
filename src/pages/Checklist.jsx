import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Helmet } from "react-helmet-async";

import ChecklistNav from "../components/blocs/checklist/ChecklistNav";
import ChecklistHero from "../components/blocs/checklist/ChecklistHero";
import ChecklistVideo from "../components/blocs/checklist/ChecklistVideo";
import ChecklistBenefits from "../components/blocs/checklist/ChecklistBenefits";
import ChecklistCTA from "../components/blocs/checklist/ChecklistCTA";
import ChecklistAuthor from "../components/blocs/checklist/ChecklistAuthor";
import ChecklistBonus from "../components/blocs/checklist/ChecklistBonus";
import ChecklistFAQ from "../components/blocs/checklist/ChecklistFAQ";
import ChecklistPricing from "../components/blocs/checklist/ChecklistPricing";
import ChecklistFooter from "../components/blocs/checklist/ChecklistFooter";

function Checklist() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const pageUrl =
    "https://wedding.malabares.com.br/checklist-completo-papelaria-de-casamento";
  const ogImageUrl =
    "https://wedding.malabares.com.br/images/checklist-de-casamento/og-checklist.jpg";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Checklist Completo da Papelaria de Casamento",
    image: ogImageUrl,
    description:
      "Checklist completo para organizar a papelaria do casamento com modelos editáveis no Canva e Photoshop.",
    brand: {
      "@type": "Brand",
      name: "Malabares Wedding",
    },
    offers: {
      "@type": "Offer",
      price: "19.90",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que vou encontrar no eBook?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Um checklist completo da papelaria de casamento, além de modelos editáveis para personalização.",
        },
      },
      {
        "@type": "Question",
        name: "O conteúdo serve para qualquer estilo de casamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O material foi pensado para diferentes estilos e propostas de casamento.",
        },
      },
      {
        "@type": "Question",
        name: "Como recebo o eBook após a compra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Após a confirmação do pagamento, você recebe acesso ao material digital.",
        },
      },
      {
        "@type": "Question",
        name: "Posso usar os modelos mesmo sem saber design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Os modelos foram desenvolvidos para facilitar a personalização mesmo para iniciantes.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>
          Checklist Completo da Papelaria de Casamento + Modelos Editáveis |
          Malabares Wedding
        </title>

        <meta
          name="description"
          content="Planeje cada detalhe da papelaria do seu casamento com um checklist completo e modelos editáveis no Canva e Photoshop. Organize convites, save the date, menus, tags e muito mais."
        />

        <meta
          name="keywords"
          content="papelaria de casamento, checklist casamento, convite de casamento, save the date, identidade visual casamento, papelaria personalizada, modelos editáveis canva, convite editável, casamento elegante, malabares wedding"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <meta
          name="author"
          content="Malabares Wedding"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href={pageUrl}
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Checklist Completo da Papelaria de Casamento + Modelos Editáveis"
        />

        <meta
          property="og:description"
          content="Checklist completo + modelos editáveis para organizar a identidade visual do seu casamento."
        />

        <meta
          property="og:image"
          content={ogImageUrl}
        />

        <meta
          property="og:url"
          content={pageUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Malabares Wedding"
        />

        <meta
          property="og:locale"
          content="pt_BR"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Checklist Completo da Papelaria de Casamento"
        />

        <meta
          name="twitter:description"
          content="Checklist completo + modelos editáveis para organizar a identidade visual do seu casamento."
        />

        <meta
          name="twitter:image"
          content={ogImageUrl}
        />

        {/* Schema Product */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>

        {/* Schema FAQ */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <ChecklistNav />
      <ChecklistHero />
      <ChecklistVideo />
      <ChecklistBenefits />
      <ChecklistCTA />
      <ChecklistAuthor />
      <ChecklistBonus />
      <ChecklistFAQ />
      <ChecklistPricing />
      <ChecklistFooter />
    </>
  );
}

export default Checklist;
