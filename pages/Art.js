import React from "react";
import {ImgGrid} from "../components/ImgGrid";

export const Art = () => {
  //TODO: rewrite this in a better way?
  let imgs = [
    {src:"/images/art/blue gouache rose 1.png"},
    {src:"/images/art/mushrooms stamp.jpg"},
    {src:"/images/art/mushrooms stamp print.jpg"},
    {src:"/images/art/abstract acrylic painting 2.jpg"},
    {src:"/images/art/bun coloured w mint green.png"},
    {src:"/images/art/tulips with blue grid.jpg"},
    {src:"/images/art/gouache pear.jpg"},
    {src:"/images/art/polymer clay crane.jpg"},
    {src:"/images/art/abstract acrylic painting 1.jpg"},
    {src:"/images/art/Red Gouache Rose.jpg"},
    {src:"/images/art/Monstera.jpg"},
    {src:"/images/art/cave mushrooms.jpg"},
    {src:"/images/art/greyhound bow.jpg"},
    {src:"/images/art/bonsai trees.jpg"},
  ]

  return(<>
      <ImgGrid images={imgs}/>
    </>
  )
}