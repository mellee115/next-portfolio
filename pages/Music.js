import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faSpotify, faLastfm} from "@fortawesome/free-brands-svg-icons";
import {Blob} from "../components/Blob";

export default function Music(){
  return (
    <>
      <ul>
        <li>
          <a href='https://www.last.fm/user/mellee115'>
            <FontAwesomeIcon className='fa-2x m-r-10 svg-inline--fa' icon={faLastfm}/> Last.fm Listening Charts
          </a>
        </li>
        <li>
          <a href='https://open.spotify.com/user/22gkfywktzsjjowaa3fevoxoi?si=6057502a0d0b40db'>
            <FontAwesomeIcon className='fa-2x m-r-10 svg-inline--fa' icon={faSpotify}/> Spotify Playlists
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/user/melissashawmusic/videos'>
            <FontAwesomeIcon className='fa-2x m-r-10 svg-inline--fa' icon={faYoutube}/> YouTube Music Channel -
            melissashawmusic
          </a>
        </li>
      </ul>
      <Blob />
    </>
  )
}