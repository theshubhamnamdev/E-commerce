import React from "react";
// import WomanImg from '../img/woman_hero.png'
// import { Link } from 'react-router-dom'
// import fashion_banner1 from '../img/fashion-banner2.jpg'
import newbanner from "../img/new-banner1.jpg";

const Hero = () => {
  return (
    <section className="bg-neutral-200 h-[100px] lg:h-[700px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="hidden w-full bg-center lg:block">
        <img
          className="w-full h-screen bg-cover bg-center"
          src={newbanner}
          alt=""
        />
        {/* <img className='hidden sm:block' src={fashion_banner1} alt="" /> */}
      </div>
      {/* <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            AUTUMN SALE STYLISH
          <br />
          <span className='font-semibold'>WOMANS</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-black'>Discover More</Link>
        </div>
        <div className='hidden lg:block'>
          <img className='w-[230px]' src={WomanImg} alt="" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
