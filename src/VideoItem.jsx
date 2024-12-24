import React from 'react';

export function VideoItem({src}){
    return(
          <div className="image-gallery-video">
              <video controls>
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          </div>
    );
}