import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  metadataBase: new URL("https://konstantin-orlov.vercel.app"),
  title: {
    default: "Константин Орлов",
    template: "%s | Константин Орлов",
  },
  description:
    "Константин Орлов — руководитель travel-функции. Организация VIP-поездок, сопровождение сложных маршрутов, развитие команды и оптимизация корпоративных travel-процессов.",
  keywords: [
    "Константин Орлов",
    "travel management",
    "корпоративные командировки",
    "VIP-поездки",
    "деловые поездки",
    "travel-функция",
    "организация командировок",
    "оптимизация travel-процессов",
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
    title: "Константин Орлов",
    description:
      "Руководитель travel-функции: VIP-поездки, сложные маршруты, развитие команды и улучшение travel-процессов.",
  },
  twitter: {
    card: "summary",
    title: "Константин Орлов",
    description:
      "Руководитель travel-функции: VIP-поездки, сложные маршруты и оптимизация travel-процессов.",
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
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
