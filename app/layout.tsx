"use client";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        button,
        label,
        span,
        .slab {
          font-family: ${roboto_slab.style.fontFamily};
          font-weight: 800;
        }
      `}</style>
      <body>{children}</body>
    </html>
  );
}
