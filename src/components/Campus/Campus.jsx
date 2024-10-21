// import React from 'react'
// import './Campus.css'
// import gallery_1 from '../../assets/images/gallery-1.png';
// import gallery_2 from '../../assets/images/gallery-2.png';
// import gallery_3 from '../../assets/images/gallery-3.png';
// import gallery_4 from '../../assets/images/gallery-4.png';
// import white_arrow from '../../assets/images/white-arrow.png';
// function Campus() {
//   return (
//     <div className='campus'>
//          <div className='gallery'>
//           <img src={gallery_1} alt='gallery-1' />
//           <img src={gallery_2} alt='gallery-2' />
//           <img src={gallery_3} alt='gallery-3' />
//           <img src={gallery_4} alt='gallery-4' />

//          </div>
//          <button className='btn dark-btn'>
//             See more here
//             <img src={white_arrow} alt='white-arrow' />
//          </button>
//     </div>
//   )
// }

// export default Campus

// test''''''

import React, { useState } from 'react';
import './Campus.css';
import gallery_1 from '../../assets/images/gallery-1.png';
import gallery_2 from '../../assets/images/gallery-2.png';
import gallery_3 from '../../assets/images/gallery-3.png';
import gallery_4 from '../../assets/images/gallery-4.png';
import gallery_5 from '../../assets/images/gallery-1.png';
import gallery_6 from '../../assets/images/gallery-2.png';
import gallery_7 from '../../assets/images/gallery-3.png';
import gallery_8 from '../../assets/images/gallery-4.png';
import white_arrow from '../../assets/images/white-arrow.png';

function Campus() {
  const [visibleImages, setVisibleImages] = useState(4);

  const images = [
    { src: gallery_1, alt: 'gallery-1' },
    { src: gallery_2, alt: 'gallery-2' },
    { src: gallery_3, alt: 'gallery-3' },
    { src: gallery_4, alt: 'gallery-4' },
    { src: gallery_5, alt: 'gallery-5' },
    { src: gallery_6, alt: 'gallery-6' },
    { src: gallery_7, alt: 'gallery-7' },
    { src: gallery_8, alt: 'gallery-8' },
  ];

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 4);
  };

  const showLessImages = () => {
    setVisibleImages((prevVisibleImages) => Math.max(prevVisibleImages - 4, 4)); // Minimum 4 images
  };

  return (
    <div className='campus'>
      <div className='gallery'>
        {/* Display images in rows, 4 per row */}
        {images.slice(0, visibleImages).map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      {/* Conditional rendering for buttons */}
      <div className="button-container">
        {visibleImages < images.length && (
          <button className='btn dark-btn' onClick={loadMoreImages}>
            See more here
            <img src={white_arrow} alt='white-arrow' />
          </button>
        )}
        {visibleImages > 4 && (
          <button className='btn dark-btn' onClick={showLessImages}>
            Show less
            <img src={white_arrow} alt='white-arrow' />
          </button>
        )}
      </div>
    </div>
  );
}

export default Campus;
