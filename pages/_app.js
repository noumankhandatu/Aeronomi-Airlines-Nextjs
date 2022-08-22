import "../styles/globals.css";
import ScrollToTop from "../component/ScrollToTop";
import Navbar from "../component/Common/Navbar";
import CopyRight from "../component/Common/CopyRight";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/assets/css/style.css";
import "../styles/assets/css/meanmenu.min.css";
import "../styles/assets/css/responsive.css";
import "../styles/assets/css/animate.min.css";
import "../styles/assets/css/fontawesome.all.min.css";
import "../styles/assets/css/color.css";
import Footer from "../component/Common/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ScrollToTop>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <CopyRight />
      </ScrollToTop>
    </div>
  );
}

export default MyApp;
