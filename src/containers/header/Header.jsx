import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          delectus soluta expedita magni ad voluptates minima impedit veniam.
          Tenetur enim, adipisci consectetur corrupti debitis dolor blanditiis
          harum accusamus perspiciatis rerum ratione obcaecati optio? Natus
          incidunt ullam enim inventore vel repudiandae?
        </p>
        <div className='gpt3__header-content__input'>
          <input type='text' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 People requested access a visit in the last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  );
};

export default Header;
