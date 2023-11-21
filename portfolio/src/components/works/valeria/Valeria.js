import React, { useState } from 'react';
import './Valeria.css';

import image1 from '../../../Assets/vale1.jpg';
import image2 from '../../../Assets/vale2.jpg';
import image3 from '../../../Assets/vale3.jpg';
import image4 from '../../../Assets/vale4.jpg';
import image5 from '../../../Assets/valdash.jpg';
const Valeria = () => {
  const images = [image1, image2, image3, image4 ,image5 ];
  const [activeImage, setActiveImage] = useState(0);

  const handleNextImage = () => {
    setActiveImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="valeria-container">
      <h1> | - Valeria Galerie</h1>
      <div className="image-slider">
        <button onClick={handlePrevImage}>&lt;</button>
        <div className="image-card">
          <img src={images[activeImage]} alt={`Artwork ${activeImage + 1}`} />
        </div>
        <button onClick={handleNextImage}>&gt;</button>
      </div>
      <div className="hover-description">
        <p>
          VALERIA is a social media platform that allows artists to share their content and helps users discover the work of artists such as NFT ...<br />
          . Users can also subscribe monthly to an artist to get exclusive content and follow the work of that particular artist.
        </p>
      </div>
      <div>
      <a className='btn' href='https://github.com/VALERIA-GALLERY/VALERIA' target="_blank" rel="noopener noreferrer">
          Show repo
        </a>
      </div>
    </div>
  );
};

export default Valeria;
