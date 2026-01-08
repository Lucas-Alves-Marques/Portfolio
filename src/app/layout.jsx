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

      <body className={`${playfair.variable} antialiased flex flex-col min-h-screen`}>

        <Header />
        <div className="flex flex-col justify-between flex-1 w-full md:h-[calc(100vh-5.1rem)] min-h-fit overflow-x-hidden">

          <div className="w-full mx-auto p-4 md:p-4">
            {children}
          </div>

          <Footer />

        </div>

      </body>

    </html>

  );
}