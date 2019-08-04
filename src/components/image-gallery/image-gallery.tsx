import React, { FunctionComponent } from 'react';

import './image-gallery.scss';

interface ImageGalleryProps {
  path: string;
  images: string[];
}

export const ImageGallery: FunctionComponent<ImageGalleryProps> = ({ path, images }) => {
  return (
    <ul className="c-image-gallery">
      {images.map((image, index) => {
        const img = require(`../../products/${path}/images/${image}.jpg`);

        if (index === 0) {
          return (
            <li key={index}>
              <img src={img} alt={`image-${index}`} className="c-image-gallery__img" />
            </li>
          );
        }
      })}
    </ul>
  );
};
