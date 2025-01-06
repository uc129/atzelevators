import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import { ScrollObserver } from "./lib/scrollObserver";
import { Sidebar } from "./components/sidebar";
import GlassView from "./components/glass_view";
import { Navbar } from "./navbar";
import { NavigationBar } from "./navigation-bar";
import { WindowProvider } from "./lib/window-context";

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
          <WindowProvider>
            {/* <Navbar /> */}
            <NavigationBar />
            <main className="flex flex-col justify-between gap-1 wrapper">
              {children}
            </main>
          </WindowProvider>
        </ScrollObserver>
      </body>
    </html>
  );
}
