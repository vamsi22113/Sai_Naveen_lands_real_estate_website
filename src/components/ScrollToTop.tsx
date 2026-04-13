import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const isModalRoute = pathname.startsWith("/places/") || (pathname.startsWith("/services/") && pathname !== "/services");
    if (isModalRoute) {
      previousPath.current = pathname;
      return;
    }

    const wasModalRoute = previousPath.current.startsWith("/places/") || (previousPath.current.startsWith("/services/") && previousPath.current !== "/services");

    if (hash) {
      // If there's a hash, scroll to that element
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          // Use instant so the user doesn't see a visible flash or scroll down motion
          element.scrollIntoView({ behavior: "instant" });
        }
      }, 0);
    } else {
      // Otherwise, scroll to top of page
      if (!wasModalRoute) {
        window.scrollTo(0, 0);
      }
    }

    previousPath.current = pathname;
  }, [pathname, hash]);

  return null;
}
