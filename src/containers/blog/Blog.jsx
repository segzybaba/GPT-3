import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './import';

const Blog = () => {
  return (
    <section className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging abut it.
        </h1>
      </div>
      <article className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article
            imgUrl={blog01}
            date='Sep 26, 2021'
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
          />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article
            imgUrl={blog02}
            date='Sep 26, 2021'
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
          />{' '}
          <Article
            imgUrl={blog03}
            date='Sep 26, 2021'
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
          />{' '}
          <Article
            imgUrl={blog04}
            date='Sep 26, 2021'
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
          />{' '}
          <Article
            imgUrl={blog05}
            date='Sep 26, 2021'
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
          />
        </div>
      </article>
    </section>
  );
};

export default Blog;
