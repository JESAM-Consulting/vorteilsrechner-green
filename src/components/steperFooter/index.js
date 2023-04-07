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
                href="https://www.encrease.energy"
                target={"_blank"}
                rel="noreferrer"
              >
                Zur Website
              </a>
            </div>
            <div className="footer-link">
              <div className="footer-link-alignment">
                <a href="https://www.encrease.energy/datenschutz" target={"_blank"}>
                  Datenschutzerklärung
                </a>
              </div>
              <div className="footer-link-alignment mobile-view-alignment">
                <div>
                  <a href="https://www.encrease.energy/impressum" target={"_blank"}>Impressum</a>
                </div>
                <div className="footer-link-alignment">
                  <div className="facebook-icon">
                    <a
                      href="https://www.facebook.com/profile.php?id=100090529813256"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={FaceBook} alt="FaceBook" />
                    </a>
                  </div>
                  <div className="instragram-icon">
                    <a
                      href="https://www.instagram.com/encrease.energy/"
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
