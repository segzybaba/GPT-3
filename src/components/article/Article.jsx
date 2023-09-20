import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <section className='gpt3__blog-container_article'>
      <article className='gpt3__blog-container-article-image'>
        <img src={imgUrl} alt='blog image' />
      </article>

      <article className='gpt3__blog-container_article-content'>
        <div className=''>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </article>
    </section>
  );
};

export default Article;
