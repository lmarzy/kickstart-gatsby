import React, { FunctionComponent, useState } from 'react';
import Img from 'gatsby-image';

import './image-gallery.scss';

import { ImageSharp } from 'models/product-list.model';

interface ImageGalleryProps {
  images: ImageSharp[];
}

export const ImageGallery: FunctionComponent<ImageGalleryProps> = ({ images }) => {
  console.log('IMAGES', images[0].childImageSharp);

  const [currentImage, setCurrentImage] = useState(images[0].childImageSharp.fluid);

  const handleImageChange = (e: any) => {
    e.preventDefault();
    setCurrentImage(images[e.target.attributes['data-image'].value].childImageSharp.fluid);
  };

  return (
    <div className="c-image-gallery">
      <div className="c-image-gallery__image-wrap">
        <Img fluid={currentImage} alt="product-image" className="c-image-gallery__img" />
      </div>
      <ul className="c-image-gallery__thumbs">
        {images.map((img: any, index: number) => {
          return (
            <li key={`image-${index}`} className="c-image-gallery__thumb">
              <button type="button" data-image={index} onClick={handleImageChange}>
                <img src={img.childImageSharp.fluid.src} alt={`image-${index}`} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
