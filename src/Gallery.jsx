import './Gallery.css'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css';
import {VideoItem} from './VideoItem';
import pic1 from './Images/pic1.JPG';
import pic2 from './Images/pic2.JPG';
import pic3 from './Images/pic3.JPG';
import pic4 from './Images/pic4.JPG';
import pic5 from './Images/pic5.jpg';
import pic6 from './Images/pic6.jpg';
import pic7 from './Images/pic7.jpg';
import pic8 from './Images/pic8.jpg';
import pic9 from './Images/pic9.jpg';
import pic10 from './Images/pic10.jpg';
import pic11 from './Images/pic11.jpg';
import pic12 from './Images/pic12.jpg';
import pic13 from './Images/pic13.jpg';
import video1 from './Images/video1.MP4';
import video2 from './Images/video2.MP4';
import video3 from './Images/video3.MP4';
import video4 from './Images/video4.MP4';
import video5 from './Images/video5.MP4';

export function Gallery()
{
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
          original: pic8,
          thumbnail: pic8,
        },
        {
          original: pic9,
          thumbnail: pic9,
        },
        {
          original: pic10,
          thumbnail: pic10,
        },
        {
          original: pic11,
          thumbnail: pic11,
        }
        ,
        {
          original: pic12,
          thumbnail: pic12,
        }
        ,
        {
          original: pic13,
          thumbnail: pic13,
        },
        {
          original: video1,
          thumbnail: video1,
          renderItem: (item) => (
            <VideoItem src = {item.original}/>
        ),
        },
        {
          original: video2,
          thumbnail: video2,
          renderItem: (item) => (
            <VideoItem src = {item.original}/>
        ),
        },
        {
          original: video3,
          thumbnail: video3,
          renderItem: (item) => (
            <VideoItem src = {item.original}/>
        ),
        },
        {
          original: video4,
          thumbnail: video4,
          renderItem: (item) => (
            <VideoItem src = {item.original}/>
        ),
        },
        {
          original: video5,
          thumbnail: video5,
          renderItem: (item) => (
            <VideoItem src = {item.original}/>
        ),
        }
      ];

    return (
        <div id="Gallery">
            <div className="Slides">
                <ImageGallery items={images}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    slideOnThumbnailOver={true}/>
            </div>
        </div>
    );
}