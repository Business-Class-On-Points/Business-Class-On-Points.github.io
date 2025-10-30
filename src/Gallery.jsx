import "./Gallery.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import pic1 from "./Images/pic1.JPG";
import pic2 from "./Images/pic2.JPG";
import pic3 from "./Images/pic3.JPG";
import pic4 from "./Images/pic4.JPG";
import pic5 from "./Images/pic5.jpg";
import pic6 from "./Images/pic6.jpg";
import pic7 from "./Images/pic7.jpg";
import video1 from "./Images/video.MP4";

export function Gallery() {
  const images = [
    {
      original: pic1,
      thumbnail: pic1,
    },
    {
      original: pic2,
      thumbnail: pic2,
    },
    {
      original: pic3,
      thumbnail: pic3,
    },
    {
      original: pic4,
      thumbnail: pic4,
    },
    {
      original: pic5,
      thumbnail: pic5,
    },
    {
      original: pic6,
      thumbnail: pic6,
    },
    {
      original: pic7,
      thumbnail: pic7,
    },
    {
      original: video1,
      thumbnail: video1,
      renderItem: (item) => (
        <div className="image-gallery-video">
          <video controls width="1100rem">
            <source src={item.original} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ),
    },
  ];

  return (
    <div id="Gallery">
      <div className="Slides">
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          slideOnThumbnailOver={true}
        />
      </div>
    </div>
  );
}
