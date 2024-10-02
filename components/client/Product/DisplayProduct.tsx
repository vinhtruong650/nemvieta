"use client";
import React, { useEffect } from "react";
import { useData } from "@context/DataProviders";
import { set } from "firebase/database";
import ProductCard from "@components/client/Product/ProductCard";

const DisplayProduct = ({ Data, Parent, Children, Type }: any) => {
  const [Topic, setTopic] = React.useState<any>("");

  const { productTypes, Products } = useData();

  useEffect(() => {
    if (Type !== undefined) {
      const topic = productTypes.find((item: any) => item.typeUrl === Type);
      if (topic) {
        setTopic(topic.type);
      }
    } else if (Children !== undefined) {
      const childTopic = productTypes.find((item: any) =>
        item.children.some((child: any) => child.childrenUrl === Children)
      );
      if (childTopic) {
        const topic = childTopic.children.find(
          (child: any) => child.childrenUrl === Children
        );
        if (topic) {
          setTopic(topic.children);
        }
      }
    } else {
      const topic = productTypes.find((item: any) => item.parentUrl === Parent);
      if (topic) {
        setTopic(topic.parent);
      }
    }
  }, [Type, Parent, Children, productTypes]);

  return (
    <div className="bg-[rgba(255,255,255,0.85)] w-full h-full min-h-screen">
      <div className="w-[1300px] mx-auto mt-10 py-5">
        <div className="bg-[rgba(0,0,0,0.64)] text-white">
          <div className="w-full flex  flex-col  py-3  px-5">
            <h2 className="uppercase text-[24px] font-semibold ">
              Tất cả sản phẩm {Topic}
            </h2>
            {Data.length !== 0 ? (
              <>
                {" "}
                <p>
                  Tìm thấy {Data.length} sản phẩm trong {Products.length} sản
                  phẩm
                </p>
              </>
            ) : (
              <>
                {" "}
                <p>
                  Không tìm thấy sản phẩm nào trong {Products.length} sản phẩm
                </p>
              </>
            )}
          </div>
        </div>
        <div className="grid grid-cols-5 gap-1 mt-4">
          {Data.map((item: any, idx: number) => (
            <ProductCard Data={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
