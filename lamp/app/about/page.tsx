import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about_ru">
      <div className="head">
        <h1>О НАС</h1>
      </div>
      <div className="paragraph1">
        <h2>ОПЫТ</h2>
        <p>
          Лечим новорожденных от гипербилирубинамии с 2015 года по всем городам
          Казахстана
        </p>
      </div>
      <div className="paragraph2">
        <h2>ПРИОРИТЕТЫ</h2>
        <p>Здоровье малыша и спокойствие родителей</p>
      </div>
      <div className="paragraph3">
        <h2>УСЛУГИ</h2>
        <ul>
          <li>консультация</li>
          <li>доставка</li>
          <li>замер уровня билирубина</li>
          <li>установка лампы</li>
          <li>инструктаж</li>
          <li>сопровождение лечения</li>
          <li>контрольный замер уровня билирубина</li>
          <li>вывоз лампы</li>
        </ul>
      </div>
      <div className="paragraph4">
        <h2>СЕРТИФИКАТЫ и ЛИЦЕНЗИИ</h2>
        <p>
          Всё наше оборудование имеет сертификаты соответствия. К тому же, мы
          имеем лицензию на реализацию медицинского оборудования.
        </p>
      </div>
      <div className="about-image"></div>
    </div>
  );
};

export default About;
