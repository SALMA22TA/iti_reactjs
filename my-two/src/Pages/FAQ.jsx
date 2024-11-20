import React from 'react';
import '../Sty.css';

export default function FAQ() {
  const faqQuestions = [
    {
      id: 1,
      question: "How do I create an account on your website?",
      answer: "Click on the Register button at the top right corner of the homepage, fill out the registration form, and follow the prompts to create an account."
    },
    {
      id: 2,
      question: "Can I share my account with others?",
      answer: "Sharing accounts is against our terms of service. However, premium accounts allow you to stream on up to 4 devices simultaneously."
    },
    {
      id: 3,
      question: "Is registration required to browse movies?",
      answer: "No, you can browse our movie catalog without registering. However, creating an account allows you to save favorites and leave reviews."
    },
    {
      id: 4,
      question: "How often do you add new movies?",
      answer: "We add new movies weekly, so make sure to check back regularly for the latest releases."
    },
    {
      id: 5,
      question: "Can I request new movies to be added?",
      answer: "Yes! We welcome suggestions. Contact us through our support email (salmastyles100@gmail.com) with movie titles you'd like to see added."
    }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqQuestions.map((item) => (
        <div className="faq-item" key={item.id}>
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
