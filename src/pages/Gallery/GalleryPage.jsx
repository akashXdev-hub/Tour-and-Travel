import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './GalleryPage.css';

const allImages = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
  '/images/gallery7.jpg',
  '/images/gallery8.jpg',
  '/images/gallery9.jpg'
];

const albums = {
  'Maldives': ['/images/gallery1.jpg', '/images/gallery2.jpg'],
  'Switzerland': ['/images/gallery3.jpg', '/images/gallery4.jpg'],
  'Rajasthan': ['/images/gallery5.jpg', '/images/gallery6.jpg'],
  'Goa': ['/images/gallery7.jpg', '/images/gallery8.jpg']
};

const GalleryPage = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="gallery-hero">
        <h1>Travel Gallery</h1>
        <p>Explore our favorite moments from destinations across the world.</p>
      </div>

      <div className="gallery-container">

        {/*  Travel Photos */}
        <section className="gallery-section">
          <h2>Travel Photos</h2>
          <div className="image-grid">
            {allImages.map((img, index) => (
              <img
                src={img}
                key={index}
                alt="Travel"
                onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
              />
            ))}
          </div>
        </section>

        {/*  Photos by Destination */}
        <section className="gallery-section">
          <h2>Albums by Destination</h2>
          {Object.keys(albums).map((place, idx) => (
            <div className="album" key={idx}>
              <h3>{place}</h3>
              <div className="album-grid">
                {albums[place].map((img, i) => (
                  <img
                    src={img}
                    key={i}
                    alt={place}
                    onClick={() => {
                      const indexInAll = allImages.indexOf(img);
                      setPhotoIndex(indexInAll);
                      setIsOpen(true);
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Lightbox View */}
      {isOpen && (
        <Lightbox
          mainSrc={allImages[photoIndex]}
          nextSrc={allImages[(photoIndex + 1) % allImages.length]}
          prevSrc={allImages[(photoIndex + allImages.length - 1) % allImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + allImages.length - 1) % allImages.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % allImages.length)}
        />
      )}

      <Footer />
    </>
  );
};

export default GalleryPage;
