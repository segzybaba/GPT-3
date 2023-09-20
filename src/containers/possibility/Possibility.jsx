import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <article className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </article>
      <article className='gpt3__possibility-content'>
        <h4>Request Early To get Started</h4>
        <h1 className='gradient__text'>
          The Possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod hic
          aliquam fugit, recusandae dignissimos ratione excepturi ex consequatur
          ab fugiat?
        </p>
        <h4>Request Early Access To Get Started</h4>
      </article>
    </div>
  );
};

export default Possibility;
