import React, { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { generateImagesArray } from "./Images";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const imagesArray = await generateImagesArray();
      setLoading(false);
      setImages(imagesArray);
    };

    fetchImages();
  }, []);

  const slides = images.map(({ original }) => ({
    src: original,
  }));

  const handleClick = (index, item) => setIndex(index);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="section service" id="gallery" aria-label="service">
      <div className="container">
        <p className="section-subtitle text-center">-Capturing the moments-</p>
        <h2 className="h2 section-title text-center">Our Gallery</h2>
        <p className="section-text text-center"></p>
        {images.length > 0 ? (
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
        ) : (
          <p>Loading images...</p>
        )}
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
}
