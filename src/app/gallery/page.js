// src/app/gallery/page.js

"use client";

import { models } from "./modelsData"; // Asegúrate de tener el archivo modelsData.js con la info de cada modelo
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      {models.map((model, index) => (
        <div key={index} className={styles.modelSection}>
          {/* Enlace al perfil de Instagram del modelo */}
          <a
            href={model.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.modelInstagram}
          >
            {model.instagram}
          </a>

          {/* Carrusel de imágenes del modelo */}
          <div className={styles.carouselContainer}>
            {model.photos.map((photo, idx) => (
              <img
                key={idx}
                src={photo}
                alt={`Foto de ${model.name} ${idx + 1}`}
                className={styles.carouselImage}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
