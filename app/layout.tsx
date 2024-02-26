import type { Metadata } from "next";
import Navbar from "./UI/navbar";
import "@/styles/globals.css";
import Footer from "./UI/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ACE Lab @USC",
  description:
    "The Adaptive Computing Experiences (ACE) Lab, led by Prof. Souti Chattopadhyay, investigates cognitive and social aspects of how humans interact with software across various activities from programming to building social identities. Several of our award-winning research uses empirical, qualitative, and quantitative means to drive impactful change to real-world products",
  icons: ["/ace.svg"],
  authors: [{ name: "Run Huang", url: "iamhuang.run" }],
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
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          defer
          data-cf-beacon='{"token": "e89b0d5abae04e5ea6ec69cef36bcf3c"}'
        />
      </body>
    </html>
  );
}
