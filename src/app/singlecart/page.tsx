import Shopbottombar from "@/components/shopbottombar";
import Image from "next/image";

function Single() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Header Image */}
      <Image
        src="/single.png"
        alt="Background Image"
        width={1440}
        height={316}
        className="w-full h-auto"
        priority
      />

      <div className="w-full mt-10">
        {/* Table Header */}
        <ul className="flex justify-between sm:justify-center sm:gap-10 lg:gap-28 items-center w-full max-w-[817px] mx-auto h-14 bg-[#F9F1E7] text-sm font-medium text-black rounded-md px-4">
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>

        {/* Product Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mt-6 bg-white p-4 rounded-lg shadow-md">
          {/* Product Image */}
          <Image
            src="/sofa/imgsofa.png"
            alt="Product Image"
            width={108}
            height={105}
            className="w-24 h-auto"
            priority
          />

          {/* Product Details */}
          <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-[#9F9F9F] gap-4">
            <p className="sm:flex-1">Asgaard Sofa</p>
            <p className="sm:flex-1">Rs. 250,000.00</p>
            <p className="sm:flex-1">Rs. 250,000.00</p>
          </div>

          {/* Product Card */}
          <Image
            src="/sofa/card.png"
            alt="Product Card"
            width={393}
            height={390}
            className="w-full max-w-[250px] h-auto"
            priority
          />
        </div>
        <Shopbottombar />
      </div>
    </div>
  );
}

export default Single;
