import React from "react";

export const Spinner = () => {
  return (
    <div className="spinner-parent">
      <div className="spinner">
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_utglcazj.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};
