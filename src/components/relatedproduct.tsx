import React from 'react';
import { Card } from './ui/card';
import Image from 'next/image';

import { ourProduct } from '@/constant/realted';

type FleshproductProps = {
  item: ourProduct;
};

function Route({ item }: FleshproductProps) {
  return (
    <Card className="w-full h-auto bg-[#F4F5F7] flex flex-col p-4">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={item.src}
          alt="img"
          width={item.width}
          height={item.height}
          className="w-full h-auto object-contain"
        />
        {/* Discount Button */}
        {item.discountbtn && (
          <button className="absolute top-3 right-3 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
            -{item.discountprice}%
          </button>
        )}
      </div>

      {/* Bottom Text */}
      <div className="mt-4">
        <h2 className="text-lg font-bold">{item.heading}</h2>
        <p className="text-sm text-gray-500">({item.reviews})</p>
        <p className="text-lg font-semibold">{item.price}</p>
      </div>
    </Card>
  );
}

export default Route;
