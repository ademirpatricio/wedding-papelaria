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

  return (
    <>
      <Helmet>
        <title>
          Checklist Completo da Papelaria de Casamento • Malabares Wedding
        </title>

        <meta
          name="description"
          content="Organize todos os detalhes da papelaria do seu casamento com um checklist completo + modelos editáveis no Canva e Photoshop."
        />

        <meta
          property="og:title"
          content="Checklist Completo da Papelaria de Casamento"
        />

        <meta
          property="og:description"
          content="Checklist + modelos editáveis para organizar a identidade visual do seu casamento."
        />

        <meta
          property="og:image"
          content="https://www.malabares.com.br/images/seo/og-checklist.jpg"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.malabares.com.br/checklist-completo-papelaria-de-casamento"
        />

        <link
          rel="canonical"
          href="https://www.malabares.com.br/checklist-completo-papelaria-de-casamento"
        />
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