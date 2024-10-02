import React from "react";
import ProductCard from "../Product/ProductCard";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

const DisplayHomeProduct = ({ Data, Topic, url }: any) => {
  return (
    <div className="py-4">
      <div>
        <div className="w-full flex border-b border-black p:gap-2 d:gap-20 justify-between p:items-start  d:items-center d:flex-row p:flex-col">
          <div className="flex items-center justify-between border-b border-black cursor-pointer">
            <h2 className="border-b-2 py-2 uppercase border-mainblue font-semibold text-[18px] text-mainblue hover:border-mainyellow hover:text-mainyellow duration-300 ">
              {Topic}
            </h2>
          </div>
          <div className="flex gap-3 my-2 items-center scrollbar-thin overflow-x-auto  scrollbar-thumb-blue-300 scrollbar-track-gray-200">
            <Link
              href={`/san-pham/${url}`}
              className="border px-4 py-1 text-black border-black cursor-pointer hover:bg-gray-100 duration-300 rounded-full"
            >
              <p className=" w-max">Tất cả</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid p:grid-cols-2 d:grid-cols-5 gap-2 mt-4">
        {Data.map((item: any, idx: number) => (
          <ProductCard Data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default DisplayHomeProduct;
