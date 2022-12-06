import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="h-screen md:h-full relative">
      <div className="flex justify-between gap-6 md:flex-col-reverse md:gap-4">
        <div className="w-1/2 xmd:w-full">
          <Navbar />
          <h1 className="text-7xl font-bold uppercase mt-12">Enjoy The New Tasty</h1>
          <h3 className="mt-6 text-2xl font-semibold">
            Fresh <span className="font-normal">and</span> Delicious
          </h3>
          <p className="mt-1">
            Our personal journey has lead us to find and explore the life-altering powers of organic, whole-foods and ethically sourced ingredients. This goodness that makes us happier, healthier and
            lets us connect with our own bodies and others.
          </p>
          <Link href="/">
            <button className="mt-4 px-4 py-2 rounded-md bg-yellow-400 text-black">View Menu</button>
          </Link>
        </div>

        <div className="h-screen w-1/2 relative xmd:hidden">
          <Image src="/bg.jpg" width={400} height={900} className="h-full w-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-40" />
        </div>
      </div>

      <div className="flex gap-4 text-center absolute bottom-8 right-8 z-30 xmd:static xmd:mt-8 md:flex-col">
        <div className="bg-neutral-900 p-4 rounded-md justify-end border border-dashed border-yellow-500 border-spacing-3">
          <h4 className="text-lg mb-2 font-semibold leading-tight">Mon-Fr 9.am - 8.00 pm</h4>
          <p className="text-md text-neutral-300">Working Hours</p>
        </div>
        <div className="bg-neutral-900 p-4 rounded-md justify-end border border-dashed border-yellow-500 border-spacing-3">
          <h4 className="text-lg mb-2 font-semibold leading-tight">No. 14, Yatinuwara St., Kandy.</h4>
          <p className="text-md text-neutral-300">Location</p>
        </div>
        <div className="bg-neutral-900 p-4 rounded-md justify-end border border-dashed border-yellow-500 border-spacing-3">
          <h4 className="text-lg mb-2 font-semibold leading-tight">+94 76 123 4567</h4>
          <p className="text-md text-neutral-300">Telephone</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
