"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slide = () => {
  const { Slides } = useData();
  const [ItemActive, setItemActive] = useState(0);
  useEffect(() => {
    const idInterval = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => {
      clearTimeout(idInterval);
    }
  }, [ItemActive, Slides]);

  const handleNext = () => {
    setItemActive(prev => {
      let itemActive = prev + 1;
      if (itemActive >= Slides?.length ?? 0) {
        itemActive = 0;
      }
      return itemActive;
    });
  }

  const handlPrev = () => {
    let itemActive = ItemActive - 1;
    if (itemActive < 0) {
      itemActive = Slides?.length ?? 0 - 1;
    }
    setItemActive(itemActive);
  }

  return (
    // <div className="grid grid-cols-7 gap-2">
    //   <div className="col-span-5">
    //     <div>
    //       <Swiper
    //         spaceBetween={30}
    //         loop={true}
    //         centeredSlides={true}
    //         slidesPerView={1}
    //         slidesPerGroup={1}
    //         autoplay={{
    //           delay: 2500,
    //           disableOnInteraction: false,
    //         }}
    //         navigation={true}
    //         modules={[Autoplay]}
    //         className="mySwiper"
    //       >
    //         <div>
    //           {Slides.map((item: any, index: number) => (
    //             <SwiperSlide key={index}>
    //               <Link
    //                 href={`/san-pham/nem?type=nem-cao-su`}
    //                 className="w-full h-[600px] overflow-hidden cursor-pointer"
    //               >
    //                 <img
    //                   src={item.image}
    //                   alt="slide"
    //                   className="w-full h-full hover:scale-105 duration-300 object-cover "
    //                 />
    //               </Link>
    //             </SwiperSlide>
    //           ))}
    //         </div>
    //       </Swiper>
    //     </div>
    //   </div>
    //   <div className="grid grid-rows-2 gap-2 col-span-2">
    //     <div className="w-full h-full rounded-lg">
    //       <img
    //         alt="slide1"
    //         src = "https://drive.google.com/thumbnail?id=1bP5kylXaDh7PwTeKrNBHJ0yUUUolGpL5&sz=w1000"
    //         className="w-full rounded-lg"
    //       />
    //     </div>
    //     <div className="w-full h-full">
    //       <img
    //         src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/GIAO%20H%C3%80NG%20NHANH%202.png?alt=media&token=b357b68a-32e2-4d0c-a905-731809825324"
    //         alt="slide2"
    //         className="w-full"
    //       />
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="slider">
        <div className="list">
          {Slides.map((item: any, index: number) => (
            <>
              <div className={ItemActive === index ? "item active" : "item"}>
                <img src={item.image} />
                {/* <div className="content">
                  <p className="text-white opacity-20">design</p>
                  <h2 className="text-white opacity-20">Slider 01</h2>
                  <p className="text-white opacity-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                  </p>
                </div> */}
              </div></>
          ))}
        </div>
        {/* <div className="arrows">
          <button id="prev" className="mr-5" onClick={handlPrev}><AiOutlineLeft /></button>
          <button id="next" onClick={handleNext}><AiOutlineRight /></button>
        </div> */}
        <div className="thumbnail">
          {Slides.map((item: any, index: number) => (

            <div onClick={() => {
              setItemActive(index);
            }} className={ItemActive === index ? "item active" : "item"}>
              <img src={item.image} />
              {/* <div className="content">
                Name Slider
              </div> */}
            </div>

          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;
