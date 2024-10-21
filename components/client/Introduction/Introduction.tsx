"use client";
import { useData } from "@context/DataProviders";
import React from "react";

const Introduction = () => {
  const { Introduction } = useData();
  const markup = { __html: Introduction?.content };

  return (
    <div>
      <div className="font-Questrial" dangerouslySetInnerHTML={markup}></div>
    </div>
  );
};

export default Introduction;
