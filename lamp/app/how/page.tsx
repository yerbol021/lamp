import React from "react";
import "./how.css"; // Assuming you have a CSS file for styling

const HowItWorksPage: React.FC = () => {
  return (
    <div className="how-it-works">
      <h1>КАК ЭТО РАБОТАЕТ?</h1>
      <div className="step">
        <h2>1 Выезжаем к Вам на замер уровня билирубина</h2>
        <p>Результат моментально</p>
      </div>
      <div className="step">
        <h2>2 Подбираем лучшую лампу</h2>
        <p>
          Из трех видов посоветуем самую эффективную на основе Ваших анализов
        </p>
      </div>
      <div className="step">
        <h2>3 Научим пользоваться</h2>
        <p>Инструктируем сопровождаем лечение</p>
      </div>
      <div className="step">
        <h2>4 Контрольно замеряем билирубин</h2>
        <p>Удостоверимся в эффективном лечении</p>
      </div>
    </div>
  );
};

export default HowItWorksPage;
