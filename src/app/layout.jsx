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

      <body className={`${playfair.variable} antialiased flex flex-col justify-between h-screen`}>

        <Header />
        <div className="flex flex-col h-full w-full">

          <div className="flex m-auto p-8">
            {children}
          </div>

          <Footer />

        </div>

      </body>

    </html>

  );
}
