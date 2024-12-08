import Fleshproduct from "@/components/fleshproduct";
import { flashCard } from "@/constant/flesh";
import Image from "next/image";

function Shop() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <Image
        src="/back.png"
        alt="Background Image"
        width={1440}
        height={316}
        className="w-full h-auto"
        priority
      />
      <Image
        src="/bsec.png"
        alt="Secondary Background Image"
        width={1440}
        height={100}
        className="w-full h-auto mt-5"
        priority
      />

      {/* Cards Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {flashCard.map((item, index) => (
          <Fleshproduct key={index} item={item} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center gap-6 my-10">
        {["1", "2", "3", "Next"].map((label, index) => (
          <button
            key={index}
            className={`w-14 h-14 flex justify-center items-center rounded-full text-sm font-medium ${
              label === "1"
                ? "bg-[#B88E2F] text-white"
                : "bg-[#F9F1E7] text-black"
            }`}
            aria-label={`Go to page ${label}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Footer Section */}
      <Image
        src="/btm.png"
        alt="Footer Image"
        width={1440}
        height={270}
        className="w-full h-auto mt-20"
        priority
      />
    </div>
  );
}

export default Shop;
