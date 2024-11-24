import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images } from "./Images";

const slides = images.map(({ original }) => ({
  src: original,
}));

export default function ImageGallery() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  return (
    <section className="section service" id="teams" aria-label="service">
    <div className="container">
      <p className="section-subtitle text-center">
        -Capturing the moments-
      </p>
      <h2 className="h2 section-title text-center">Our Gallery</h2>
      <p className="section-text text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
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