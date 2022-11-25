import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      Built with <a className='m-l-5' href='https://nextjs.org/'>Next.js</a> <FontAwesomeIcon icon={faReact} className="fa-brands fa-react m-l-5 rotate"/>
    </footer>
  )
}