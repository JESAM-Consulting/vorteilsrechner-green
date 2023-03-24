import React from "react";
import Lottie from "lottie-react";
import MobileJson from "../../assets/json/animation.json";
export default function MobileShow() {
  return (
    <div id="mobile-id">
      <div className="lottie-content-alignment">
        <Lottie animationData={MobileJson} />
      </div>
    </div>
  );
}
