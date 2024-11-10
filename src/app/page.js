// src/app/page.js
"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  // Array con las rutas de las imágenes
  const images = [
    '/images/alan-01.jpg',
    '/images/alan-03.jpg',
    '/images/cable-analog-05.jpg',
    '/images/cami-analogicas-01.jpg',
    '/images/cami-analogicas-03.jpg',
    '/images/cami-analogicas-04.jpg',
    '/images/cami-analogicas-06.jpg',
    '/images/cami-analogicas-15.jpg',
    '/images/isa-01.jpg',
    '/images/vic-02.jpg',
    '/images/vic-03.jpg',
    '/images/vic-04.jpg',
    '/images/vic-06.jpg',
    '/images/purefioroni-02.jpg',
    '/images/purefioroni-03.jpg',
    '/images/purefioroni-04.jpg',
    '/images/purefioroni-07.jpg',
    '/images/purefioroni-11.jpg',
    '/images/purefioroni-13.jpg',
    '/images/Hele-01.jpg',
    '/images/xxx-01.jpg',
    '/images/variete-1.jpg',
    '/images/variete-2.jpg',
    '/images/variete-3.jpg',
    '/images/variete-4.jpg',
    '/images/variete-5.jpg',
    '/images/variete-6.jpg',
    '/images/variete-7.jpg',
    '/images/variete-8.jpg',
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
