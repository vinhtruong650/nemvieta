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
      {Sale.discount !== 0 && ProductFiltered && (
        <div className="grid grid-cols-4 justify-between items-center d:w-[1400px] mx-auto p:w-auto">
          <div className=" flex justify-end col-span-4">
            <div className="pr-5">{/* <TimeSale /> */}</div>
          </div>
          <div
            id="discount"
            className="scroll-middle-view bg-no-repeat bg-cover col-span-4 md:pt-10 md:bg-transparent bg-slate-200"
          >
            <div className=" lg:w-[1300px] p:w-auto d:mx-0 p:mx-2">
              <div className="h-10 py-10 flex  justify-center items-center gap-5">
                <div>
                  {/* <img
                    src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/Your%20paragraph%20text.png?alt=media&token=414f819b-9c58-4836-84f9-80fb359a7fea"
                    alt="sale topic"
                    className="w-full h-[150px]"
                  /> */}
                  <h2 className="font-Questrial font-bold md:text-[24px] text-[17px] text-textHeadSession">
                    SẢN PHẨM KHUYẾN MÃI
                  </h2>
                </div>
              </div>
              <div className="mt-10 d:grid grid-cols-1 p:hidden ">
                <div className=" d:grid col-span-1 grid-cols-5 gap-2 justify-items-center">
                  {ProductFiltered?.map((items: any, idx: number) => (
                    <div key={idx} className="col-span-1 w-full">
                      <ProductCard Data={items} isSale={true} />
                    </div>
                  ))}
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

export default Sale;
