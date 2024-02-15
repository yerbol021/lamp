"use client";
import React from "react";
import "./contacts.css";

const ContactsPage: React.FC = () => {
  const redirectToWhatsApp = () => {
    window.location.href = "https://wa.me/+77470222428";
  };

  const redirectToInstagram = () => {
    window.location.href =
      "https://www.instagram.com/Medlampa.kz/your_instagram_username";
  };

  const redirectTo2GIS = () => {
    window.location.href =
      "https://2gis.kz/karaganda/firm/70000001036911893?m=73.114489%2C49.791573%2F16";
  };

  return (
    <div>
      <h1>Contacts</h1>
      <div>
        <button onClick={redirectToWhatsApp}>WhatsApp</button>
        <button onClick={redirectToInstagram}>Instagram</button>
        <button onClick={redirectTo2GIS}>2GIS</button>
      </div>
    </div>
  );
};

export default ContactsPage;
