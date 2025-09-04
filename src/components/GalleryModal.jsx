import React, { useState, useMemo } from "react";
import { Modal, Button } from "react-bootstrap";
import { useGalleryModal } from "../contexts/GalleryModalContext";
import { galleryImages } from "../data/gallery";
import "./Gallery.css";

export default function GalleryModal() {
  const { isOpen, closeGallery } = useGalleryModal();

  const [activeIndex, setActiveIndex] = useState(null);
  const hasImages = Array.isArray(galleryImages) && galleryImages.length > 0;

  const activeItem = useMemo(() => {
    if (activeIndex == null) return null;
    return galleryImages[activeIndex];
  }, [activeIndex]);

  const openLightbox = (idx) => setActiveIndex(idx);
  const closeLightbox = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i == null ? 0 : (i + 1) % galleryImages.length));
  const prev = () => setActiveIndex((i) => (i == null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length));

  return (
    <>
      <Modal
        show={isOpen}
        onHide={closeGallery}
        centered
        size="xl"
        animation={false}
        contentClassName="gallery-modal"
      >
        <Modal.Header closeButton className="gallery-modal-header">
          <Modal.Title>Gallery</Modal.Title>
        </Modal.Header>

        <Modal.Body className="gallery-modal-body">
          {hasImages ? (
            <div className="masonry">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  className="masonry-item"
                  onClick={() => openLightbox(idx)}
                  aria-label={`Open image ${idx + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt || `Gallery image ${idx + 1}`}
                    loading="lazy"
                    className="masonry-img"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="gallery-empty">
              <p>
                No images yet. Add files to <code>src/assets/gallery</code> and list them in{" "}
                <code>src/data/gallery.js</code>.
              </p>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer className="gallery-modal-footer">
          <Button variant="outline-secondary" onClick={closeGallery}>Close</Button>
        </Modal.Footer>
      </Modal>

      {activeItem && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
            <button className="lightbox-prev" onClick={prev} aria-label="Previous">‹</button>
            <img src={activeItem.src} alt={activeItem.alt || "Selected"} className="lightbox-img" />
            <button className="lightbox-next" onClick={next} aria-label="Next">›</button>
          </div>
        </div>
      )}
    </>
  );
}
