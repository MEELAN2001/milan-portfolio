import "./globals.css";

export const metadata = {
  title: "Milan Bomjan Tamang | QA Automation Engineer",

  description:
    "QA Automation Engineer specializing in Playwright, Cypress, API Testing, CI/CD, and modern quality engineering.",

  keywords: [
    "Milan Tamang",
    "QA Automation Engineer",
    "Quality Assurance Engineer",
    "Automation Testing",
    "Playwright",
    "Cypress",
    "API Testing",
    "Software Testing",
    "CI/CD",
    "DevOps",
    "JavaScript",
    "Postman",
    "Kathmandu Nepal",
  ],

  authors: [{ name: "Milan Bomjan Tamang" }],

  creator: "Milan Bomjan Tamang",

  metadataBase: new URL("https://milanbomjantamang.com.np"),

  themeColor: "#e85d04",

  openGraph: {
    title: "Milan Tamang | QA Automation Engineer",

    description:
      "Portfolio of Milan Tamang — QA Automation Engineer focused on automation testing, API testing, CI/CD, and scalable quality engineering.",

    url: "https://milanbomjantamang.com.np",

    siteName: "Milan Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Milan Bomjan Tamang | QA Automation Engineer",

    description:
      "Automation Testing • Playwright • Cypress • API Testing • CI/CD",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}