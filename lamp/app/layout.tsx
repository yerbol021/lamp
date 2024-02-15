import Navigation from "./components/navigation";
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import About from "./about/page";
import Products from "./products/page";
import FAQPage from "./faq/page";
import HowItWorksPage from "./how/page";
import ContactsPage from "./contacts/page";
import Navbar from "./components/navigation/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medlampa.kz",
  description: "Medlampa.kz",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
