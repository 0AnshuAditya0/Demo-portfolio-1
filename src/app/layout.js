import localFont from "next/font/local";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css";
import Hero from "@/components/hero";


export const metadata = {
  title: "Personal Portfolio",
  description: "Portfolio test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/kana.jpg" />

      </head>
      <body>
        <Navbar />
        {children}
        <Hero />
        <Footer />
      </body>
    </html>
  );
}
