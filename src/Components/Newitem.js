import React from 'react';
import './Newitem.css'

const Newitem = (props) => {
  const { title, description, imgUrl, newsUrl, source, author, date } = props;

  return (
    <div className="card mb-4 shadow-sm">
      <img
        src={!imgUrl ? 'https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149985600.jpg?w=2000' : imgUrl}
        style={{ height: '200px', objectFit: 'cover' }}
        className="card-img-top"
        alt="News Thumbnail"
      />
      <div className="card-body">
        <span className="badge bg-primary mb-2">{source}</span>
        <h5 className="card-title mb-2">{title}</h5>
        <p className="card-text mb-3">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            By <b>{author}</b> on {new Date(date).toLocaleDateString()}
          </small>
        </p>
        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Newitem;
