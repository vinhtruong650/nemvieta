import { Badge } from "antd";
import Link from "next/link";
import React from "react";
import { IoMdStar } from "react-icons/io";
import "animate.css";

const ProductCard = ({ Data, labelProduct = "" }: any) => {
  // get price and newPrice from Data with loop
  let price;
  let sizes: any;
  if (Data?.price[0]) {
    sizes = Object.keys(Data?.price[0]);
  }
  // arrange Size value to first column in sizes array
  if (sizes) {
    const index = sizes.indexOf("Size");
    if (index > -1) {
      sizes.splice(index, 1);
    }
    sizes.unshift("Size");
  }

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j < sizes.length; j++) {
      if (Data.price[i] && Data.price[i][sizes[j]]) {
        price = Data.price[i][sizes[j]];
        break;
      }
    }
    if (price) {
      break;
    }
  }
  let newPrice;
  if (Data?.newPrice) {
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j < sizes.length; j++) {
        if (Data.newPrice[i] && Data.newPrice[i][sizes[j]]) {
          newPrice = Data.newPrice[i][sizes[j]];
          break;
        }
      }
      if (newPrice) {
        break;
      }
    }
  }

  return (
    <Link href={`/chi-tiet-san-pham/${Data.url}`} className="">
      {Data.discount === undefined || Data.discount === 0 ? (
        <>
          <div className="md:bg-white w-full md:w-[253px] relative flex flex-col justify-between rounded-md overflow-hidden">
            {labelProduct && (
              <div className=" bg-gradient-to-b from-customBgHeader via-white to-colortopdownBlue font-semibold text-[10px] md:text-[13px] text-textHeadSession absolute top-0 z-20 left-0 px-4  rounded-tr-lg rounded-br-lg ">
                {labelProduct}
              </div>
            )}
            <div className="flex flex-col gap-2 ">
              <div className="w-full md:h-[246px] flex justify-center items-center overflow-hidden relative ">
                <img
                  src={Data.image}
                  alt="product"
                  className="object-cover h-full hover:scale-110 duration-300 w-full"
                />
              </div>
              <div className=" flex flex-col gap-1 relative pb-2 p:bg-white md:bg-transparent">
                <div className="font-normal mt-2 text-[9px] uppercase text-gray-500 p:px-2 md:p-0">
                  {Data.type}
                </div>
                <div className="font-Questrial font-bold text-textHeadSession md:text-[13px] text-[10px] p:px-2 md:p-0">
                  {Data.title}
                </div>
                {/* <div
                  dangerouslySetInnerHTML={{ __html: Data.content }}
                  className="font-Questrial text-textHeadSession text-[13px]"
                ></div> */}
                <div className="text-redPrimmary flex md:text-[16px] text-[13px] p:px-2 md:p-0">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </div>
                <div className="flex px-2 font-Questrial items-end gap-2 text-red-600 absolute bg-gradient-to-tl from-customBgHeader via-white to-colortopdownBlue top-0 translate-y-[-100%] w-full py-0 md:py-2">
                  {Data.newPrice === undefined ? (
                    <>
                      <p className="md:text-[15px] text-[13px] font-bold">
                        {price === "Liên hệ" ? "Liên hệ" : `${price}₫`}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="md:text-[15px] text-[13px] text-redPrimmary font-bold ">
                        {price === "Liên hệ" ? "Liên hệ" : `${price}₫`}
                      </p>
                      <p className="line-through text-[9px] md:text-[11px]">
                        {price === "Liên hệ" ? "Liên hệ" : `${price}₫`}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="md:w-[253px]">
          {" "}
          <Badge.Ribbon
            className=" animate__animated animate__backInLeft text-[10px] md:text-[13px]"
            text={`Giảm ${Data.discount}%`}
            color="red"
          >
            <div className=" md:bg-white w-full md:w-[253px] relative flex flex-col justify-between rounded-md overflow-hidden">
              {labelProduct && (
                <div className=" bg-gradient-to-b from-customBgHeader via-white to-colortopdownBlue font-semibold text-[10px] md:text-[13px] text-textHeadSession absolute top-0 z-20 left-0 px-4  rounded-tr-lg rounded-br-lg ">
                  {labelProduct}
                </div>
              )}
              <div className="flex flex-col gap-2">
                <div className="w-full md:h-[246px] flex justify-center items-center overflow-hidden relative md:pb-2">
                  <img
                    src={Data.image}
                    alt="product"
                    className="object-cover h-full hover:scale-110 duration-300 w-full "
                  />
                </div>
                <div className=" flex flex-col gap-1 relative pb-2 p:bg-white md:bg-transparent">
                  <div className="font-normal mt-2 text-[9px] uppercase text-gray-500 p:px-2 md:p-0">
                    {Data.type}
                  </div>
                  <div className="font-Questrial font-bold text-textHeadSession md:text-[13px] text-[10px] p:px-2 md:p-0">
                    {Data.title}
                  </div>
                  <div className="text-redPrimmary flex md:text-[16px] text-[13px] p:px-2 md:p-0">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </div>
                  <div className="flex px-2 font-Questrial items-end gap-2 text-red-600 absolute bg-gradient-to-tl from-customBgHeader via-white to-colortopdownBlue top-0 translate-y-[-100%] w-full py-0 md:py-2">
                    {Data.newPrice === undefined ? (
                      <>
                        <p className="md:text-[15px] text-[13px] font-Questrial ">
                          {price === "Liên hệ" ? "Liên hệ" : `${price}₫`}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="md:text-[15px] text-[13px] text-redPrimmary font-bold font-Questrial ">
                          {price === "Liên hệ" ? "Liên hệ" : `${price}₫`}
                        </p>
                        <p className="line-through text-[9px] md:text-[11px] text-gray-500">
                          {price === "Liên hệ" ? "Liên hệ" : `${price}₫`}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Badge.Ribbon>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
