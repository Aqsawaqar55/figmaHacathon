'use client';

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";





export default function RoomGallery() {
  return (
    <section className="w-full h-[550px] ml-[49px] mt-[60px] h-auto relative bg-[#FCF8F3] py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <h2 className="text-2xl lg:text-5xl font-bold text-[#3A3A3A] leading-tight">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-[#616161] text-lg">
              Our designer already made a lot of beautiful<br/> prototypes of rooms
              that inspire you.
            </p>
            <Button className="bg-[#B88E2F] hover:bg-[#9d7829] text-white px-8">
              Explore More
            </Button>
          </div>

          {/* Right Section */}
         <div className="w-[650] h-[582px]">
          <Image
          src="/twoimg/Products.png"
          alt="img"
          width={1196}
          height={582}/>
         </div>
        </div>
      </div>
    </section>
  );
}