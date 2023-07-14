import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimateCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={30}
      innerStyle={{
        backgroundColor: "#ff4581",
      }}
      // outerStyle={{
      //   mixBlendMode: "exclusion",
      // }}
      // color="#ff4581"
      outerAlpha={0.5}
      innerScale={1}
      outerScale={1.7}
      hasBlendMode={true}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}

export default AnimateCursor;
