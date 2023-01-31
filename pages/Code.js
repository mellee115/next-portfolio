import React from 'react';
import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faReact, faSass} from '@fortawesome/free-brands-svg-icons';

export default function Code(){
  return(
    <div className='grid place-content-center'>
      <h2>This portfolio is built with the power of:</h2>
      <p>
        <a className='fa-icon m-r-10' href='https://vercel.com/home'>
          <Image src='/vercel.svg' width={70} height={55} alt='Vercel'/>
        </a>
        <FontAwesomeIcon className='fa-3x m-r-10 fa-icon' icon={faReact}/>
        <FontAwesomeIcon className='fa-3x m-r-10 fa-icon' icon={faSass}/>
      </p>
      <h2>Check out my other Github projects:</h2>
      <p>
        <a className='fa-icon' href='https://bit.ly/3L3ZugN'><FontAwesomeIcon className='fa-icon fa-3x m-r-10' icon={faGithub}/></a>
      </p>
    </div>
  )
}