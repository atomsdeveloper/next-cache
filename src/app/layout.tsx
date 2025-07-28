import type { Metadata } from "next";

// CSS
import "./globals.css";

export const metadata: Metadata = {
  title: "Cache",
  description: "App created to render cache datas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
