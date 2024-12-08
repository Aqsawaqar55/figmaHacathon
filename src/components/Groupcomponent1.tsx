import type { NextPage } from "next";
import Image from "next/image";

// Type definition for the component's props
export type GroupComponent1Type = {
  className?: string; // Optional className prop for custom styling
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  return (
    // Main section that serves as the container for the component
    <section
      className={`self-stretch h-[316px] relative text-left text-29xl text-black font-poppins ${className}`}
    >
      {/* Background image container */}
      <div className="absolute top-[0px] left-[0px] w-full h-full flex items-center justify-center">
        <Image
          className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.038)]"
          width={1440}
          height={316}
          alt="Background image"
          src="/listcard/main.png"
        />
      </div>
      
      
      
     
    </section>
  );
};

export default GroupComponent1;