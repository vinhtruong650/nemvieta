import Introduction from "@components/client/Introduction/Introduction";
import { getAllDataProps, getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á",
  description: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á ",
};

const IntroductionPage = async () => {
  return (
    <div>
      <div className="d:w-[1400px] d:mx-auto p:w-auto p:mx-2">
        <h1 className="text-[30px] text-center font-normal py-10">
          Giới thiệu về nệm Việt Á
        </h1>
        <Introduction />
      </div>
    </div>
  );
};

export default IntroductionPage;
