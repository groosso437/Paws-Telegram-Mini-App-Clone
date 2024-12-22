/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */

import type { Metadata } from "next";
import localFont from "next/font/local";
import { useEffect } from "react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Paws Game Clone",
  description: "Clone of the popular Telegram mini app Paws, developed by Nikandr Surkov.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Telegram SDK Initialization
  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram) {
      const tg = window.Telegram.WebApp;

      tg.ready(); // جاهزية Telegram Web App
      tg.expand(); // توسيع التطبيق ليملأ الشاشة بالكامل

      // تخصيص الزر الرئيسي في Telegram
      tg.MainButton.text = "إغلاق";
      tg.MainButton.color = "#0088cc"; // لون الزر
      tg.MainButton.show(); // عرض الزر
      tg.MainButton.onClick(() => {
        tg.close(); // يغلق التطبيق عند النقر
      });
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
