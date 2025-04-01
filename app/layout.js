import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  title: "ambitio ",
  description: "Ambition is a website",
};
import { Space_Grotesk } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import AOSWrapper from "@/components/wrapper/AOSWrapper";

export const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });
export const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <AOSWrapper>
      {children}
    </AOSWrapper>
      </body>
    </html>
  );
}
