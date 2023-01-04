import React, {useState} from 'react';
import Head from 'next/head'

import {Footer} from '../components/Footer'
import {Hero} from '../components/Hero'
import {Nav} from '../components/Nav'

import Art from './Art'
import Bio from './Bio'
import Code from './Code'
import Music from './Music'
import Photos from './Photos'

import styles from '../styles/Home.module.scss';

export default function Home() {
    const [currentPage, setCurrentPage] = useState('Home');

    const handleNavClick = (e: React.ChangeEvent<any>) => {
        if (e.target.value === 'Shop'){
            document.location.href ='https://made-by-mel-shop.vercel.app/';
        } else {
            setCurrentPage(e.target.value);
        }
    }

    let content;
    switch (currentPage) {
        case 'Art':
            content = <Art/>;
            break;
        case 'Bio':
            content = <Bio/>
            break;
        case 'Code':
            content = <Code/>;
            break;
        case 'Home':
            content = <Hero name='melissa shaw'/>;
            break;
        case 'Music':
            content = <Music/>;
            break;
        case 'Photos':
            content = <Photos/>;
            break;
        default:
            content = '';
    }

    return (
        <div className='styles.container'>
            <Head>
                <title>{`Melissa Shaw | ${currentPage}`}</title>
                <meta name="description" content="Generated by create next app"/>
                {/*<link rel="icon" href="/favicon.ico"/>*/}
            </Head>
            <Nav
                handleNavClick={(e) => handleNavClick(e)}
                pages={['Home', 'Art', 'Bio', 'Code', 'Music', 'Photos','Shop']}
            />
            <main>
                {content}
            </main>
            <Footer/>
        </div>
    )
}
