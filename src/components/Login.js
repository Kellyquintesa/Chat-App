import React from "react";

function login() {
  return (
    <div class="container p-10">
      {/* Header Start*/}
      <div class="flex justify-between mb-10">
        <h1 id="name" class="text-xl">
          {" "}
          Kelly Quintesa
        </h1>

        <img src="#" />
      </div>

      {/* Header End */}
      <form>
        <div id="form-group">
          <label>name :</label>
          <input
            type={"text"}
            class="cursor-pointer border-solid border-2 border-sky-900 block max-w-xl"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default login;
