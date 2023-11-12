import React, { useState, useCallback } from "react";
import "./styles.css";
import Gallery from "react-photo-gallery";
import FadeIn from "react-fade-in";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <FadeIn>
      <div className="homeContainer">
        <h1 className="galleryTitle">Gallery</h1>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </FadeIn>
  );
}

const photos = [
  {
    src: "/Images/1.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/Images/2.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "/Images/3.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/Images/4.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/Images/5.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/Images/6.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/Images/7.jpg",
    width: 4,
    height: 3,
  },
];
