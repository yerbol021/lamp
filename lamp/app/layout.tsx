import React, { useState } from "react";
import { NextPage } from "next";
import About from "./about/page";
import Products from "./products/page";
import FAQPage from "./faq/page";
import HowItWorksPage from "./how/page";
import ContactsPage from "./contacts/page";

const HomePage = () => {
  return (
    <html>
      <body>
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
