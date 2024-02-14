import React from "react";
import About from "./about/page";
import Products from "./products/page";

const HomePage = () => {
  return (
    <html>
      <body>
        <About />
        <Faq />
        <How />
        <Products />
        <Contacts />
      </body>
    </html>
  );
};

export default HomePage;
