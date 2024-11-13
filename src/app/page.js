// src/app/page.js
"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  // Array con las rutas de las imágenes
  const images = [
    '/images/index/alan-01.webp',
    '/images/index/alan-03.webp',
    '/images/index/cable-analog-05.webp',
    '/images/index/cami-analogicas-01.webp',
    '/images/index/cami-analogicas-03.webp',
    '/images/index/cami-analogicas-06.webp',
    '/images/index/Hele-01.webp',
    '/images/index/isa-01.webp',
    '/images/index/vic-03.webp',
    '/images/index/vic-06.webp',
    '/images/index/purefioroni-02.webp',
    '/images/index/purefioroni-03.webp',
    '/images/index/purefioroni-08.webp',
    '/images/index/xxx-01.webp',
    '/images/index/variete-1.webp',
    '/images/index/variete-2.webp',
    '/images/index/variete-4.webp',
    '/images/index/variete-5.webp',
    '/images/index/variete-6.webp',
    '/images/index/variete-7.webp',
    '/images/index/variete-8.webp',
    '/images/index/variete-09.webp',
    '/images/index/variete-10.webp',
    '/images/index/variete-11.webp',
    '/images/index/variete-12.webp',
    '/images/index/variete-13.webp',
    '/images/index/variete-14.webp',
    '/images/index/variete-15.webp',
    '/images/index/variete-16.webp',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        return (prevIndex + 1) % images.length;
      });
    }, 500); 
  
    return () => clearInterval(interval); 
  }, [images.length]);
  
  
  
  return (
    <div className={styles.container}>
      {}
      <div className={styles.imageContainer}>
        <img
          src={images[currentImageIndex]}
          alt="Imagen del carrusel"
          width={800} 
          height={1000} 
          className={styles.carouselImage}
        />
      </div>

      {/* Contenedor derecho (texto de bienvenida) */}
      <div className={styles.rightContainer}>
        <nav className={styles.nav}>
          <a href="/gallery">Galería</a>
          <a href="/shop">Tienda</a>
          <a href="/contact">Contacto</a>
        </nav>
        <div className={styles.welcomeText}>
          <p>Hola, soy</p>
          <h1>Rodrigo Guzzanti</h1>
        </div>
      </div>
    </div>
  );
}
