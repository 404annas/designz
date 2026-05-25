import { siteConfig } from "@/lib/site";

const highlightedProjects = [
  {
    name: "Kingston Upon Thames Residence Transformation",
    category: "Luxury residential interiors",
    url: `${siteConfig.url}/#transformations`,
    areaServed: "London",
  },
  {
    name: "Chelsea Flat Turnkey Interior Upgrade",
    category: "Turnkey architectural and build solutions",
    url: `${siteConfig.url}/#transformations`,
    areaServed: "London",
  },
  {
    name: "Cheam Surrey Style Showcase",
    category: "High-end residential feasibility and master planning",
    url: `${siteConfig.url}/#showcase`,
    areaServed: "Surrey",
  },
];

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    sameAs: siteConfig.socialLinks,
    logo: `${siteConfig.url}/logo.webp`,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "UK Companies House",
      value: siteConfig.companyNumber,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        areaServed: ["GB", "AE", "IN"],
        availableLanguage: ["en"],
      },
    ],
  };

  const southLondonOfficeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#south-london-office`,
    name: `${siteConfig.name} South London Office`,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.webp`,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`,
    },
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#professional-service`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    areaServed: ["London", "Dubai", "India"],
    serviceType: [
      "Luxury interior design",
      "Architectural design",
      "Turnkey build",
      "Joinery and craftsmanship",
      "High-end residential feasibility and master planning",
    ],
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Luxury Interior Design and Turnkey Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Turnkey Architectural & Build Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High-End Residential Feasibility & Master Planning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luxury Interior Design Services London",
          },
        },
      ],
    },
    department: [
      {
        "@type": "Place",
        name: "Central London Office",
        address: {
          "@type": "PostalAddress",
          ...siteConfig.additionalOffice,
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.siteName,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: "Luxury Interior Design Services London | Dwell Rich",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#professional-service`,
    },
    primaryImageOfPage: `${siteConfig.url}/logo.webp`,
    description:
      "Luxury interior design, turnkey architectural build solutions, and high-end residential feasibility planning for London investors, developers, and private clients.",
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/#project-highlights`,
    name: "Dwell Rich project highlights",
    itemListElement: highlightedProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        category: project.category,
        areaServed: project.areaServed,
        url: project.url,
        creator: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    })),
  };

  const payload = [
    organizationSchema,
    southLondonOfficeSchema,
    professionalServiceSchema,
    websiteSchema,
    webpageSchema,
    projectsSchema,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
