import Image from "next/image";


export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center">
        {/* Background Image */}
        <Image
          src="/main.png"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute -z-10"
        />

        {/* Hero Text */}
        <div className="relative bg-[#FFF3E3] mt-[120px] px-6 w-[643px] h-[383px] md:p-12 lg:p-16 rounded-lg shadow-lg max-w-[90%] md:max-w-[50%] text-center md:text-left ml-auto mr-[5%]">
          <h6 className="text-sm md:text-base lg:text-lg font-bold uppercase mb-4">
            New Arrival
          </h6>
          <h3 className="text-2xl text-[#B88E2F] md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800 mb-6">
            Discover Our <br /> New Collection
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolore
          </p>
          <button className="bg-[#B88E2F] text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#FF9F50] transition duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}
