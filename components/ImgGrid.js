import React from "react";
import Image from 'next/image';

/**
 * ImgGrid is a simple image grid component
 * @param images an array of images to be displayed
 * @returns {JSX.Element}
 * @constructor */
export const ImgGrid = ({images}) => {
  return (
    <div className='imgGrid'>
      {images.map((image, key) =>
        <Image key={key} className='imgGrid__img' src={image.src} alt={''} width={300} height={400}/>
      )}
    </div>
  )
}