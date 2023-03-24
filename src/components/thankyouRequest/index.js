import React, { useState } from "react";
import "./thankyouRequest.scss";

import ThankYou from "../../assets/image/thankyouImg.png";
import Steper1 from "../../assets/image/thankyouStep1.png";
import Steper2 from "../../assets/image/thankyouStep2.png";
import Steper3 from "../../assets/image/thankyouStep3.png";
import Steper4 from "../../assets/image/thankyouStep4.png";
import Steper5 from "../../assets/image/thankypuStep5.png";
import Steper4Fill from "../../assets/image/thankypuStep4Fill.png";
import SliderSolar from "../sliderSolar";
import { useHistory } from "react-router-dom";

export default function ThankyouRequest() {
  const history = useHistory();

  return (
    <div className="thankyou-request-content-left-alignment">
      <div className="grid">
        <div className="grid-items">
          <div className="thankyou-request-content-alignment">
            <div className="thankyou-request-content-heading">
              <h1>Vielen Dank fur deine Anfrage</h1>
            </div>
            <div className="thankyou-content-notes-section">
              <div className="thankyou-content-notes-details">
                <p>
                Wir kümmern uns schnellstmöglich um dein Anliegen. Ein Fachberater in deiner Nähe wird dir weitere Informationen und Terminvorschläge auf deinem bevorzugten Kontaktweg mitteilen.
                </p>

                <div className="thankyou-button-alignment">
                  <a
                    className="buttonlink"
                    href="https://www.ekd-solar.de"
                    target={"_blank"}
                  >
                    Zur Website
                  </a>
                </div>
              </div>
              <div className="thankyou-img-alignment">
                <img src={ThankYou} alt="ThankYou" />
              </div>
            </div>

            <div className="thankyou-question-section">
              <div className="thankyou-question-alignment">
                <span>Was passiert nun?</span>
              </div>
              <div className="thankyou-steper-section">
                <h4>Zur Photovoltaik-Anlage in wenigen Schritten</h4>
                <div className="thankyou-all-content-steper-alignment">
                  <div className="steper-img-details">
                    <img src={Steper1} alt="Steper1" />
                    <div className="step-name">
                      <p>Persönliche <br/>Beratung</p>
                    </div>

                    <div className="thankyou-tooltip-details">
                      <span>
                        Wir starten mit einem persönlichen Gespräch
                        und einer Besichtigung vor Ort. Auf Basis dessen
                        erstellen wir das Energiekonzept, welches am
                        besten zu deinen Anforderungen passt.
                      </span>
                    </div>
                  </div>

                  <div className="steper-img-details">
                    <img src={Steper2} alt="Steper2" />
                    <div className="step-name">
                      <p>Individuelles <br />Angebot</p>
                    </div>
                    <div className="thankyou-tooltip-details">
                      <span>
                        Gemeinsam beantworten wir dir gern alle
                        weiteren Fragen rund um dein individuel-les Angebot. Gern beraten wir dich auch zu
                        den Möglichkeiten einer Finanzierung.
                      </span>
                    </div>
                  </div>

                  <div className="steper-img-details">
                    <img src={Steper3} alt="Steper3" />
                    <div className="step-name">
                      <p>Organisation</p>
                    </div>
                    <div className="thankyou-tooltip-details">
                      <span>
                        Nach Auftragsbestätigung kümmern wir uns um
                        den Rest. Wir organisieren Material, Handwerker
                        und terminieren den weiteren Projektablauf.
                      </span>
                    </div>
                  </div>

                  <div className="steper-img-details">
                    <img src={Steper4Fill} alt="Steper4Fill" />
                    <div className="step-name">
                      <p>Professionelle Installation</p>
                    </div>
                    <div className="thankyou-tooltip-details">
                      <span>
                        Für die Installation vor Ort richten wir uns ganz
                        nach deinem Kalender. Eines unserer erfahrenen
                        Handwerker-Teams aus deiner Region installiert
                        die neue Solaranlage binnen weniger Wochen.
                      </span>
                    </div>
                  </div>

                  <div className="steper-img-details">
                    <img src={Steper5} alt="Steper5" />
                    <div className="step-name">
                      <p>Betriebsphase und Services</p>
                    </div>
                    <div className="thankyou-tooltip-details">
                      <span>
                        Wir melden die Anlage als fertig beim Netzbetreiber
                        und sind auch nach Inbetriebnahme weiterhin im-mer für dich da. Gern behalten wir deine Anlage im
                        Rahmen unserer Fernüberwachung dauerhaft im
                        Blick und können auf Störungen sofort reagieren.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-items">
          <div className="main-image-style">
            <img src="https://i.pinimg.com/originals/82/d0/32/82d032c50154ccdce0a933252152b5ce.jpg" />
            <SliderSolar />
          </div>
        </div>
      </div>
    </div>
  );
}
