import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ibrahim Ahmed Galib | MERN Stack Developer",
  description: "Portfolio of Ibrahim Ahmed Galib, a MERN Stack Web Developer based in Dhaka, Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased bg-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
