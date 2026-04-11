import "./globals.css";
import { Lora, Manrope } from "next/font/google";
import SiteAnalytics from "./site-analytics";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata = {
  metadataBase: new URL("https://konstantin-orlov.vercel.app"),
  title: {
    default: "Константин Орлов — корпоративные командировки и travel-процессы",
    template: "%s | Константин Орлов",
  },
  description:
    "Константин Орлов — руководитель функции организации деловых поездок. Корпоративные командировки, travel policy, контроль затрат, VIP-поездки и оптимизация travel-процессов.",
  keywords: [
    "Константин Орлов",
    "корпоративные командировки",
    "деловые поездки",
    "организация деловых поездок",
    "руководитель travel-функции",
    "travel policy",
    "контроль затрат на командировки",
    "VIP-поездки",
    "оптимизация travel-процессов",
    "автоматизация travel-процессов",
    "Amadeus",
  ],
  authors: [{ name: "Константин Орлов" }],
  creator: "Константин Орлов",
  publisher: "Константин Орлов",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://konstantin-orlov.vercel.app",
    siteName: "Константин Орлов",
    title:
      "Константин Орлов — эксперт по корпоративным командировкам и travel-процессам",
    description:
      "Руководитель функции организации деловых поездок: travel policy, контроль затрат, VIP-поездки, сложные маршруты и операционная устойчивость travel-сервиса.",
  },
  twitter: {
    card: "summary",
    title:
      "Константин Орлов — эксперт по корпоративным командировкам и travel-процессам",
    description:
      "Корпоративные командировки, travel policy, контроль затрат, VIP-поездки и оптимизация travel-процессов.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${lora.variable}`}>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
