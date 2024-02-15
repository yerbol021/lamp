import React from "react";
import Image from "next/image";
import "./Button.css";

const Button = () => {
  return (
    <a href="tel:+16726672700" title="Call Us">
      <div className="nav_image">
        <Image
          src="/images/call us2.jpeg"
          alt="Call us"
          width={100}
          height={100}
        />
      </div>
    </a>
  );
};

export default Button;
