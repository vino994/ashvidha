import React, { createContext, useContext, useMemo, useState } from "react";
import { slides } from "../data/services";

const ServiceModalContext = createContext(null);

export function ServiceModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(slides[0]);

  const value = useMemo(() => {
    const openWithSlide = (slide) => {
      setSelected(slide);
      setIsOpen(true);
    };

    const openByTitle = (title) => {
      const s = slides.find((x) => x.title === title);
      if (s) openWithSlide(s);
    };

    return {
      isOpen,
      setIsOpen,
      selected,
      openWithSlide,
      openByTitle,
    };
  }, [isOpen, selected]);

  return (
    <ServiceModalContext.Provider value={value}>
      {children}
    </ServiceModalContext.Provider>
  );
}

export function useServiceModal() {
  const ctx = useContext(ServiceModalContext);
  if (!ctx) throw new Error("useServiceModal must be used within ServiceModalProvider");
  return ctx;
}
