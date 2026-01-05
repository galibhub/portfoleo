import ClientWrapper from "@/components/ClientWrapper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
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
        {/* Background Blobs */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse-slow"></div>
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 -z-10 animate-pulse-slow"></div>

        <ClientWrapper>
          <Navbar />
          <main className="min-h-screen pt-20">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
