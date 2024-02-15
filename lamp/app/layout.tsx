import React, { useState } from "react";
import { NextPage } from "next";
import About from "./about/page";
import Products from "./products/page";
import FAQPage from "./faq/page";
import HowItWorksPage from "./how/page";
import ContactsPage from "./contacts/page";
import Navbar from "./components/navigation/navbar";

export const metadata = {
  title: "Medlampa.kz",
  description: "Medlampa.kz",
};

const HomePage = () => {
  return (
    <html>
      <body>
        {/* <Navbar /> */}
        <About />
        <FAQPage />
        <HowItWorksPage />
        <Products />
        <ContactsPage />
      </body>
    </html>
  );
};

export default HomePage;
