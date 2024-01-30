import React from "react";
import { TESTIMONIALS } from "../../utils/data";

interface PaginationProps {
  active: any;
}

const Pagination = ({ active }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {TESTIMONIALS.map((item: any, index: any) => (
        <div
          key={item.id}
          className={`w-8 h-1 ${
            active === index ? "bg-darkBlue" : "bg-blue-100"
          } rounded-md transition-all duration-500`}
        />
      ))}
    </div>
  );
};

export default Pagination;
