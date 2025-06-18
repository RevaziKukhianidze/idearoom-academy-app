import Blog from "./_components/Blog";
import Courses from "./_components/Courses";
import Feedback from "./_components/Feedback";
import Hero from "./_components/Hero";
import Information from "./_components/Information";
import InfiniteMovingCardsDemo from "./_components/InfiniteMovingCardsDemo";
import Brand from "./_components/Brand";

// Add metadata for the homepage
export const metadata = {
  title: "იდეარუმის აკადემია | Academy of IDEAROOM",
  description:
    "იდეარუმის აკადემია - გახდი ციფრული სამყაროს ნაწილი. გაიღრმავე ცოდნა ციფრულ სფეროში, ისწავლე პრაქტიკულად და დაიწყე კარიერა გამოცდილ მენტორებთან ერთად.",
  openGraph: {
    title: "იდეარუმის აკადემია - გახდი ციფრული სამყაროს ნაწილი",
    description:
      "იდეარუმის აკადემია - გახდი ციფრული სამყაროს ნაწილი. ისწავლე SEO, SMM, Google Ads და სხვა თანამედროვე უნარები გამოცდილ მენტორებთან ერთად.",
    images: [
      {
        url: "https://academy.idearoom.ge/coverweb.webp",
        width: 1200,
        height: 630,
        alt: "იდეარუმის აკადემია",
      },
    ],
    type: "website",
    locale: "ka_GE",
    url: "https://academy.idearoom.ge/",
    siteName: "იდეარუმის აკადემია",
  },
  twitter: {
    card: "summary_large_image",
    title: "იდეარუმის აკადემია - გახდი ციფრული სამყაროს ნაწილი",
    description:
      "იდეარუმის აკადემია - გახდი ციფრული სამყაროს ნაწილი. ისწავლე SEO, SMM, Google Ads და სხვა თანამედროვე უნარები გამოცდილ მენტორებთან ერთად.",
    images: ["https://academy.idearoom.ge/coverweb.webp"],
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function Home() {
  return (
    <section>
      <Hero />
      <Courses />
      <Information />
      <Blog />
      <Feedback />
      <InfiniteMovingCardsDemo />
      <Brand />
    </section>
  );
}
