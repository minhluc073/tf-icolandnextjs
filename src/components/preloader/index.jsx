import React from "react";

function Preloader() {
  return (
    <div class="preloader">
      <div class=" loader">
        <div class="square"></div>
        <div class="path">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="text-load">Loading :</p>
      </div>
    </div>
  );
}

export default Preloader;
