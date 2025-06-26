// pages/GalleryPage.js
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from "yet-another-react-lightbox/plugins/zoom";


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
  Maldives: ['/images/gallery1.jpg', '/images/gallery2.jpg'],
  Switzerland: ['/images/gallery3.jpg', '/images/gallery4.jpg'],
  Rajasthan: ['/images/gallery5.jpg', '/images/gallery6.jpg'],
  Goa: ['/images/gallery7.jpg', '/images/gallery8.jpg']
};

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpen = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="gallery-hero">
        <h1>Travel Gallery</h1>
        <p>Explore our favorite moments from destinations across the world.</p>
      </div>

      <div className="gallery-container">
        {/* Travel Photos */}
        <section className="gallery-section">
          <h2>Travel Photos</h2>
          <div className="image-grid">
            {allImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Travel"
                onClick={() => handleOpen(i)}
              />
            ))}
          </div>
        </section>

        {/* Albums by Destination */}
        <section className="gallery-section">
          <h2>Albums by Destination</h2>
          {Object.entries(albums).map(([place, imgs], idx) => (
            <div className="album" key={idx}>
              <h3>{place}</h3>
              <div className="album-grid">
                {imgs.map((img, i) => {
                  const indexInAll = allImages.indexOf(img);
                  return (
                    <img
                      key={i}
                      src={img}
                      alt={place}
                      onClick={() => handleOpen(indexInAll)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Lightbox View */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={allImages.map((src) => ({ src }))}
          plugins={[Thumbnails, Zoom]}
          
        />
      )}

      <Footer />
    </>
  );
};

export default GalleryPage;
