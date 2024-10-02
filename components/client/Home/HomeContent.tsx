"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DisplayProduct from "../Product/DisplayProduct";
import { TypeProductItems } from "@assets/item";
import DisplayHomeProduct from "./DisplayProductHome";

const HomeContent = () => {
  const { productTypes, Products } = useData();
  return (
    <div className="flex flex-col bg-white">
      {productTypes?.map((item: any, idx: number) => {
        const sortProduct = Products.filter(
          (product: any) => product.type === item.type
        );
        return (
          <div key={idx}>
            <DisplayHomeProduct Data={sortProduct} Topic={item.type} />
          </div>
        );
      })}

      {/* <DisplayProduct Data={saleProducts} Topic="Sản phẩm khuyến mãi" />
    <DisplayProduct Data={bestSellerProducts} Topic="Sản phẩm bán chạy" />
    <DisplayProduct Data={newProducts} Topic="Sản phẩm mới" />
    <DisplayProduct Data={hotProducts} Topic="Sản phẩm nổi bật" /> */}
    </div>
  );
};

export default HomeContent;
