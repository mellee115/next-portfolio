import React from "react";
import {ImgGrid} from "../components/ImgGrid";


export default function Photos(){
  //TODO: rewrite this in a better way?
  let imgs = [
    {src: "/images/photos/Toronto Sakura.JPG"},
    {src: "/images/photos/Sweet Dreams Noodle Soup Special.JPG"},
    {src: "/images/photos/Sweet Dreams Noodle Soup Smile.JPG"},
    {src: "/images/photos/3 Macarons and Taro.JPG"},
    {src: "/images/photos/Sweet Dreams Mango Bingsu Special.JPG"},
    {src: "/images/photos/Sweet Dreams Overhead Noodle Soup Special.JPG"},
    {src: "/images/photos/Macarons.JPG"},
    {src: "/images/photos/Sweet Dreams Hot Drink Special.JPG"},
    {src: "/images/photos/Sweet Dreams at night.JPG"},
    {src: "/images/photos/Elora Film Photo Layering.jpg"},
    {src: "/images/photos/Waterloo Flowers Film Photo Layering.jpg"},
    {src: "/images/photos/Rock Dunder Tiny Mushrooms.JPG"},
    {src: "/images/photos/Rock Dunder Tree Mushrooms.JPG"},
    {src: "/images/photos/Rock Dunder Juniper.JPG"},
    {src: "/images/photos/Super Flower Blood Moon.JPG"},
    {src: "/images/photos/Morning Moon.JPG"},
    {src: "/images/photos/Eucalyptus.JPG"},
    {src: "/images/photos/Muskrat.JPG"},
  ]

  return (<>
      <ImgGrid images={imgs}/>
    </>
  )
}