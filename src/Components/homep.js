
import React, { useState, useEffect } from 'react';
import Newitem from './Newitem'; // Assuming you have a NewsCard component
import './homep.css'; // Import your styles

const HomePage = () => {
  // State to store the news data
  const [news, setNews] = useState([]);

  // Fetch news data from your API or source
  useEffect(() => {
    const fetchNews = async () => {
      try {
    
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=d490a3fd44e34e699f5c241e425ab41a&page=${1}`);
        const data = await response.json();
        setNews(data.articles); 
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="homepage">
      <header className="header">
        <h1>Your Alert-News App</h1>
        <p>Stay Informed with the Latest News</p>
      </header>

      <main className="main-content">
        {news.map((article) => (
         
          <Newitem key = {article.id} title={article.title?article.title.slice(0,50):""} description={article.description?article.description.slice(0,85):""} imgUrl={article.urlToImage} 
          newsUrl ={article.url} author = {!article.author?"Unknown":article.author} date = {article.publishedAt} source = {article.source.name}></Newitem>
        ))}
      </main>

      <footer className="footer">
        <p>&copy; 2023 Your Alert-News App. All rights reserved.</p>
      </footer>

      {/* <Chatbot></Chatbot> */}
    </div>
   
  );
};

export default HomePage;
