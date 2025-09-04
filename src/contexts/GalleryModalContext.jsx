// GalleryModalContext.js
import { createContext, useContext, useState } from "react";

const GalleryModalContext = createContext();

export const useGalleryModal = () => useContext(GalleryModalContext);

export const GalleryModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);

  return (
    <GalleryModalContext.Provider value={{ isOpen, openGallery, closeGallery }}>
      {children}
    </GalleryModalContext.Provider>
  );
};
