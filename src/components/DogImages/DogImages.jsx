//import React, { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import './DogImages.css';

function DogImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/20')
      .then((response) => response.json())
      .then((data) => setImages(data.message));
  }, []);

  return (
    <div className="dog-images">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Dog ${index + 1}`} className="dog-image" />
      ))}
    </div>
  );
}

export default DogImages;