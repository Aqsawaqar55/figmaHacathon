import Image from "next/image";

export default function Furniture() {
  const images = [
    { src: "/furniture/img1.png", alt: "Setup 1", width: 300, height: 400 },
    { src: "/furniture/Rectangle 38.png", alt: "Setup 2", width: 600, height: 400 },
    { src: "/furniture/center.png", alt: "Setup 3", width: 300, height: 400 },
    { src: "/furniture/fourbed.png", alt: "Setup 4", width: 700, height: 600 },
    { src: "/furniture/chair5.png", alt: "Setup 5", width: 500, height: 600 },
    { src: "/furniture/brown6.png", alt: "Setup 6", width: 400, height: 500 },
    { src: "/furniture/eight.png", alt: "Setup 7", width: 300, height: 400 },
    { src: "/furniture/nine.png", alt: "Setup 8", width: 500, height: 500 },
  ];

  return (
    <div className="bg-white text-center py-10 px-6 border-y-2">
      {/* Header */}
      <h6 className="text-center md:text-xl font-light text-gray-800 mb-8">
        Share your setup with{" "}
      </h6>
      <h1 className="text-[#0e0e0e] text-5xl md:text-3xl font-bold font-[poppins]">
        #FuniroFurniture
      </h1>
      <br />

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            style={{
              aspectRatio: `${image.width} / ${image.height}`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
