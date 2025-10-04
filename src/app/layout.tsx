import type { Metadata } from "next";
import { Poppins, Stick_No_Bills } from "next/font/google";
import "./global.css";

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
        className={`${poppins.variable} ${stickNoBills.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
