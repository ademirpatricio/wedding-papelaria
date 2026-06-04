import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const distDir = "dist";
const baseHtmlPath = join(distDir, "index.html");

const pages = [
  {
    route: "checklist-completo-papelaria-de-casamento",
    title:
      "Checklist Completo da Papelaria de Casamento + Modelos Editáveis | Malabares Wedding",
    description:
      "Planeje cada detalhe da papelaria do seu casamento com um checklist completo e modelos editáveis no Canva e Photoshop.",
    keywords:
      "papelaria de casamento, checklist casamento, convite de casamento, save the date, identidade visual casamento, modelos editáveis canva, convite editável, malabares wedding",
    canonical:
      "https://wedding.malabares.com.br/checklist-completo-papelaria-de-casamento",
    ogTitle:
      "Checklist Completo da Papelaria de Casamento + Modelos Editáveis",
    ogDescription:
      "Checklist completo + modelos editáveis para organizar a identidade visual do seu casamento.",
    ogImage:
      "https://wedding.malabares.com.br/images/checklist-de-casamento/og-checklist.jpg",
  },
];

function removeManagedTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(
      /<meta\s+name=["'](?:description|keywords|author|robots|twitter:card|twitter:title|twitter:description|twitter:image|twitter:image:alt)["'][^>]*>\s*/gi,
      "",
    )
    .replace(
      /<meta\s+property=["'](?:og:title|og:description|og:type|og:image|og:image:secure_url|og:image:type|og:image:width|og:image:height|og:image:alt|og:url|og:site_name|og:locale)["'][^>]*>\s*/gi,
      "",
    )
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "");
}

function buildHeadTags(page) {
  return `
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="${page.keywords}" />
    <meta name="author" content="Malabares Wedding" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${page.canonical}" />

    <meta property="og:title" content="${page.ogTitle}" />
    <meta property="og:description" content="${page.ogDescription}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${page.ogImage}" />
    <meta property="og:image:secure_url" content="${page.ogImage}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Checklist Completo da Papelaria de Casamento da Malabares Wedding" />
    <meta property="og:url" content="${page.canonical}" />
    <meta property="og:site_name" content="Malabares Wedding" />
    <meta property="og:locale" content="pt_BR" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.ogTitle}" />
    <meta name="twitter:description" content="${page.ogDescription}" />
    <meta name="twitter:image" content="${page.ogImage}" />
    <meta name="twitter:image:alt" content="Checklist Completo da Papelaria de Casamento da Malabares Wedding" />
`;
}

const baseHtml = readFileSync(baseHtmlPath, "utf8");

for (const page of pages) {
  const outputPath = join(distDir, page.route, "index.html");
  const html = removeManagedTags(baseHtml).replace(
    "</head>",
    `${buildHeadTags(page)}  </head>`,
  );

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, html);
}
