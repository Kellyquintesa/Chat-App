import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { AiOutlineContacts } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

function chat() {
  return (
    <div class="container mx-auto px-4 bg-slate-50 h-screen ">
      {/* Header Start*/}
      <div class="flex justify-between mb-2 p-4 pt-8">
        <h1 id="name" class="text-xl font-bold text-yellow-500">
          {" "}
          Holla
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
      <div class="mt-2 w-full mx-auto px-4">
        <div class="flex border-2 rounded-full bg-slate-100 h-11 ">
          <button class="h-5 px-3 ">
            <div class=" w-full p-2 mt-1/2 flex ">
              <SearchIcon class=" w-4 mx-auto text-gray-600 " />
              <span class="px-5 text-gray-600"> Search for users...</span>
            </div>
          </button>
        </div>
      </div>
      {/* Search Users End */}

      {/* Footer Start */}
      <div class="container border-t-2 border-slate-200 fixed inset-x-1 bottom-0 bg-slate-100 p-2">
        <div class=" w-full lg:max-w-full  p-3  flex justify-around ">
          <button class="cursor-pointer">
            <BsFillChatSquareDotsFill class="w-10 h-8 " />
          </button>
          <button class="cursor-pointer">
            <AiOutlineContacts class="w-10 h-8" />
          </button>
          <button class="cursor-pointer">
            <IoIosCall class="w-10 h-8" />
          </button>
        </div>
        {/* Footer End */}
      </div>
    </div>
  );
}

export default chat;
