import React from "react";

// components

import CardMatchImage from "components/Cards/CardMatchImage.js";
//import CardEmpty from "components/Cards/CardEmpty.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardMatchImage />
        </div>
      </div>
    </>
  );
}