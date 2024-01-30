import React from "react";
import ServiceInfoCard from "./Cards/ServiceInfoCard";
import { SERVICES } from "../utils/data";

const OurServices = () => {
  return (
    <section className="max-w-[1200px] py-16 mx-auto" id="services">
      <h5 className="text-2xl font-semibold text-darkBlue text-center mb-10">
        Our Services
      </h5>

      <div className="bg-white lg:shadow-xl lg:shadow-slate-200/50">
        {SERVICES.map((item: any) => (
          <ServiceInfoCard
            key={item.title}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
