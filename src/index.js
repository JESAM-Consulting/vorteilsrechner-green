import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Helmet>
        <title>Erneuerbare Energien: Solarmodule und Solartechnik von EnCrease</title>
        <meta name="description" content="Steigern Sie Ihre Energieeffizienz mit hochwertigen Solarpanels und Solartechnik von EnCrease." />
      </Helmet>
    </div>
    <ToastContainer />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
