import React from "react";
import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {Clouds} from "../components/Clouds";
import styles from '../styles/Bio.module.scss';

export default function Bio(){
  return(
    <>
      <div className={styles.bio}>
        <Image className={styles.bioImg} src='/bio-colour.JPG' alt='' width={300} height={300}/>
        <div className={styles.bioRight}>
          <Image className={styles.bioHeader} src='/hello.png' alt='Hello!!' width={1303} height={531}/>
          <div className={styles.bioInfo}>
            <p>I am a front-end, <b>Software Developer</b>, an <b>Artist</b>, and a <b>Musician</b>.</p>
            <hr/>
            <p>
              <FontAwesomeIcon className='fa-2x m-r-5' icon={faGraduationCap}/> Alumni of the University of Waterloo<br/>
              <b>Honours Science Major with a Minor in Computer Science</b>
            </p>
            <hr/>
            <p>. . .</p>
            <hr/>
            <p><a href='https://bit.ly/3caiDAo'>
              <FontAwesomeIcon className='fa-2x m-r-5' icon={faLinkedin}/>Learn more at my LinkedIn Profile
            </a></p>
          </div>
        </div>
      </div>
      <Clouds/>
    </>
  )
}