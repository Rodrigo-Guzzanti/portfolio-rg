// src/app/page.js
"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  // Array con las rutas de las imágenes
  const images = [
    '/images/alan-01.webp',
    '/images/alan-03.webp',
    '/images/cable-analog-05.webp',
    '/images/cami-analogicas-01.webp',
    '/images/cami-analogicas-03.webp',
    '/images/cami-analogicas-06.webp',
    '/images/isa-01.webp',
    '/images/vic-02.webp',
    '/images/vic-03.webp',
    '/images/vic-06.webp',
    '/images/purefioroni-02.webp',
    '/images/purefioroni-07.webp',
    '/images/purefioroni-08.webp',
    '/images/Hele-01.webp',
    '/images/xxx-01.webp',
    '/images/variete-1.webp',
    '/images/variete-2.webp',
    '/images/variete-3.webp',
    '/images/variete-4.webp',
    '/images/variete-5.webp',
    '/images/variete-6.webp',
    '/images/variete-7.webp',
    '/images/variete-8.webp',
    '/images/variete-09.webp',
    '/images/variete-10.webp',
    '/images/variete-11.webp',
    '/images/variete-12.webp',
    '/images/variete-13.webp',
    '/images/variete-14.webp',
    '/images/variete-15.webp',
    '/images/variete-16.webp',
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
          <a href="/gallery">Gallery</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className={styles.welcomeText}>
          <p>Hola, soy</p>
          <h1>Rodrigo Guzzanti</h1>
        </div>
      </div>
    </div>
  );
}
