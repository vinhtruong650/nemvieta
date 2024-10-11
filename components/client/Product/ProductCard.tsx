import { Badge } from "antd";
import Link from "next/link";
import React from "react";
import { IoMdStar } from "react-icons/io";
import "animate.css";

const ProductCard = ({ Data, isSale = false }: any) => {
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

  // if (Data?.newPrice !== undefined) {
  //   newPrice =
  //     Data?.newPrice[1]["1mx2m"] ||
  //     Data?.newPrice[1]["1m2x2m"] ||
  //     Data?.newPrice[1]["1m4x2m"] ||
  //     Data?.newPrice[1]["1m6x2m"] ||
  //     Data?.newPrice[1]["1m8x2m"] ||
  //     Data?.newPrice[2]["1mx2m"] ||
  //     Data?.newPrice[2]["1m2x2m"] ||
  //     Data?.newPrice[2]["1m4x2m"] ||
  //     Data?.newPrice[2]["1m6x2m"] ||
  //     Data?.newPrice[2]["1m8x2m"] ||
  //     Data?.newPrice[3]["1mx2m"] ||
  //     Data?.newPrice[3]["1m2x2m"] ||
  //     Data?.newPrice[3]["1m4x2m"] ||
  //     Data?.newPrice[3]["1m6x2m"] ||
  //     Data?.newPrice[3]["1m8x2m"] ||
  //     Data?.newPrice[4]["1mx2m"] ||
  //     Data?.newPrice[4]["1m2x2m"] ||
  //     Data?.newPrice[4]["1m4x2m"] ||
  //     Data?.newPrice[4]["1m6x2m"] ||
  //     Data?.newPrice[4]["1m8x2m"];

  //   const newPriceString = newPrice.toString();

  //   newPrice = newPriceString;
  // }
  return (
    <Link href={`/chi-tiet-san-pham/${Data.url}`} className="">
      {Data.discount === undefined || Data.discount === 0 ? (
        <>
          <div className="bg-slate-200 w-full md:w-[246px] relative flex flex-col justify-between rounded-md overflow-hidden">
            {isSale && (
              <div className=" bg-gradient-to-b from-customBgHeader via-white to-colortopdownBlue font-semibold text-[13px] text-textHeadSession absolute top-0 z-20 left-0 px-4  rounded-tr-lg rounded-br-lg ">
                Sale
              </div>
            )}
            <div className="flex flex-col gap-2 ">
              <div className="w-full h-[246px] flex justify-center items-center overflow-hidden relative md:p-2">
                <img
                  src={Data.image}
                  alt="product"
                  className="object-cover h-full hover:scale-110 duration-300 w-full"
                />
              </div>
              <div className=" flex flex-col gap-1 relative pb-2">
                <div className="font-normal mt-2 text-[9px] uppercase text-gray-500">
                  {Data.type}
                </div>
                <div className="font-Questrial font-bold text-textHeadSession text-[13px]">
                  {Data.title}
                </div>
                {/* <div
                  dangerouslySetInnerHTML={{ __html: Data.content }}
                  className="font-Questrial text-textHeadSession text-[13px]"
                ></div> */}
                <div className="text-redPrimmary flex">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </div>
                <div className="flex px-2 font-Questrial items-end gap-2 text-red-600 absolute bg-gradient-to-tl from-customBgHeader via-white to-colortopdownBlue top-0 translate-y-[-100%] w-full py-2">
                  {Data.newPrice === undefined ? (
                    <>
                      <p className="text-[15px] font-bold">{price}₫</p>
                    </>
                  ) : (
                    <>
                      <p className="text-[15px] text-redPrimmary font-bold ">
                        {price}đ
                      </p>
                      <p className="line-through">{newPrice}₫</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <Badge.Ribbon
            className=" animate__animated animate__backInLeft"
            text={`Giảm ${Data.discount}%`}
            color="red"
          >
            <div className="border bg-slate-100 h-[380px] flex flex-col justify-between font-LexendDeca text-[16px]">
              <div className="flex flex-col gap-2">
                <div className="w-full h-[220px] flex justify-center items-center overflow-hidden">
                  {/* <img
                    src={Data.image}
                    alt="product"
                    className="object-contain h-full hover:scale-110 duration-300 w-full px-2"
                  /> */}
                </div>
                <div className="px-4 flex flex-col gap-1">
                  <div className="font-normal     truncate2">{Data.title}</div>
                  <div className="text-redPrimmary flex">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </div>
                  <div className="flex font-normal items-end gap-2">
                    {Data.newPrice === undefined ? (
                      <>
                        <p className="text-[18px] font-normal ">{price}đ</p>
                      </>
                    ) : (
                      <>
                        <p className="text-[18px] text-redPrimmary font-bold ">
                          {newPrice} đ
                        </p>
                        <p className="line-through text-gray-400">{price} đ</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Badge.Ribbon>
        </>
      )}
    </Link>
  );
};

export default ProductCard;
