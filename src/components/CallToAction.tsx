import React from "react";

import HouseImg from "../assets/house-img.png";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-[1200px] h-auto mx-auto flex flex-col items-start md:h-[400px] md:flex-row min-[1090px]:h-[320px]">
        <Image
          src={HouseImg}
          alt="house"
          className="w-full md:w-1/2 md:h-full object-cover"
        />

        <div className="p-10">
          <h5 className="text-lg font-medium text-darkBlue mb-2 lg:mb-4">
            Find Out What It Costs
          </h5>

          <p className="text-sm text-darkBlue leading-6 text-justify mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ex
            quod, nemo, commodi accusamus quidem exercitationem magnam atque
            aliquam nulla natus, quia saepe. Alias beatae possimus id, esse iure
            aperiam ad culpa error magnam voluptate aliquam quos. Assumenda,
            iste error nesciunt consectetur, eligendi officiis facilis at
            tempore quis qui explicabo.
          </p>

          <button className="primary-btn">GET ESTIMATION</button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
