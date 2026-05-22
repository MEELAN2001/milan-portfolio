import "./globals.css";

const baseURL = "https://milanbomjantamang.com.np";

export const metadata = {
  title: "Milan Bomjan | QA Automation & Performance Testing Engineer | Playwright | K6 | JMeter",

  description:
    "QA Automation Engineer specializing in Playwright, Cypress, API Testing, Performance Testing (K6 & JMeter), CI/CD automation, and scalable test framework design using JavaScript.",

  keywords: [
    "QA Automation Engineer",
    "Software Testing",
    "Automation Testing",
    "Playwright Automation",
    "Cypress Testing",
    "API Testing",
    "Performance Testing",
    "K6 Load Testing",
    "JMeter Performance Testing",
    "CI/CD",
    "JavaScript Automation",
    "SDET",
    "Test Automation Framework",
    "Quality Assurance Engineer",
    "QA Engineer Nepal",
    "Software Testing Kathmandu",
    "Automation Engineer Nepal"
  ],

  authors: [{ name: "Milan Bomjan Tamang" }],
  creator: "Milan Bomjan Tamang",

  metadataBase: new URL(baseURL),

  alternates: {
    canonical: "/"
  },

  openGraph: {
    title: "Milan Bomjan | QA Automation & Performance Testing Engineer | Playwright | K6 | JMeter",
    description:
      "QA Automation Engineer specializing in Playwright, Cypress, API Testing, Performance Testing (K6 & JMeter), CI/CD automation, and scalable test framework design using JavaScript.",
    url: baseURL,
    siteName: "Milan Bomjan Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QA Automation Engineer Portfolio - Milan Bomjan Tamang"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Milan Bomjan | QA Automation & Performance Testing Engineer",
    description:
      "Automation Testing • API Testing • Performance Testing (K6 & JMeter) • CI/CD • JavaScript QA Engineer",
    images: ["/og-image.png"]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  verification: {
    google: "DyhkAT-goLeQnjNDUU-mLVxZPR1ajZAW2H7gJPmJEa0"
  }
};

// ✅ FIX: themeColor moved here
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#e85d04"
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Milan Bomjan Tamang",
    "jobTitle": "QA Automation Engineer & SDET",
    "url": "https://milanbomjantamang.com.np",
    "image": "https://milanbomjantamang.com.np/Profile.jpeg",
    "email": "mailmilan.bomjan@gmail.com",
    "telephone": "+977-9841907159",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    },
    "knowsAbout": [
      "Playwright",
      "Cypress",
      "API Testing",
      "Performance Testing",
      "K6",
      "JMeter",
      "CI/CD",
      "JavaScript",
      "Test Automation",
      "SDET"
    ],
    "sameAs": [
      "https://github.com/MEELAN2001",
      "https://linkedin.com/in/milan-bomjan-tamang"
    ],
    "workLocation": {
      "@type": "Place",
      "name": "Kathmandu, Nepal",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.7172",
        "longitude": "85.3240"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}