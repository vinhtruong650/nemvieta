import React from "react";
import ProductCard from "../Product/ProductCard";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineRight } from "react-icons/ai";

const DisplayHomeProduct = ({ Data, Topic, url, isEven = false }: any) => {
  return !Data?.length ? (<></>) : (
    <div className={isEven ? " py-0 my-8 rounded-lg pb-5 px-2" : " py-0 my-8 rounded-lg bg-mainblue pb-5 px-2"}>
      <div>
        <div className={
          isEven?"w-full flex p:gap-2 d:gap-20 p:items-start border-b-4 border-mainblue   d:items-center d:flex-row p:flex-col":
          "w-full flex p:gap-2 d:gap-20 p:items-start border-b-4 border-white   d:items-center d:flex-row p:flex-col"
        }>
          <div className="flex items-center justify-between w-full cursor-pointer">
            <h2 className={isEven ? " py-2 uppercase font-semibold text-[18px] text-mainblue hover:border-mainyellow hover:text-mainyellow duration-300 " : " py-2 uppercase font-semibold text-[18px] text-white hover:border-mainyellow hover:text-mainyellow duration-300 "}>
              {Topic}
            </h2>
            <div className="flex gap-3 text-black my-2 items-center justify-center scrollbar-thin overflow-x-auto  scrollbar-thumb-blue-300 scrollbar-track-gray-200">
              <Link
                href={`/san-pham/${url}`}
                className={isEven?"px-4 py-1 cursor-pointer hover:bg-gray-100 duration-300 rounded-full":
                  "px-4 py-1 cursor-pointer hover:bg-gray-100 duration-300 rounded-full text-white hover:text-black"
                }
              >
                <p className={isEven?
                  "w-max font-semibold":
                  "w-max font-semibold "
                }><AiOutlineArrowRight /></p>
              </Link>
            </div>
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
