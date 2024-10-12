"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../Product/ProductCard";

const TopSellingProducts = () => {
  const { Products } = useData();
  let ProductFiltered: any;

  if (Products?.length > 0) {
    ProductFiltered = Products.filter((item: any) => {
      if (item.parent2Url === "san-pham-ban-chay") return true;
      return false;
    });
  }

  return (
    <div>
      {ProductFiltered?.length > 0 && (
        <div className="grid grid-cols-12 justify-between items-center d:w-[1400px] mx-auto p:w-auto mt-20">
          <div className="col-span-4 h-full min-h-[500px] relative">
            <img
              src="image/poster_bestselling.jpg"
              className="w-full h-full object-fill"
            ></img>
            <div className=" bg-slate-100 absolute top-[50%] w-9/12 left-[50%] translate-x-[-50%] translate-y-[-50%] font-Questrial text-[30px] rounded-2xl opacity-70 p-5 text-textHeadSession">
              Những sản phẩm được tin dùng nhiều nhất
            </div>
          </div>
          <div
            id="discount"
            className="scroll-middle-view bg-no-repeat bg-cover col-span-8 md:pt-10 md:bg-transparent"
          >
            <div className="w-full p:w-auto d:mx-0 p:mx-2">
              <div className="h-10 pb-10 flex  justify-start items-center gap-5">
                <div>
                  <h2 className="pl-5 font-Questrial font-bold md:text-[24px] text-[17px] text-textHeadSession">
                    SẢN PHẨM BÁN CHẠY
                  </h2>
                </div>
              </div>
              <div className="d:flex p:hidden">
                <div className="w-full pl-5 d:flex justify-between">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={30}
                    slidesPerView={3}
                  >
                    {ProductFiltered?.map((item: any, idx: number) => (
                      <SwiperSlide key={idx} className="col-span-1 w-full">
                        <ProductCard Data={item} labelProduct="Best selling" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className=" d:hidden p:block">
                <div className=" grid grid-cols-2 gap-3">
                  {ProductFiltered?.map((items: any, idx: number) => (
                    <div key={idx} className="col-span-1">
                      <ProductCard Data={items} isSale={true} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopSellingProducts;
