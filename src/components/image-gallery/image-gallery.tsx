import React, { FunctionComponent, useState } from 'react';

import './image-gallery.scss';

interface ImageGalleryProps {
  path: string;
  images: string[];
}

export const ImageGallery: FunctionComponent<ImageGalleryProps> = ({ path, images }) => {
  const allImages = images.map((img: string) => require(`../../products/${path}/images/${img}.jpg`));

  const [currentImage, setCurrentImage] = useState(allImages[0]);

  const handleImageChange = (e: any) => {
    e.preventDefault();
    setCurrentImage(allImages[e.target.attributes['data-image'].value]);
  };

  return (
    <div className="c-image-gallery">
      <div className="c-image-gallery__image-wrap">
        <img src={currentImage} alt="product-image" className="c-image-gallery__img" />
      </div>
      <ul className="c-image-gallery__thumbs">
        {allImages.map((img: string, index: number) => {
          return (
            <li key={`image-${index}`} className="c-image-gallery__thumb">
              <button type="button" data-image={index} onClick={handleImageChange}>
                <img src={img} alt={`image-${index}`} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
