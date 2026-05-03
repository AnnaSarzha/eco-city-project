import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Slideshow.css';

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Массив с путями к изображениям
  const slides = [
    '/images/slideshow/slide1.avif',
    '/images/slideshow/slide2.avif',
    '/images/slideshow/slide3.avif',
    '/images/slideshow/slide4.avif',
    '/images/slideshow/slide5.avif',
    '/images/slideshow/slide6.avif',
    '/images/slideshow/slide7.avif',
  ];

  // Автоматическая смена слайдов каждые 10 секунд
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // 10000 мс = 10 секунд

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          className="slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Плавный переход 1 секунда
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
          }}
        >
          {/* Белый overlay для приглушения фото */}
          <div className="slide-overlay"></div>
          
          {/* Заголовок сайта поверх фото */}
          <div className="slide-content">
            <h1 className="slide-title">Eco City Project</h1>
            <p className="slide-subtitle">Вместе сделаем город чище</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Индикаторы слайдов (точки внизу) */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;