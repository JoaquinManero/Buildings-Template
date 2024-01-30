import React, { useEffect, useState } from "react";
import TestimonialCard from "./Cards/TestimonialCard";
import { TESTIMONIALS } from "../utils/data";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Pagination from "./Pagination/Pagination";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-[1200px] py-16 mx-auto" id="testimonials">
      <h5 className="text-2xl font-semibold text-darkBlue text-center mb-16">
        Testimonials
      </h5>

      <div className="relative mb-7 px-5 md:px-10 ">
        <div className="slide active" key={TESTIMONIALS[currentSlide].id}>
          <TestimonialCard
            name={TESTIMONIALS[currentSlide].name}
            imgUrl={TESTIMONIALS[currentSlide].imgUrl}
            review={TESTIMONIALS[currentSlide].review}
            description={TESTIMONIALS[currentSlide].description}
          />
        </div>

        <button
          className="arrow-btn left-1 md:left-5 lg:left-2"
          onClick={prevSlide}
        >
          <RiArrowLeftSLine size={24} />
        </button>

        <button
          className="arrow-btn right-1 md:right-5 lg:right-2"
          onClick={nextSlide}
        >
          <RiArrowRightSLine size={24} />
        </button>
      </div>
      <Pagination active={currentSlide} />
    </section>
  );
};

export default Testimonials;
