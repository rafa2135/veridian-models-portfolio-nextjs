import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserratA400 = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Veridian Models",
  description: "Model agency for the world of fashion a test website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserratA400.variable}>
      <body className="antialiased font-montserratAlt min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow mt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
