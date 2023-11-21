import React,{useState} from 'react'
import './Zara.css'
import image1 from '../../../Assets/zadmin.jpg'
import image2 from '../../../Assets/zara1.jpg'
import image3 from '../../../Assets/zara2.jpg'
import image4 from '../../../Assets/zara3.jpg'
import image5 from '../../../Assets/zara4.jpg'


function Zara() {
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
      <h1> || - Zara Clone</h1>
      <div className="image-slider">
        <button onClick={handlePrevImage}>&lt;</button>
        <div className="image-card">
          <img src={images[activeImage]} alt={`Artwork ${activeImage + 1}`} />
        </div>
        <button onClick={handleNextImage}>&gt;</button>
      </div>
      <div className="hover-description">
        <p>
        Zara Clone is an e-commerce web application. When a user visits the site, they can log in or create an account,
         view all the collections available, search for a specific item and add it to their shopping basket.
        </p>
      </div>
      <div>
      <a className='btn' href='https://github.com/Our-Zara/Our-Zara' target="_blank" rel="noopener noreferrer">
          Show repo
        </a>
      </div>
    </div>
  );
}

export default Zara