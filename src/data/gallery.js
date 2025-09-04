// src/data/gallery.js

// helper to import all images that match regex
function importAll(r) {
  return r.keys().map((key, index) => ({
    src: r(key),                 // image path
    alt: `Gallery image ${index + 1}`, // alt text
  }));
}

// require.context(directory, useSubdirectories, regex)
export const galleryImages = importAll(
  require.context("../assets/gallery", false, /wimage\s\(\d+\)\.jpeg$/)
);
