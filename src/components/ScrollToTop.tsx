import { MoveUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll the page back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  };
  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed top-1/2  right-5 p-3 bg-[#003e4a] text-white rounded-full shadow-lg hover:bg-[#003e4a] transform -translate-y-1/2  "
        >
          <MoveUp/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
