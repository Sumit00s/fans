import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lexend-deca",
});

export const metadata = {
  title: "Fans",
  description: "Discover exclusive content from your favorite creators on Fans For Fun — a premium platform where creators share videos, photos, and stories with their subscribers. Safe, secure, and 18+ only.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexendDeca.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
