import React from "react";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function AnimateCursor(props) {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={30}
      innerStyle={{
        backgroundColor: props.backgroundColor,
      }}
      outerStyle={{
        border: `2px solid ${props.backgroundColor}`,
      }}
      showSystemCursor={true}
      outerAlpha={0}
      innerScale={1}
      outerScale={1.4}
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
