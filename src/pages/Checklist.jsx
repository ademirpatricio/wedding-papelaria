import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ChecklistHero from "../components/blocs/ChecklistHero";
import ChecklistVideo from "../components/blocs/ChecklistVideo";
import ChecklistBenefits from "../components/blocs/ChecklistBenefits";
import ChecklistCTA from "../components/blocs/ChecklistCTA";
import ChecklistAuthor from "../components/blocs/ChecklistAuthor";
import ChecklistBonus from "../components/blocs/ChecklistBonus";
import ChecklistFAQ from "../components/blocs/ChecklistFAQ";
import ChecklistPricing from "../components/blocs/ChecklistPricing";
import ChecklistFooter from "../components/blocs/ChecklistFooter";

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
