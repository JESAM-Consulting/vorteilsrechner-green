import "./App.css";
import "./styles/mixins/global.scss";
// import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import Routes from "./components/routes";
import MobileShow from "./components/mobileShow";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div id="second-container">
        <Routes />
      </div>
      <MobileShow />
    </>
  );
}

export default App;
