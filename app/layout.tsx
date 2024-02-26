import type { Metadata } from "next";
import Navbar from "./UI/navbar";
import "@/styles/globals.css";
import Footer from "./UI/footer";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "ACE Lab @USC",
  description:
    "The Adaptive Computing Experiences (ACE) Lab led by Prof. Souti Chattopadhyay at the University of Southern California (USC).",
  icons: ["/icon/ace.svg"],
  authors: [{ name: "Run Huang", url: "iamhuang.run" }],
  keywords: [
    "hci",
    "human computer interaction",
    "usc",
    "university of southern california",
    "cs phd",
    "souti chattopadhyay",
    "usc ace lab",
  ],
  verification: {
    google: "XAlO1nTAbSyt2eO7ui2Trcc53TxQ4RHSo9SyEHSX0XQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ width: "100%" }}>
        <header>
          <Navbar />
        </header>
        <main style={{ padding: "0 5vw", overflowX: "hidden" }}>
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId="G-3J0HW6PM08" />
      </body>
    </html>
  );
}
