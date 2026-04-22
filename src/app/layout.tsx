import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Sebastian Castaño — Developer",
  description: "Personal portfolio of Juan Sebastian Castaño Camues, Software Engineering student and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-800 font-[var(--font-geist)] antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
