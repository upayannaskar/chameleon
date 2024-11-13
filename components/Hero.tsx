"use client"
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';

const images = [
  'https://via.placeholder.com/1920x1080/0000FF/808080?Text=Image+1',
  'https://via.placeholder.com/1920x1080/FF5733/808080?Text=Image+2',
  'https://via.placeholder.com/1920x1080/33FF57/808080?Text=Image+3',
  'https://via.placeholder.com/1920x1080/FF33A1/808080?Text=Image+4',
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying) {
      timer = setInterval(nextImage, 3000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isPlaying]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">Chameleon</h1>
          <p className="text-xl sm:text-2xl">Transforming your digital presence.</p>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
        <button
          onClick={prevImage}
          className="bg-black text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          onClick={togglePlayPause}
          className="bg-black text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>

        <button
          onClick={nextImage}
          className="bg-black text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      <div className="absolute inset-0">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
