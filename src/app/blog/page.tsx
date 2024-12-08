"use client";
import type { NextPage } from "next";


import GroupComponent1 from "@/components/Groupcomponent1";
import GroupComponent from "@/components/groupcomponent";
import Shopbottombar from "@/components/shopbottombar";

const Blog: NextPage = () => {
 

  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start leading-normal tracking-normal">
      <main className="self-stretch flex flex-col items-start justify-start p-4 sm:p-6 lg:p-8 max-w-full">
        <GroupComponent1 />
        <section className="w-full bg-white flex flex-col lg:flex-row items-start justify-start gap-6 lg:gap-10 p-4 sm:p-6 lg:p-10">
          <div className="flex-1 flex flex-col gap-6">
            <GroupComponent
              thumbnailImages="/last/laptop.png"
              dashiconsadminUsers="/dashiconsadminusers.svg"
              uiscalender="/uiscalender.svg"
              citag="/citag.svg"
              wood="Wood"
              goingAllInWithMillennialDesign="Going all-in with millennial design"
            />
            <GroupComponent
              thumbnailImages="/last/pen.png"
              dashiconsadminUsers="/dashiconsadminusers-1.svg"
              uiscalender="/uiscalender-1.svg"
              citag="/citag-1.svg"
              wood="Handmade"
              goingAllInWithMillennialDesign="Exploring new ways of decorating"
            />
            <GroupComponent
              thumbnailImages="/last/last.png"
              dashiconsadminUsers="/dashiconsadminusers-2.svg"
              uiscalender="/uiscalender-2.svg"
              citag="/citag-2.svg"
              wood="Wood"
              goingAllInWithMillennialDesign="Handmade pieces that took time to make"
            />
          </div>

          <aside className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="bg-white border border-darkgray rounded-lg p-4">
              <h3 className="text-2xl font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-darkgray">
                <li><a href="#" className="hover:text-black">Crafts</a></li>
                <li><a href="#" className="hover:text-black">Design</a></li>
                <li><a href="#" className="hover:text-black">Handmade</a></li>
              </ul>
            </div>
          </aside>
        </section>
        <Shopbottombar />
      </main>
    </div>
  );
};

export default Blog;