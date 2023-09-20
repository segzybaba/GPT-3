import React from 'react';
import './whatgpt.css';
import { Feature } from '../../components';
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whatgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature
          title='what is GPT-3'
          text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, voluptate? Necessitatibus, reprehenderit. Optio consequuntur in sed id quae, at qui.'
        />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The Possibilities are beyond your imagination
        </h1>
        <p></p>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature
          title='Chatbots'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, magni.'
        />
        <Feature
          title='Knowledgebase'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque est consequatur doloribus. Veniam, nostrum?'
        />
        <Feature
          title='Education'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem facilis voluptatem similique.'
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
