import "./Gallery.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import pic1 from "./Images/pic1.jpg";
import pic2 from "./Images/pic2.jpg";
import pic3 from "./Images/pic3.jpg";
import pic4 from "./Images/pic4.jpg";
import pic5 from "./Images/pic5.jpg";
import pic6 from "./Images/pic6.jpg";
import pic7 from "./Images/pic7.jpg";
import video1Thumb from "./Images/videoThumbnail.png";

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
      original: `${process.env.PUBLIC_URL}/video.mp4`,
      thumbnail: video1Thumb,
      isVideo: true,
    },
  ];

  const renderItem = (item) => {
    if (item.isVideo) {
      return (
        <div className="image-gallery-image">
          <video controls style={{ width: "100%", height: "auto" }}>
            <source src={item.original} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
    return (
      <div className="image-gallery-image">
        <img
          src={item.original}
          alt={item.description || 'gallery-image'}
          className="image-gallery-image"
        />
      </div>
    );
  };

  return (
    <div id="Gallery">
      <div className="Slides">
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          slideOnThumbnailOver={false}
          renderItem={renderItem}
        />
      </div>
    </div>
  );
}
