import { useState, useEffect } from "react";
import Link from "next/link";

function Gotop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <a onClick={scrollToTop} id="scroll-top">
          <i className="fas fa-angle-up"></i>
        </a>
      )}
    </>
  );
}

export default Gotop;
