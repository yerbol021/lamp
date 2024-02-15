import About from "./about/page";
import FAQPage from "./faq/page";
import HowItWorksPage from "./how/page";
import Products from "./products/page";
import ContactsPage from "./contacts/page";

export default function Home() {
  return (
    <div>
      <About />
      <FAQPage />
      <HowItWorksPage />
      <Products />
      <ContactsPage />
    </div>
  );
}
