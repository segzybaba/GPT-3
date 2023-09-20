import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './import';

const brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className=''>
        <img src={google} alt='google' />
      </div>
      <div className=''>
        <img src={slack} alt='google' />
      </div>
      <div className=''>
        <img src={atlassian} alt='google' />
      </div>
      <div className=''>
        <img src={dropbox} alt='google' />
      </div>
      <div className=''>
        <img src={shopify} alt='google' />
      </div>
    </div>
  );
};

export default brand;
