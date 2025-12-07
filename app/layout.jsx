import "./globals.css";
import { contractica, contractica_caps } from "./fonts";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Script from "next/script";

export const metadata = {
  title: {
    template: "%s - იდეარუმის აკადემია",
    default: "იდეარუმის აკადემია | Academy of IDEAROOM ",
  },
  description:
    "გაიღრმავე ცოდნა ციფრულ სფეროში, ისწავლე პრაქტიკულად და დაიწყე კარიერა გამოცდილ მენტორებთან ერთად — იდეარუმის აკადემიაში.",
  metadataBase: new URL("https://academy.idearoom.ge"),
  openGraph: {
    type: "website",
    locale: "ka_GE",
    url: "https://academy.idearoom.ge",
    siteName: "იდეარუმის აკადემია | Academy of IDEAROOM",
    title: "იდეარუმის აკადემია | Academy of IDEAROOM",
    description:
      "გაიღრმავე ცოდნა ციფრულ სფეროში, ისწავლე პრაქტიკულად და დაიწყე კარიერა გამოცდილ მენტორებთან ერთად — იდეარუმის აკადემიაში.",
    images: [
      {
        url: "/coverweb.webp",
        width: 1200,
        height: 630,
        alt: "იდეარუმის აკადემია",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@idearoom_ge",
    images: ["/coverweb.webp"],
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ka"
      className={`${contractica.variable} ${contractica_caps.variable}`}
    >
      <head>
        <link rel="canonical" href="https://academy.idearoom.ge" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0S198S8G3T"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-0S198S8G3T', {
      page_path: window.location.pathname,
    });
  `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
