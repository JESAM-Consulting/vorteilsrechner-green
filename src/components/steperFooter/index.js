import React from "react";
import "./steperFooter.scss";
import FaceBook from "../../assets/Icons/facebook.svg";
import Instrgram from "../../assets/Icons/instragram.svg";
import { NavLink } from "react-router-dom";
export default function SteperFooter() {
  return (
    <>
      <div className="stper-footer-design">
        <div className="container">
          <div className="footer-content-alignment">
            <div className="back-web">
              <i class="fa-solid fa-left-long"></i>
              <a
                className="spanlink"
                href="https://www.ekd-solar.de"
                target={"_blank"}
                rel="noreferrer"
              >
                Zur Website
              </a>
            </div>
            <div className="footer-link">
              <div className="footer-link-alignment">
                <NavLink to="/datenschutzerklaerung">
                  Datenschutzerklärung
                </NavLink>
              </div>
              <div className="footer-link-alignment mobile-view-alignment">
                <div>
                  <NavLink to="/impressum">Impressum</NavLink>
                </div>
                <div className="footer-link-alignment">
                  <div className="facebook-icon">
                    <a
                      href="https://www.facebook.com/Solaranlagenbauer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={FaceBook} alt="FaceBook" />
                    </a>
                  </div>
                  <div className="instragram-icon">
                    <a
                      href="https://www.instagram.com/ekd_solar/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Instrgram} alt="Instrgram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
