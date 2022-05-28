import React from "react";

// components
import PatchSettings from "components/Cards/PatchSettings.js";
//import CardProfile from "components/Cards/CardProfile.js";

export default function Maps() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <PatchSettings />
        </div>
      </div>
    </>
  );
}
