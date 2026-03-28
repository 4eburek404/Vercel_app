import "./globals.css";

export const metadata = {
  title: "Konstantin Orlov — Portfolio",
  description: "Personal portfolio of Konstantin Orlov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
