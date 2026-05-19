import "./globals.css";

export const metadata = {
  title: "Milan Bomjan Tamang | QA Automation Engineer | Playwright | Cypress",

  description:
    "QA Automation Engineer specializing in Playwright, Cypress, API Testing, CI/CD automation, and scalable test framework design using JavaScript. Portfolio of Milan Bomjan Tamang.",

  keywords: [
    "QA Automation Engineer",
    "Software Testing",
    "Automation Testing",
    "Playwright Automation",
    "Cypress Testing",
    "API Testing",
    "CI/CD",
    "JavaScript Automation",
    "SDET",
    "Test Automation Framework",
    "Quality Assurance Engineer",
    "Kathmandu Nepal"
  ],

  authors: [{ name: "Milan Bomjan Tamang" }],
  creator: "Milan Bomjan Tamang",

  metadataBase: new URL("https://milanbomjantamang.com.np"),

  alternates: {
    canonical: "/"
  },

  openGraph: {
    title: "Milan Bomjan Tamang | QA Automation Engineer",
    description:
      "QA Automation Engineer specializing in Playwright, Cypress, API Testing, CI/CD automation using JavaScript.",
    url: "https://milanbomjantamang.com.np",
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
    title: "QA Automation Engineer | Playwright | Cypress",
    description:
      "Automation Testing • API Testing • CI/CD • JavaScript QA Engineer",
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
  themeColor: "#e85d04"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}