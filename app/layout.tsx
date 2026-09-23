import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import ScrollReveal from "./components/ScrollReveal";
import Header from "./components/Header";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LBL Aesthetics & Laser — Advanced Medical Aesthetic Treatments in Essex",
  description: "A trusted aesthetic clinic in Essex offering advanced aesthetic treatments. HIFU Skin Tightening, Laser Treatment, Endo Fibre Lift, Dermal Fillers and more.",
  icons: {
    icon: '/logo.avif',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-work-sans">
        <Header />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
