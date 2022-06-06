import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function chat() {
  return (
    <div class="container p-10">
      {/* Header Start*/}
      <div class="flex justify-between mb-10">
        <h1 id="name" class="text-xl font-bold text-yellow-500">
          {" "}
          Talkie
        </h1>

        {/* Hamburger Button */}
        <div id="hamburger" class="space-y-2">
          <div class="w-7 h-0.5 bg-gray-600"></div>
          <div class="w-7 h-0.5 bg-gray-600"></div>
          <div class="w-7 h-0.5 bg-gray-600"></div>
        </div>
      </div>

      {/* Header End */}

      {/* Search Users Start */}
      <div class="mt-5 max-w-md mx-auto">
        <div class="flex border-2 rounded h-10 ">
          <button class="h-5">
            <FontAwesomeIcon
              class="w-7 h-4"
              icon="fa-solid fa-magnifying-glass"
            />{" "}
          </button>
        </div>
      </div>
      {/* Search Users End */}
    </div>
  );
}

export default chat;
