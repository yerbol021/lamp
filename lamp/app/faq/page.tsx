"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import "./faq.css";

const faqData = [
  {
    question: "Какую лампу выбрать?",
    answer:
      "Cтоит отметить, что при повышенном уровне билирубина рекомендуется применять только светодиодную лампу (Диод12 или Диод24). Люминесцентные лампы типа Philips могут не помочь определенным детям (подробнее можно узнать в разделе Исследования).",
  },
  {
    question:
      "Можно ли находиться маме рядом с ребенком во время свечения лампы?",
    answer:
      "Да. Более того, можно даже кормить малыша во время свечения. Единственное условие это избегание попадания лучей лампы на глаза. Для этого можно воспользоваться солнцезащитными очками либо маской для глаз. Они у нас тоже имеются в продаже.",
  },
  {
    question: "Сколько можно держать ребенка под лампой?",
    answer:
      "В связи с тем, что лампы являются аналогом солнечного света и исключают попадания вредного ультрафиолета типа Б и С, ребенка можно светить без ограничения времени. Это подтверждено инструкциями по эксплуатации, которые основаны на научных исследованиях. Исходя из нашего опыта, мы рекомендуем следующую периодичность: 1. Лампа двойная на штативе: свечение без ограничения 2. Светодиодная лампа (диод12 или диод24): 6 часов свечения, 2 часа отдыха. Не забывайте, ребенок всегда должен находиться под присмотром!",
  },
  {
    question: "На сколько дней брать лампу в аренду?",
    answer:
      "Период лечения зависит от множества факторов: общее время свечения, уровень билирубина и его динамичность, возраст ребенка, и т. п. В среднем, лечение занимает 5−10 дней, однако бывает, что лечение может затянуться и до 30 дней.",
  },
  {
    question: "Какие способы оплаты?",
    answer:
      "Мы принимаем оплату с помощью Kaspi QR и наличными. Мы также будем рады выдать Вам фискальный чек.",
  },
];

const FAQPage: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <ul>
        {faqData.map((faq, index) => (
          <li
            key={index}
            onClick={() => toggleAnswer(index)}
            className="question" // Add CSS class here
          >
            <h2>{faq.question}</h2>
            {activeIndex === index && <p>{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
