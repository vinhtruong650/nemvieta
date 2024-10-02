"use client";
import { Image, Modal, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useData } from "@context/DataProviders";
import { usePathname, useRouter } from "next/navigation";
import { FacebookProvider, Comments } from "react-facebook";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

const ProductDetail = ({ Data, SimilarProduct }: any) => {
  const { ContactData } = useData();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDiscount, setIsDiscount] = React.useState(false);
  const router = useRouter();
  let headers: any;

  if (Object.keys(Data?.price[0]).includes("1m4x2m")) {
    headers = ["Size", "1mx2m", "1m2x2m", "1m4x2m", "1m6x2m", "1m8x2m"];
  } else if (Data.type === "NỆM THÔNG HƠI") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  } else if (Data.type === "NỆM PE") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  } else if (Data.type === "NỆM FOAM") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  } else if (Data.type === "NỆM LOXO") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  } else if (Data.type === "NỆM CAO SU") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  } else if (Data.type === "DRAP") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  }

  const formattedTable = Data?.price.map((rowData: any, index: any) => {
    if (index === 0) {
      return headers;
    } else {
      return headers?.map((header: any) => rowData[header] || "");
    }
  });

  let formattedNewPrice: any;
  if (Data?.newPrice !== undefined) {
    formattedNewPrice = Data?.newPrice.map((rowData: any, index: any) => {
      if (index === 0) {
        return headers;
      } else {
        return headers.map((header: any) => rowData[header] || "");
      }
    });
  }

  const items = [
    {
      key: "1",
      label: "Chi tiết sản phẩm",
      children: (
        <>
          <h3 className="text-[24px] font-semibold ">Thông tin sản phẩm</h3>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: Data?.content }}
          ></div>
        </>
      ),
    },
    {
      key: "2",
      label: "Bình luận",
      children: (
        <>
          <div className="w-[778px]">
            <FacebookProvider appId="781034490143336">
              {" "}
              <Comments
                href="https://khogachcaocaptinphat.com"
                width={778}
              />{" "}
            </FacebookProvider>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-5  d:w-[1400px] d:mx-auto p:w-auto p:mx-2 py-14">
      <div>
        <div className="grid p:grid-cols-1 d:grid-cols-2 d:mx-16 gap-16 font-LexendDeca d:flex-row p:flex-col p:mx-2 pb-14">
          <div className=" rounded-lg d:h-max p:h-auto overflow-hidden">
            <div className="w-full flex justify-center">
              <Image.PreviewGroup>
                <Image
                  className="p-2 h-full  object-contain hover:scale-110 duration-500"
                  src={Data?.image}
                />
              </Image.PreviewGroup>
            </div>
            {Data?.subimage?.length > 0 && (
              <>
                {" "}
                <div className="w-full bg-gray-100 mt-3">
                  <div className="p-2 flex ">
                    <Image.PreviewGroup>
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        {Data?.subimage?.map((item: any, idx: number) => (
                          <SwiperSlide key={idx}>
                            {" "}
                            {/* <div className="mx-4 w-[150px] h-[150px] overflow-hidden flex items-center"> */}
                            <Image
                              className="p-2 h-full w-full object-contain"
                              src={item.url}
                            />
                            {/* </div> */}
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </Image.PreviewGroup>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className=" flex flex-col gap-5">
            <div>
              <h3 className="text-[26px] uppercase">{Data?.title}</h3>
              <div className="bg-black w-24 h-1"></div>
            </div>
            <div>
              Bảng giá:
              <div className="mt-2">
                <div className=" ">
                  <table className="min-w-full">
                    <tbody>
                      {formattedTable?.map((row: any, rowIndex: any) => (
                        <tr key={`row-${rowIndex}`}>
                          {row?.map((cell: any, colIndex: any) => (
                            <td
                              key={`cell-${rowIndex}-${colIndex}`}
                              className="border px-4 py-2 w-max truncate"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <>
              <div className="flex gap-5 d:flex-row p:flex-col  ">
                {Data.discount !== 0 && (
                  <>
                    {" "}
                    <div className="flex">
                      <div
                        className="border p-2  cursor-pointer bg-red-400 hover:bg-red-500 duration-300 text-white rounded-lg"
                        onClick={() => setIsDiscount(true)}
                      >
                        Xem bảng giá giảm giá
                      </div>
                    </div>
                  </>
                )}
                <div className="flex">
                  <div
                    className=" px-10 h-max w-max text-[18px] text-primary bg-mainyellow border-mainyellow rounded-full text-white font-normal border hover:bg-orange-500 hover:border-orange-500 duration-300 flex items-center  py-2 justify-center cursor-pointer gap-1"
                    onClick={() => window.open(`tel:${ContactData?.phone}`)}
                  >
                    Liên hệ
                  </div>
                </div>
              </div>
            </>

            <div className="py-4 border-t border-b w-full font-light">
              <h3>Mô tả</h3>
              <div dangerouslySetInnerHTML={{ __html: Data?.describe }}></div>
            </div>
            <div className="flex gap-3 items-center font-light">
              <span className="">Lượt xem {Data?.access}</span>
            </div>
          </div>
        </div>

        <div className="grid p:grid-cols-1 d:grid-cols-4 gap-5">
          <div className="d:px-16 py-5 p:px-2 border col-span-3">
            <Tabs
              defaultActiveKey="1"
              items={items}
              className="bg-white px-10 rounded-md font-LexendDeca py-5"
            />
          </div>

          <div className="col-span-1">
            <h3 className="text-mainred py-2 border-b-2 border-mainred uppercase font-bold">
              Sản phẩm liên quan
            </h3>
            <div>
              {SimilarProduct?.slice(0, 8).map((item: any, idx: number) => (
                <Link key={idx} href={`/chi-tiet-san-pham/${item.url}`}>
                  <div className="flex gap-3 py-3 border-b hover:bg-gray-100 duration-300">
                    <div className="flex-[30%]">
                      <img src={item.image} alt="similarProduct" />
                    </div>
                    <div className="flex-[60%]">
                      <h3 className="truncate1 text-black">{item.title}</h3>

                      <div className="flex">
                        <div className="py-1 bg-mainred text-maingreen flex gap-2 items-center text-[15px]">
                          <FiPhoneCall />
                          <span>Chi tiết</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div
      className={`fixed bottom-36 right-[-300px] ${
        OpenCart ? " z-50" : "z-0"
      }`}
    >
      <ShopCart />
    </div> */}
      <Modal
        closable={false}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div>
          <h2 className="text-[24px] font-semibold">Đến trang đăng nhập</h2>
          <p>Đăng nhập để mua hàng</p>
          <div className="flex w-full justify-center gap-5 mt-5">
            <div
              className="py-2 px-6 rounded-full border border-mainyellow cursor-pointer text-mainyellow duration-300 hover:border-orange-500 hover:text-orange-500"
              onClick={() => setIsModalOpen(false)}
            >
              Hủy
            </div>
            <div
              className="py-2 px-6 rounded-full border border-mainyellow bg-mainyellow text-white duration-300 hover:bg-orange-500 hover:border-orange-500 cursor-pointer"
              onClick={() => router.push("/dang-nhap")}
            >
              Đăng nhập
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        closable={false}
        width={800}
        open={isDiscount}
        onCancel={() => setIsDiscount(false)}
        footer={null}
      >
        <div>
          <div>
            <div className="mt-2 ">Giảm giá {Data.discount}%</div>

            <div>
              Bảng giá:
              <div className="mt-2 ">
                <div className="overflow-x-auto ">
                  <table className="min-w-full">
                    <tbody>
                      {formattedTable?.map((row: any, rowIndex: any) => (
                        <tr key={`row-${rowIndex}`}>
                          {row?.map((cell: any, colIndex: any) => (
                            <td
                              key={`cell-${rowIndex}-${colIndex}`}
                              className="border px-4 py-2 w-max truncate"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mt-5">
              Bảng giá giảm:
              <div className="mt-2 text-redPrimmary">
                <div className="overflow-x-auto ">
                  <table className="min-w-full">
                    <tbody>
                      {formattedNewPrice?.map((row: any, rowIndex: any) => (
                        <tr key={`row-${rowIndex}`}>
                          {row.map((cell: any, colIndex: any) => (
                            <td
                              key={`cell-${rowIndex}-${colIndex}`}
                              className="border px-4 py-2 w-max truncate"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetail;
