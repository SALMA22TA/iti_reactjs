import React from 'react';
import '../Sty.css';

export default function FAQ() {
  const faqQuestions = [
    {
      id: 1,
      question: "How do I search for movies?",
      answer: "To search for movies, use the search bar at the top of our homepage. Type in the title of the movie you're looking for and press Enter."
    },
    {
      id: 2,
      question: "Can I watch trailers on your site?",
      answer: "Yes! Many movie listings include trailers. Look for the 'Watch Trailer' button on individual movie pages."
    },
    {
      id: 3,
      question: "Is registration required to browse movies?",
      answer: "No, you can browse our movie catalog without registering. However, creating an account allows you to save favorites and leave reviews."
    },
    {
      id: 4,
      question: "How do I rate movies?",
      answer: "To rate a movie, go to its details page and click on the star rating system. You must be logged in to leave ratings or reviews."
    },
    {
      id: 5,
      question: "Can I request new movies to be added?",
      answer: "Yes! We welcome suggestions. Contact us through our support email (support@moviesite.com) with movie titles you'd like to see added."
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
