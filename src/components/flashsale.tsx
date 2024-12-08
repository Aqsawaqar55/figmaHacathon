import React from 'react';
import { Button } from './ui/button';
import Fleshproduct from './fleshproduct';
import { flashCard } from '@/constant/flesh';

function Flashsale() {
  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-[24px] sm:text-[28px] lg:text-[33px] font-bold mb-6 text-center">
        Our Product
      </h1>

      {/* Cards Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {flashCard.map((item, index) => (
          <Fleshproduct key={index} item={item} />
        ))}
      </div>

      {/* Show More Button */}
      <Button className="mt-8 bg-transparent text-[#B88E2F] text-[14px] sm:text-[16px] font-semibold border border-[#B88E2F] px-6 py-2 hover:bg-[#B88E2F] hover:text-white transition">
        Show more
      </Button>
    </section>
  );
}

export default Flashsale;
