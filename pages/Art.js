import React from "react";
import {ImgGrid} from "../components/ImgGrid";

import img1 from "../assets/images/art/blue gouache rose 1.png"
import img2 from "../assets/images/art/mushrooms stamp.jpg"
import img3 from "../assets/images/art/mushrooms stamp print.jpg"
import img4 from "../assets/images/art/abstract acrylic painting 2.jpg"
import img5 from "../assets/images/art/bun coloured w mint green.png"
import img6 from "../assets/images/art/tulips with blue grid.jpg"
import img7 from "../assets/images/art/gouache pear.jpg"
import img8 from "../assets/images/art/polymer clay crane.jpg"
import img9 from "../assets/images/art/abstract acrylic painting 1.jpg"
import img10 from "../assets/images/art/Red Gouache Rose.jpg"
import img11 from "../assets/images/art/Monstera.jpg"
import img12 from "../assets/images/art/cave mushrooms.jpg"
import img13 from "../assets/images/art/greyhound bow.jpg"
import img14 from "../assets/images/art/bonsai trees.jpg"

export const Art = () => {
  //TODO: rewrite this in a better way?
  let imgs = [
    {src:img1},
    {src:img2},
    {src:img3},
    {src:img4},
    {src:img5},
    {src:img6},
    {src:img7},
    {src:img8},
    {src:img9},
    {src:img10},
    {src:img11},
    {src:img12},
    {src:img13},
    {src:img14},
  ]

  return(<>
      <ImgGrid images={imgs}/>
    </>
  )
}