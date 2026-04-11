export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
    ],
    sitemap: "https://konstantin-orlov.vercel.app/sitemap.xml",
    host: "https://konstantin-orlov.vercel.app",
  };
}
