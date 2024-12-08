import Browse from "@/components/browse";
import Catagory from "@/components/catogery";

import Flashsale from "@/components/flashsale";

import Furniture from "@/components/fornitu";
import Hero from "@/components/hero";




export default function Home() {
  return (
  <div className=" overflow-hidden">
    <Hero/>
    <Browse/>
    <Flashsale/>
    <Catagory/>
    <Furniture/>
  </div>
  );
}
