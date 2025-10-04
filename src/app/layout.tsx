import type { Metadata } from "next";
import { Poppins, Stick_No_Bills } from "next/font/google";
import "./global.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const stickNoBills = Stick_No_Bills({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-stick-no-bills",
});

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Technical challenge for Nilo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${stickNoBills.variable} font-poppins flex min-h-screen w-full flex-col items-center bg-gradient-to-r from-slate-200 to-white text-slate-900 antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
