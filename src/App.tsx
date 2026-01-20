import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return <AppRoutes />;
};

export default App;
