import type { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Kopi Kenangan Senja | Alif Rezky",
  description: "Dibuat dengan Next.js oleh Daeng Lewa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
