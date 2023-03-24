import React, { useState } from "react";
import "./sliderSolar.scss";

import SunImg from "../../assets/image/sunImg.gif";
import SunCloseImg from "../../assets/image/sunCloseImg.svg";
import SliderIcon1 from "../../assets/image/sliderIcon1.svg";
import SliderIcon2 from "../../assets/image/sliderIcon2.svg";
import SliderIcon3 from "../../assets/image/sliderIcon3.svg";
import SliderIcon4 from "../../assets/image/sliderIcon4.svg";
import SliderIcon5 from "../../assets/image/SliderIcon5.svg";
import SliderIcon6 from "../../assets/image/SliderIcon6.svg";
import SliderIcon7 from "../../assets/image/SliderIcon7.svg";
import Slider from "react-slick";
import Dropdown from "../../assets/Icons/dropdownWhite.png";
import DropdownTop from "../../assets/Icons/dropdownTop.png";
import LeftArrow from "../../assets/Icons/left-arrow.svg";
import RightArrow from "../../assets/Icons/right-arrow.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="rightArrow" onClick={onClick}>
      <img src={RightArrow} alt="RightArrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="leftArrow" onClick={onClick}>
      <img src={LeftArrow} alt="LeftArrow" />
    </div>
  );
}

export default function SliderSolar() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [openSilderbar, setSilderbar] = useState(false);
  const [showBenifiteDetails, setBenifiteDetails] = useState(false);
  const [showBenifiteDetails1, setBenifiteDetails1] = useState(false);
  const [showBenifiteDetails2, setBenifiteDetails2] = useState(false);
  const [showBenifiteDetails3, setBenifiteDetails3] = useState(false);
  return (
    <>
      <div className="benifite-solar-section">
        <div className={openSilderbar ? "img-alignment " : "img-alignment"}>
          <div
            className={
              openSilderbar
                ? " img-alignment-animate-animation"
                : " img-alignment-animate-animation"
            }
          >
            <img
              src={!openSilderbar ? SunImg : SunCloseImg}
              alt="SunImg"
              className={
                openSilderbar
                  ? "rotate-animation-image"
                  : "rotate-animation-image1"
              }
              onClick={() => setSilderbar(!openSilderbar)}
            />
            {/* {openSilderbar === false ? (
              <img
                src={SunImg}
                alt="SunImg"
                className="rotate-animation-image"
                onClick={() => setSilderbar(!openSilderbar)}
              />
            ) : (
              <img
                className="animate__animated animate__rotateIn"
                data-wow-offset="600"
                src={SunCloseImg}
                alt="SunCloseImg"
                onClick={() => setSilderbar(!openSilderbar)}
              />
            )} */}
          </div>
          {openSilderbar && (
            <div className="benifite-solar-silder-section">
              <div className="benifite-solar-silder-details">
                <div className="benifite-solar-heading-alignment">
                  <Slider {...settings}>
                    <div>
                      <h4>Deine Vorteile durch Solarenergie</h4>
                      {/* <div className="benifite-solar-notes-alignment">
                          <p>Alles auf 20 Jahre abgesichert:</p>
                        </div> */}
                      <div className="benifite-solar-content-details-section">
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon1} alt="SliderIcon1" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Unabhängigkeit</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Mit eigener Solarenergie deckst du bis zu 85%
                                deines Eigenbedarfs.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon2} alt="SliderIcon2" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Kosten sparen</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Langfristige Senkung deiner Stromkosten und
                                Steuervergünstigungen.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon3} alt="SliderIcon3" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Nachhaltigkeit</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Schutz der Umwelt durch erneuerbare Energie.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon4} alt="SliderIcon4" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Wertsteigerung</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Wertsteigerung deiner Immobilie durch innovative
                                Solarprodukte.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4>Maximale Sicherheit- bei minimalem Risiko</h4>
                      <div className="benifite-solar-notes-alignment">
                        <p>Alles auf 20 Jahre abgesichert:</p>
                      </div>
                      <div className="benifite-solar-content-details-section">
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon5} alt="SliderIcon5" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Investitionsschutz</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Finanzielle Absicherung durch maßgeschneiderte
                                Finanzierungsmodelle.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon6} alt="SliderIcon6" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Produktgarantie</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Garantie auf Solarmodule und weitere Produkte.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon7} alt="SliderIcon7" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Montagegarantie</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Sichere und professionelle Montage garantiert.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4>Unser Versprechen</h4>
                      {/* <div className="benifite-solar-notes-alignment">
                          <p>Alles auf 20 Jahre abgesichert:</p>
                        </div> */}
                      <div className="benifite-solar-content-details-section">
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon1} alt="SliderIcon1" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Unabhängigkeit</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Mit eigener Solarenergie deckst du bis zu 85%
                                deines Eigenbedarfs.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon2} alt="SliderIcon2" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Kosten sparen</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Langfristige Senkung deiner Stromkosten und
                                Steuervergünstigungen.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon3} alt="SliderIcon3" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Nachhaltigkeit</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Schutz der Umwelt durch erneuerbare Energie.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon4} alt="SliderIcon4" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Wertsteigerung</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Wertsteigerung deiner Immobilie durch innovative
                                Solarprodukte.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4>Professionell & aus einer Hand</h4>
                      <div className="benifite-solar-notes-alignment">
                        <p>Alles auf 20 Jahre abgesichert:</p>
                      </div>
                      <div className="benifite-solar-content-details-section">
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon5} alt="SliderIcon5" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Investitionsschutz</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Finanzielle Absicherung durch maßgeschneiderte
                                Finanzierungsmodelle.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon6} alt="SliderIcon6" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Produktgarantie</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Garantie auf Solarmodule und weitere Produkte.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="benifite-solar-content-details-alignment">
                          <div className="slider-icon-alignment">
                            <img src={SliderIcon7} alt="SliderIcon7" />
                          </div>
                          <div className="benifite-solar-details">
                            <div className="benifite-solar-details-heading">
                              <h4>Montagegarantie</h4>
                            </div>
                            <div className="benifite-solar-details-text">
                              <p>
                                Sichere und professionelle Montage garantiert.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mobile-view-benifiteSidebar-section">
        <div className="mobile-view-benifite-alignment">
          <div className="mobile-view-flex-alignment">
            <div
              className="mobile-view-child-details"
              onClick={() => setBenifiteDetails(!showBenifiteDetails)}
            >
              <div className="mobile-heading-name">
                <h4>Deine Vorteile durch Solarenergie</h4>
              </div>
              <div className="dropdown-alignment-icon">
                {showBenifiteDetails === true ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </div>
            </div>
            {showBenifiteDetails && (
              <div className="benfite-details-box-section">
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon1} alt="SliderIcon1" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Unabhängigkeit</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>
                      Mit eigener Solarenergie deckst du bis zu 85% deines
                      Eigenbedarfs.{" "}
                    </span>
                  </div>
                </div>
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon2} alt="SliderIcon2" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Kosten sparen</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>
                      Langfristige Senkung deiner Stromkosten und
                      Steuervergünstigungen.
                    </span>
                  </div>
                </div>
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon3} alt="SliderIcon3" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Nachhaltigkeit</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>Schutz der Umwelt durch erneuerbare Energie.</span>
                  </div>
                </div>
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon4} alt="SliderIcon4" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Wertsteigerung </h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>
                      Wertsteigerung deiner Immobilie durch innovative
                      Solarprodukte.{" "}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mobile-view-flex-alignment">
            <div
              className="mobile-view-child-details"
              onClick={() => setBenifiteDetails1(!showBenifiteDetails1)}
            >
              <div className="mobile-heading-name">
                <h4>Maximale Sicherheit- bei minimalem Risiko</h4>
              </div>
              <div className="dropdown-alignment-icon">
                {showBenifiteDetails1 === true ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </div>
            </div>
            {showBenifiteDetails1 && (
              <div className="benfite-details-box-section">
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon5} alt="SliderIcon5" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Investitionsschutz</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>
                      Finanzielle Absicherung durch maßgeschneiderte
                      Finanzierungsmodelle.
                    </span>
                  </div>
                </div>
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon6} alt="SliderIcon6" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Produktgarantie</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>Garantie auf Solarmodule und weitere Produkte.</span>
                  </div>
                </div>
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon7} alt="SliderIcon7" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Montagegarantie</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>Sichere und professionelle Montage garantiert.</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mobile-view-flex-alignment">
            <div
              className="mobile-view-child-details"
              onClick={() => setBenifiteDetails2(!showBenifiteDetails2)}
            >
              <div className="mobile-heading-name">
                <h4>Unser Versprechen</h4>
              </div>
              <div className="dropdown-alignment-icon">
                <img src={Dropdown} alt="Dropdown" />
              </div>
            </div>
            {showBenifiteDetails2 && (
              <div className="benfite-details-box-section">
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon1} alt="SliderIcon1" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Unabhängigkeit</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>
                      Mit eigener Solarenergie deckst du bis zu 85% deines
                      Eigenbedarfs.{" "}
                    </span>
                  </div>
                </div>
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon2} alt="SliderIcon2" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Kosten sparen</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>
                      Langfristige Senkung deiner Stromkosten und
                      Steuervergünstigungen.
                    </span>
                  </div>
                </div>
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon3} alt="SliderIcon3" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Nachhaltigkeit</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>Schutz der Umwelt durch erneuerbare Energie.</span>
                  </div>
                </div>
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon4} alt="SliderIcon4" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Wertsteigerung </h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>
                      Wertsteigerung deiner Immobilie durch innovative
                      Solarprodukte.{" "}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mobile-view-flex-alignment">
            <div
              className="mobile-view-child-details"
              onClick={() => setBenifiteDetails3(!showBenifiteDetails3)}
            >
              <div className="mobile-heading-name">
                <h4>Professionell & aus einer Hand</h4>
              </div>
              <div className="dropdown-alignment-icon">
                <img src={Dropdown} alt="Dropdown" />
              </div>
            </div>
            {showBenifiteDetails3 && (
              <div className="benfite-details-box-section">
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon5} alt="SliderIcon5" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Investitionsschutz</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>
                      Finanzielle Absicherung durch maßgeschneiderte
                      Finanzierungsmodelle.
                    </span>
                  </div>
                </div>
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon6} alt="SliderIcon6" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Produktgarantie</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>Garantie auf Solarmodule und weitere Produkte.</span>
                  </div>
                </div>
                <div className="benefit-details-flex-alignment">
                  <div className="icon-alignment">
                    <img src={SliderIcon7} alt="SliderIcon7" />
                  </div>
                  <div className="benfite-heading-alignment">
                    <h4>Montagegarantie</h4>
                  </div>
                  <div className="benefit-details-alignment">
                    <span>Sichere und professionelle Montage garantiert.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
