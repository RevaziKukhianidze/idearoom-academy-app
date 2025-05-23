import "./globals.css";
import { contractica, contractica_caps } from "./fonts";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Script from "next/script";

export const metadata = {
  title: {
    template: "idearoom | %s",
    default: "idearoom",
  },
  description: "Generated by create next app",
  twitter: {
    card: "summary_large_image",
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1ZSWQHEFFP"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1ZSWQHEFFP');
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
