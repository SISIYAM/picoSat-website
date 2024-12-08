// Import images explicitly
import img1 from "../assets/images/gallery/img-1.jpeg";
import img2 from "../assets/images/gallery/img-2.jpeg";
import img3 from "../assets/images/gallery/img-3.jpeg";
import img4 from "../assets/images/gallery/img-4.jpeg";
import img5 from "../assets/images/gallery/img-5.jpeg";
import img6 from "../assets/images/gallery/img-6.jpeg";
import img7 from "../assets/images/gallery/img-7.jpeg";
import img8 from "../assets/images/gallery/img-8.jpeg";
import img9 from "../assets/images/gallery/img-9.jpeg";
import img10 from "../assets/images/gallery/img-10.jpeg";
import img11 from "../assets/images/gallery/img-11.jpeg";
import img12 from "../assets/images/gallery/img-12.jpeg";
import img13 from "../assets/images/gallery/img-13.jpeg";
import img14 from "../assets/images/gallery/img-14.jpeg";
import img15 from "../assets/images/gallery/img-15.jpeg";
import img16 from "../assets/images/gallery/img-16.jpeg";
import img17 from "../assets/images/gallery/img-17.jpeg";
import img18 from "../assets/images/gallery/img-18.jpeg";
import img19 from "../assets/images/gallery/img-19.jpeg";
import img20 from "../assets/images/gallery/img-20.jpeg";
import img21 from "../assets/images/gallery/img-21.jpeg";
import img22 from "../assets/images/gallery/img-22.jpeg";

// List of all image sources
const imageSources = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
];

// Function to get dimensions of an image
const getImageDimensions = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.src = src;
  });

// Generate the array of image objects with dimensions
export const generateImagesArray = async () => {
  const imagesArray = await Promise.all(
    imageSources.map(async (src) => {
      const dimensions = await getImageDimensions(src);
      return {
        src,
        original: src,
        ...dimensions, // Add width and height
      };
    })
  );
  return imagesArray;
};
