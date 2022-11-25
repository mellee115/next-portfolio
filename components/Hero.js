import React from "react";

/**
 * Hero component serves as the header home image display for the portfolio app
 * @param name
 * @returns {JSX.Element}
 * @constructor */
export const Hero = ({name}) =>{
  return(
    <div className="hero">
      <div>
        welcome to the portfolio of <br/>
        <div className="hero__name">{name}</div>
      </div>
    </div>
  );
}