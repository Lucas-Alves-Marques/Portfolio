import { Playfair } from "next/font/google";
import "./globals.css";
import Header from "./(components)/(Layout)/header";
import Footer from "./(components)/(Layout)/footer";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Lucas Alves Marques - Portfólio",
  description:
    "Portfólio de projetos do programador juníor Lucas Alves Marques",
};

export default function RootLayout({ children }) {

  return (

    <html lang="pt-br">

      <body className={`${playfair.className} antialiased min-h-screen flex flex-col bg-[#0f0f0f]`}>

        <Header />

        <main className="flex-grow flex items-center justify-center py-4 md:py-8">
          <div className="w-full h-full max-w-full">
            {children}
          </div>
        </main>

        <Footer />

      </body>

    </html>

  );
}
