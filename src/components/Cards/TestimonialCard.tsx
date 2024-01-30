/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import StarIcon from "../../assets/star-yellow-icon.svg";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  imgUrl: any;
  review: string;
  description: string;
}

const TestimonialCard = ({
  name,
  imgUrl,
  review,
  description,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-md p-5 border mx-2">
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={imgUrl}
          alt={name}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full"
          priority
          width={56} // ancho de la imagen en píxeles
          height={56}
        />

        <div>
          <p className="text-sm md:text-base mb-1">{name}</p>

          <div className="flex items-end gap-[2px]">
            <Image
              src={StarIcon}
              alt=""
              className="w-4 h-4 object-contain"
              priority
              width={56} // ancho de la imagen en píxeles
              height={56}
            />
            <Image
              src={StarIcon}
              alt=""
              className="w-4 h-4 object-contain"
              priority
              width={56} // ancho de la imagen en píxeles
              height={56}
            />
            <Image
              src={StarIcon}
              alt=""
              className="w-4 h-4 object-contain"
              priority
              width={56} // ancho de la imagen en píxeles
              height={56}
            />
            <Image
              src={StarIcon}
              alt=""
              className="w-4 h-4 object-contain"
              priority
              width={56} // ancho de la imagen en píxeles
              height={56}
            />
          </div>
        </div>
      </div>

      <h6 className="text-sm md:text-base font-medium mb-1">{review}</h6>

      <span className="text-xs md:text-[13px] text-slate-500">
        {description}
      </span>
    </div>
  );
};

export default TestimonialCard;
