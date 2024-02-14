import React from "react";
import { useState } from "react";
import About from "./about/page";
import Products from "./products/page";
import FAQPage from "./faq/page";

const HomePage = () => {
  return (
    <html>
      <body>
        <About />
        {/* <FAQPage />
        <How /> */}
        <Products />
        {/* <Contacts /> */}
      </body>
    </html>
  );
};

export default HomePage;
