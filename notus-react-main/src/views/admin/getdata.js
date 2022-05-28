import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
//import CardProfile from "components/Cards/CardProfile.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
      <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}