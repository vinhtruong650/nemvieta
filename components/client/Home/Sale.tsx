"use client";
import TimeSale from "@components/items/client-items/TimeSale";
import { convertListIdToProduct } from "@components/items/server-items/Handle";
import { useData } from "@context/DataProviders";
import moment from "moment";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductCard from "../Product/ProductCard";

const Sale = () => {
  const { Products, Sale } = useData();
  const currentTime = new Date();
  const formatCurrentTime = moment(currentTime).format("YYYY-MM-DD");
  let ProductFiltered: any;
  if (Sale?.salelist?.length > 0) {
    ProductFiltered = convertListIdToProduct(Sale.salelist, Products);
  }

  return (
    <div>
      {Sale.discount !== 0 && (
        <>
          <div className="w-full flex justify-end ">
            <div className="pr-5">
              <TimeSale />
            </div>
          </div>
          <div className="bg-mainblue bg-no-repeat bg-cover ">
            <div className="py-10 d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
              <div className="h-10 flex  justify-center items-center gap-5">
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/Your%20paragraph%20text.png?alt=media&token=414f819b-9c58-4836-84f9-80fb359a7fea"
                    alt="sale topic"
                    className="w-full h-[150px]"
                  />
                </div>
              </div>
              <div className="mt-10 d:flex p:hidden ">
                <Swiper
                  spaceBetween={30}
                  loop={true}
                  centeredSlides={true}
                  slidesPerView={5}
                  slidesPerGroup={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[]}
                  className="mySwiper "
                >
                  <div className="mt-5   ">
                    {ProductFiltered?.map((items: any, idx: number) => (
                      <SwiperSlide key={idx}>
                        <div>
                          <ProductCard Data={items} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
              <div className="mt-5 d:hidden p:block">
                <Swiper
                  spaceBetween={30}
                  loop={true}
                  centeredSlides={true}
                  slidesPerView={2}
                  slidesPerGroup={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper "
                >
                  <div className="mt-5">
                    {ProductFiltered?.map((items: any, idx: number) => (
                      <SwiperSlide key={idx}>
                        <div>
                          <ProductCard Data={items} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sale;
