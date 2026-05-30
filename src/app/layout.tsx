import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como estou dirigindo",
  description: "Como estou dirigindo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
