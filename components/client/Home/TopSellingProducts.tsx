"use client";
import { useData } from "@context/DataProviders";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../Product/ProductCard";
import { Pagination } from "antd";
import { ITEMS_PER_PAGE } from "@assets/item";

const TopSellingProducts = () => {
  const { Products } = useData();
  let ProductFiltered: any;

  if (Products?.length > 0) {
    ProductFiltered = Products.filter((item: any) => {
      if (item.parent2Url === "san-pham-ban-chay") return true;
      return false;
    });
  }

  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentItems = ProductFiltered?.slice(startIdx, endIdx);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div id="top-sell" className="scroll-middle-view">
      {ProductFiltered?.length > 0 && (
        <div className="grid grid-cols-12 justify-between items-center bg-slate-200 md:bg-slate-100 d:w-[1400px] mx-auto p:w-auto md:mt-20">
          <div
            id="discount"
            className="scroll-middle-view bg-no-repeat bg-cover col-span-12 md:pt-10 md:bg-transparent"
          >
            <div className="w-full p:w-auto d:mx-0 p:mx-2">
              <div className="h-10 md:pb-10 flex  justify-center items-center gap-5">
                <div>
                  <h2 className="font-Questrial font-bold md:text-[24px] text-[17px] text-textHeadSession">
                    SẢN PHẨM BÁN CHẠY
                  </h2>
                </div>
              </div>
              <div className="d:flex p:hidden bg-[url('/image/nem-ban-chay.jpg')] bg-fill bg-center">
                <div className="w-full py-10 d:flex justify-between">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={30}
                    slidesPerView={5}
                    centeredSlides={true}
                  >
                    {ProductFiltered?.map((item: any, idx: number) => (
                      <SwiperSlide key={idx} className="col-span-1 w-full">
                        <ProductCard Data={item} labelProduct="Best selling" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="d:hidden p:block">
                <div className="grid grid-cols-2 gap-3">
                  {currentItems.map((items: any, idx: number) => (
                    <div key={idx} className="col-span-1">
                      <ProductCard Data={items} isSale={true} />
                    </div>
                  ))}
                </div>

                {/* Phân trang */}
                <div className="mt-4 flex justify-center">
                  <Pagination
                    current={currentPage}
                    total={ProductFiltered.length}
                    pageSize={ITEMS_PER_PAGE}
                    onChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-span-12 h-full max-h-[200px] relative">
            <img
              src="image/nem-ban-chay.jpg"
              className="w-full h-full object-fill"
            ></img>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default TopSellingProducts;
