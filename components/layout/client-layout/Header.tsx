"use client";
import { HeaderItems, HeaderItemsLagre } from "@assets/item";
import { getAllDocuments } from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { formatPhoneNumber } from "@ultis/formatPhoneNumber";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaPhone, FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const { ContactData, setContactData, Products } = useData();
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const [openSearchMB, setOpenSearchMB] = useState(false);

  const [openTypeMB, setOpenTypeMB] = useState(0);
  const [open, setOpen] = useState(false);
  const [tradeMarkData, setTradeMarkData] = useState<any>();

  useEffect(() => {
    const sort = Products?.filter((product: any) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchRs(sort);
  }, [Products, search]);

  useEffect(() => {
    getAllDocuments("website").then((data: any) => {
      data?.forEach((items: any) => {
        if (items.id === "Trademark") {
          setTradeMarkData(items);
        } else if (items.id === "Contact") {
          setContactData(items);
        }
      });
    });
  }, []);

  const router = useRouter();
  const HandleSearch = () => {
    router.push(`/san-pham?search=${search}`);
    setSearch("");
  };
  return (
    <>
      <div className="d:block sticky z-50 w-full top-[-70px] p:hidden ">
        <div className=" relative bg-gradient-to-r from-customBgHeader to-customBgHeader ">
          <div className="grid grid-cols-5 justify-between  items-center d:w-[1400px] mx-auto p:w-auto">
            <Link href={`/`} className=" p-1 h-[70px] ">
              <img
                src={tradeMarkData?.websiteLogo}
                alt="logo việt á"
                className="h-full cursor-pointer"
              />
            </Link>
            <div className=" relative col-span-2  flex justify-center w-full">
              <div
                className=" w-full  rounded-full flex items-center overflow-hidden"
                style={{ backgroundColor: "#e3f2fd" }}
              >
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none text-textCustom mr-2 col-span-6 font-Questrial font-medium bg-transparent"
                    placeholder="Bạn đang tìm gì?"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div>
                    <div
                      className={`${
                        search ? "block" : "hidden"
                      }  text-white w-max p-1 rounded-full text-[10px] cursor-pointer`}
                      onClick={() => setSearch("")}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                <div
                  className=" py-3 px-6 text-white rounded-r-full cursor-pointer"
                  style={{ backgroundColor: "#1e88e5" }}
                  onClick={() => HandleSearch()}
                >
                  <FaSearch />
                </div>
              </div>
              {search && (
                <div className="absolute w-full bg-blue-100 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className=" flex flex-col">
                    {searchRs.map((product: any, idx: number) => (
                      <div
                        onClick={() => HandleSearch()}
                        key={idx}
                        className="cursor-pointer p-2 hover:bg-blue-200"
                      >
                        {product.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-end col-span-2 ">
              <div className="py-2 px-4 text-red-500 flex justify-center">
                <span className="uppercase font-normal text-[22px] col-span-1 p-4 animate__animated animate__bounce animate__infinite">
                  <FaPhone />
                </span>
                <span className="col-span-1 font-normal">
                  <span className="text-white">Hotline: </span>
                  <span className="font-medium">
                    {formatPhoneNumber(ContactData.phone)}
                  </span>
                  <br></br>
                  <span
                    className="text-white font-normal"
                    style={{ fontSize: "13px" }}
                  >
                    (Mua hàng-Góp ý-Bảo hành)
                  </span>
                </span>
                <span className="h-[50px] rounded-[50%] ml-5">
                  <img
                    src="image/ISOlogo.png"
                    className="object-contain w-full h-full"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full absolute bottom-0 translate-y-[120%]">
            <div
              className="col-span-3 bg-gradient-to-b from-customBgHeader via-gray-100 to-colortopdownBlue text-textCustom px-10 rounded-3xl pl-18 "
              style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}
            >
              <div className="flex gap-10  mt-4 w-full justify-center">
                {HeaderItemsLagre.map((item: any, idx: number) => (
                  <div className="relative group/main " key={idx}>
                    <Link
                      className=" uppercase font-medium duration-300 flex items-center text-[16px] gap-2"
                      href={`/${item.value}`}
                    >
                      <p> {item.label}</p>
                      {item.label === "Sản phẩm" && (
                        <AiOutlineDown className="text-[10px] group-hover/main:rotate-180 duration-300 text-red" />
                      )}
                    </Link>
                    <div className="h-[2px] bg-white w-0 group-hover/main:w-full duration-300 mt-3 "></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d:hidden p:block ">
        <div className="h-[64px] fixed z-50 w-full top-0 bg-customBgHeader text-white shadow-xl ">
          <div className="px-4 w-full flex justify-between items-center">
            <div className="text-[22px] p-2" onClick={() => setOpen(true)}>
              <IoIosMenu />
            </div>
            <div className="h-[64px]">
              <img
                src={tradeMarkData?.websiteLogo}
                alt="Logo"
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div
                className="text-[18px] p-2"
                onClick={() => setOpenSearchMB(!openSearchMB)}
              >
                <FaSearch />
              </div>
            </div>
          </div>
          {openSearchMB && (
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainblue flex items-center ">
                <div className=" pl-4 w-full text-black justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6"
                    placeholder="Tìm kiếm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div>
                    <div
                      className={`${
                        search ? "block" : "hidden"
                      }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                      onClick={() => setSearch("")}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                <div className="bg-orange-500 py-3 px-6 text-white rounded-r-full cursor-pointer">
                  <FaSearch />
                </div>
              </div>
              {search && (
                <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-2xl z-50 mt-2 text-black ">
                  <div className=" flex flex-col">
                    {searchRs.map((product: any, idx: number) => (
                      <Link
                        href={`$chi-tiet-san-pham/${product.url}`}
                        key={idx}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <>
          <Drawer
            placement="left"
            closable={false}
            width={300}
            onClose={() => setOpen(false)}
            open={open}
          >
            <div>
              <div className="p-5">
                <img src={tradeMarkData?.websiteLogo} alt="logo" />
              </div>
              <div>
                <div className="flex flex-col mt-2 ">
                  {HeaderItems.map((item: any, idx: number) => (
                    <Link
                      href={`/${item.value}`}
                      className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                      key={idx}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Drawer>
        </>
      </div>
    </>
  );
};

export default Header;
