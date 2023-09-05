/**
 * src/components/Footer/index.jsx
 * Footer message and public links
 *
 * created by Lynchee on 7/16/23
 */

import React from 'react';
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';
import './style.css';

const Footer = () => (
  <footer>
    <div className='rounded-social-buttons'>
      <a
        className='social-button github'
        href='https://github.com/Djmcflush/RealChar'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub />
      </a>
      <a
        className='social-button discord'
        href='https://discord.gg/e4AYNnFg2F'
        target='_blank'
        rel='noreferrer'
      >
        <FaDiscord color='black' />
      </a>
      <a
        className='social-button twitter'
        href='https://twitter.com/agishaun'
        target='_blank'
        rel='noreferrer'
      >
        <FaTwitter />
      </a>
    </div>
    <p className='copyright'>Copyright © 2023 CoFoundAI</p>
  </footer>
);

export default Footer;
