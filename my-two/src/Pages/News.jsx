import React from 'react';
import '../Sty.css'; 

export default function News() {
  const newsData = [
    {
      title: "Elizabeth Olsen Is 'Happy' to Return to Marvel, But Only 'If There’s a Good Way to Use' Scarlet Witch",
      imgSrc: '/Elizabith.webp', 
      timeAgo: '8 hours ago',
      description: "Elizabeth Olsen is still open to putting on her super suit and returning to the Marvel Cinematic Universe.",
      url: "https://www.hollywoodreporter.com/movies/movie-news/elizabeth-olsen-happy-return-marvel-scarlet-witch-one-condition-1236000435/"
    },
    {
      title: "7 Facts About Inside Out 2: It Won the Best Picture Oscar 8 Years Ago",
      imgSrc: '/inside-out-2-review_47nw.jpg', 
      timeAgo: '9 hours ago',
      description: "The movie Inside Out 2 has grossed over $100 million in its 4 days of showing in global cinemas, and has entered the ranking of the highest grossing movies in 2024 according to media sites...",
      url: "https://www.elwatannews.com/news/details/7391437"
    },
    {
      title: "Deadpool & Wolverine grosses $19 million in one week worldwide",
      imgSrc: '/wol.webp', 
      timeAgo: '9 hours ago',
      description: "Deadpool & Wolverine, starring Ryan Reynolds and Hugh Jackman, has increased its box office revenue by about $19 million this week, bringing its total revenue to...",
      url: "https://www.youm7.com/story/2024/9/13/19%D9%85%D9%84%D9%8A%D9%88%D9%86-%D8%AF%D9%88%D9%84%D8%A7%D8%B1-%D9%81%D9%89-%D8%A3%D8%B3%D8%A8%D9%88%D8%B9-%D9%84%D9%81%D9%8A%D9%84%D9%85-Deadpool-Wolverine-%D8%AD%D9%88%D9%84-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85/6704843"
    }
  
  ];

  return (
    <div className="news-container">
      {newsData.map((news, index) => (
        <div className="news-item" key={index}>
          <img src={news.imgSrc} alt={news.title} className="news-image" />
          <div className="news-content">
            <a href={news.url} target="_blank" rel="noreferrer" className="news-title">
              {news.title}
            </a>
            <p className="news-time">{news.timeAgo}</p>
            <p className="news-description">{news.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
