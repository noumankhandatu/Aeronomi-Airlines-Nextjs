import { useEffect } from "react";
import { withRouter } from "next/router";
// ScrollToTop Area
const ScrollToTop = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  return props.children;
};

export default withRouter(ScrollToTop);
