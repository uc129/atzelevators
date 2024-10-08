import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import { ScrollObserver } from "./lib/scrollObserver";
import NavigationBar from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import GlassView from "./components/glass_view";
import { Navbar } from "./navbar";

const afacad = Afacad({ subsets: ["latin"], display: 'swap', adjustFontFallback: false });

export const metadata: Metadata = {
  title: "ATZ ELEVATORS",
  description: "An elevator and escalator, supply, installation, and maintenance company.",
  applicationName: 'ATZ ELEVATORS WEBSITE',
  keywords: "elevator, escalator, supply, installation, maintenance, ATZ ELEVATORS",
  abstract: "Amba Tirupati Zetetic Engineering Pvt. Ltd.",
  creator: 'uc129'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let fullCompanyName = metadata.abstract as string;

  return (
    <html lang="en">
      <body className={afacad.className}>
        <ScrollObserver>
          <Navbar />
          <div className="flex justify-between gap-1 wrapper">
            {children}
          </div>
        </ScrollObserver>
      </body>
    </html>
  );
}
