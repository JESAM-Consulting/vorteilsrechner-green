import React, { useCallback, useState, useEffect } from "react";
import "./rootArea.scss";
import Root1 from "../../assets/image/root1.svg";
import Root2 from "../../assets/image/root2.svg";
import Root3 from "../../assets/image/root3.svg";
import Root4 from "../../assets/image/root4.svg";
import root1White from "../../assets/image/root1White.svg";
import roof2orange from "../../assets/image/roof2orange.svg";
import roof3white from "../../assets/image/roof3white.svg";
import roof4white from "../../assets/image/roof4white.svg";
import Compasss from "../../assets/image/compass.png";
import N from "../../assets/image/N.svg";
import NO from "../../assets/image/N-O.svg";
import O from "../../assets/image/O.svg";
import SO from "../../assets/image/S-O.svg";
import S from "../../assets/image/S.svg";
import SW from "../../assets/image/S-W.svg";
import W from "../../assets/image/W.svg";
import NW from "../../assets/image/N-W.svg";

import btn16 from "../../assets/image/d1.svg";
import btn9 from "../../assets/image/d2.svg";
import btn15 from "../../assets/image/d3.svg";
import btn10 from "../../assets/image/d4.svg";
import btn11 from "../../assets/image/d5.svg";
import btn14 from "../../assets/image/d6.svg";

import btn13 from "../../assets/image/d7.svg";
import btn12 from "../../assets/image/d8.svg";

import SliderSolar from "../sliderSolar";
import SideImg from "../../assets/image/Page2.png";
// import { usePlacesWidget } from "react-google-autocomplete";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Geocode from "react-geocode";
import { useAtom } from "jotai";
import { locationData, steperArray } from "../../helpers/Atom/StaperAtom";
import CompassRoundImg from "../../assets/image/new-round.svg";
import Range0 from "../../assets/image/0.svg";
import Range10 from "../../assets/image/8.svg";
import Range20 from "../../assets/image/9.svg";
import Range30 from "../../assets/image/7.svg";
import Range40 from "../../assets/image/6.svg";
import Range50 from "../../assets/image/5.svg";
import Range60 from "../../assets/image/4.svg";
import Range70 from "../../assets/image/3.svg";
import Range90 from "../../assets/image/1.svg";
import Range80 from "../../assets/image/2.svg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RoofChart from "./Chart";
import interact from "interactjs";

// import { AddressAutofill } from "@mapbox/search-js-react";
Geocode.setApiKey("AIzaSyBwyQ2fI1UgcPSJJ8HuYLhVQRFHYpB0iRE");
Geocode.enableDebug();

export default function RootArea(props) {
  const { setOpenTab, inputPowerCon, setInputPowerCon, openTab } = props;
  const items = JSON.parse(localStorage.getItem("solar"));
  const [checkTab, setCheckTab] = useAtom(steperArray);

  const [dropdownHidden1, setDropdownHidden1] = useState(false);
  const [angleValue, setAngleValue] = useState();
  const [errors, setErrors] = useState({});
  const [locationInfo, setLocationInfo] = useAtom(locationData);
  const [angleData, setAngleData] = useState(270);
  const [value, setValue] = useState(items.location);
  const [dropdowncompass, setdropdowncompass] = useState(false);
  const [dropdownRange, setdropdownRange] = useState(false);

  // const [animDirection, setAnimDirection] = useState({ direction: "" });
  const [rotationalDir, setRotationalDir] = useState("Süd");
  const [roofPitch, setRoofPitch] = useState("90");
  const [isImageLoading, setIsImageLoading] = useState(false);

  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } = useGoogle({
    apiKey: "AIzaSyBwyQ2fI1UgcPSJJ8HuYLhVQRFHYpB0iRE",
  });
  const getLatLongFromAddress = async (Address) => {
    setInputPowerCon({ ...inputPowerCon, location: Address });
    setValue(Address);
    let addressRes = await Geocode.fromAddress(Address)
      .then((res) => {
        // console.log("addressRes", res);
        setLocationInfo(res.results);
        localStorage.setItem("loc", JSON.stringify(res.results[0].geometry.location));
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsImageLoading(true);
    }, 500);
  }, []);

  // ON CHANGE EVENT
  const onInputChang = (e) => {
    const { name, value } = e.target;
    if (name === "areaofRoof") {
      let val = value.replace(/[^0-9].[^0-9]/g, "");
      setInputPowerCon({ ...inputPowerCon, [name]: val });
    } else {
      setInputPowerCon({ ...inputPowerCon, [name]: value });
    }
    if (name === "pincode") {
      setInputPowerCon({ ...inputPowerCon, [name]: value });
    }
    setErrors({ ...errors, [name]: "" });
  };
  const handlesetroofpitch = (pitch) => {
    setInputPowerCon((preval) => ({ ...preval, pitch: pitch }));
    // setAnimDirection({ ...animDirection, direction: direction });
    setRoofPitch(pitch);
    // setTimeout(() => {
    //   setRoofPitch("")
    // }, 500);
    // setErrors({ ...errors, rooftype: "" });
  };
  const handleSetRoofType = (rooftype) => {
    if (rooftype === "Flachdach") {
      setInputPowerCon({ ...inputPowerCon, pitch: "0", rooftype: rooftype });
    }
    if (rooftype === "Satteldach") {
      setInputPowerCon((preval) => ({
        ...preval,
        pitch: "40",
        rooftype: rooftype,
      }));
    }
    if (rooftype === "Pultdach") {
      setInputPowerCon((preval) => ({
        ...preval,
        pitch: "30",
        rooftype: rooftype,
      }));
    } else {
      setInputPowerCon((preval) => ({ ...preval, rooftype: rooftype }));
    }
    setErrors({ ...errors, rooftype: "" });
  };

  const handlesetDirection = (direction, rotate) => {
    setAngleData(rotate);
    setInputPowerCon({ ...inputPowerCon, direction: direction });
    // setAnimDirection({ ...animDirection, direction: direction });
    setRotationalDir(direction);

    // setErrors({ ...errors, rooftype: "" });
  };
  useEffect(() => {
    setInputPowerCon({ ...inputPowerCon, direction: rotationalDir });
  }, [rotationalDir]);

  const [compassImg, setCompassImg] = useState(Compasss);
  useEffect(() => {
    if (inputPowerCon.direction === "Norden") {
      setCompassImg(N);
    }
    if (inputPowerCon.direction === "Nord-Ost") {
      setCompassImg(NO);
    }
    if (inputPowerCon.direction === "Ost") {
      setCompassImg(O);
    }
    if (inputPowerCon.direction === "Süd-Ost") {
      setCompassImg(SO);
    }
    if (inputPowerCon.direction === "Süd") {
      setCompassImg(S);
    }
    if (inputPowerCon.direction === "Süd-West") {
      setCompassImg(SW);
    }
    if (inputPowerCon.direction === "West") {
      setCompassImg(W);
    }
    if (inputPowerCon.direction === "Nord-West") {
      setCompassImg(NW);
    }
    if (inputPowerCon.direction === "NNO") {
      setCompassImg(btn9);
    }
    if (inputPowerCon.direction === "ONO") {
      setCompassImg(btn10);
    }
    if (inputPowerCon.direction === "OSO") {
      setCompassImg(btn11);
    }
    if (inputPowerCon.direction === "SSO") {
      setCompassImg(btn12);
    }
    if (inputPowerCon.direction === "SSW") {
      setCompassImg(btn13);
    }
    if (inputPowerCon.direction === "WSW") {
      setCompassImg(btn14);
    }
    if (inputPowerCon.direction === "WNW") {
      setCompassImg(btn15);
    }
    if (inputPowerCon.direction === "NNW") {
      setCompassImg(btn16);
    }
  }, [inputPowerCon]);

  const [ptichImg, setPitchImg] = useState(Range90);
  useEffect(() => {
    if (inputPowerCon.pitch === "90") {
      setPitchImg(Range90);
    }
    if (inputPowerCon.pitch === "80") {
      setPitchImg(Range80);
    }
    if (inputPowerCon.pitch === "70") {
      setPitchImg(Range70);
    }
    if (inputPowerCon.pitch === "60") {
      setPitchImg(Range60);
    }
    if (inputPowerCon.pitch === "50") {
      setPitchImg(Range50);
    }
    if (inputPowerCon.pitch === "40") {
      setPitchImg(Range40);
    }
    if (inputPowerCon.pitch === "30") {
      setPitchImg(Range30);
    }
    if (inputPowerCon.pitch === "20") {
      setPitchImg(Range20);
    }
    if (inputPowerCon.pitch === "10") {
      setPitchImg(Range10);
    }
    if (inputPowerCon.pitch === "0") {
      setPitchImg(Range0);
    }
  }, [inputPowerCon.rooftype, inputPowerCon.pitch]);

  // FORM VALIDATION FUNCTION...
  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    if (!value) {
      err.location = "*Bitte überprüfe deine Eingabe.";
      formIsValid = false;
    }
    if (!inputPowerCon.roofArea) {
      if (!inputPowerCon.areaofRoof) {
        err.areaofRoof = "* Bitte überprüfe deine Eingabe.";
        formIsValid = false;
      }
      // if (!inputPowerCon.width) {
      //   err.width = "*Bitte überprüfe deine Eingabe.";
      //   formIsValid = false;
      // }
    }
    if (!inputPowerCon.rooftype) {
      err.rooftype = "*Bitte überprüfe deine Eingabe.";
      formIsValid = false;
    }
    if (!inputPowerCon.pincode) {
      err.pincode = "* Bitte überprüfe deine Eingabe.";
      formIsValid = false;
    }
    if (!inputPowerCon.pincode < "01000" && inputPowerCon.pincode > 89999) {
      err.pincode = "* Bitte überprüfe deine Eingabe.";
      formIsValid = false;
    }
    // console.log("inputPowerCon.pincode.length", inputPowerCon.pincode.length > 5 || inputPowerCon.pincode.length < 5);
    if (inputPowerCon.pincode.length < 5 || inputPowerCon.pincode.length > 5) {
      err.pincode = "*Bitte überprüfe deine Eingabe.";
      formIsValid = false;
    }

    setErrors(err);
    return formIsValid;
  };

  // STORE DATA IN LOCAL STORAGE
  const handleSubmit = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (validateForm()) {
      setInputPowerCon({ ...inputPowerCon, location: value });
      localStorage.setItem("solar", JSON.stringify(inputPowerCon));
      setOpenTab("D");

      // if (!inputPowerCon.length || !inputPowerCon.width || !inputPowerCon.roofArea) {
      //   setOpenTab("C");
      // } else {
      // setOpenTab("D");
      // }
    }
  };

  const handleSubmitMap = () => {
    localStorage.setItem("solar", JSON.stringify(inputPowerCon));
    setOpenTab("C");
  };

  // const handleRetrieve = useCallback((res) => {
  //   console.log("res", res.features[0]?.geometry?.coordinates);
  //   setLocationInfo(res.features[0]?.geometry?.coordinates);
  //   localStorage.setItem("loc", JSON.stringify(res.features[0]?.geometry?.coordinates));
  //   // setFeature(feature);
  //   // setShowMinimap(true);
  //   // setShowFormExpanded(true);
  // }, []);
  // const [angleData, setAngleData] = useState(false);
  // const handleMouseDown = (event) => {
  //   console.log("eeeeee", event);

  //   setAngleData(true);
  //   const element = event.target;
  //   const rect = element.getBoundingClientRect();
  //   // store the center as the element has css `transform-origin: center center`
  //   element.dataset.centerX = rect.left + rect.width / 2;
  //   element.dataset.centerY = rect.top + rect.height / 2;
  //   // get the angle of the element when the drag starts
  //   element.dataset.angle = getDragAngle(event);
  // };
  // const handleMouseMove = (event) => {
  //   var element = event.target;

  //   var angle = getDragAngle(event).toFixed(2);
  //   // update transform style on dragmove
  //   console.log("angle", radToDeg(angle));
  //   element.style.transform = "rotate(" + radToDeg(angle) + "deg" + ")";
  // };
  // const handleMouseEnd = (event) => {
  //   const element = event.target;
  //   // save the angle on dragend
  //   var angle = getDragAngle(event).toFixed(2);
  //   var angleData = radToDeg(angle);
  //   setAngleData(false);
  // };

  interact(".drag-rotate").draggable({
    onstart: function (event) {
      const element = event.target;
      const rect = element.getBoundingClientRect();
      // store the center as the element has css `transform-origin: center center`
      element.dataset.centerX = rect.left + rect.width / 2;
      element.dataset.centerY = rect.top + rect.height / 2;
      // get the angle of the element when the drag starts
      element.dataset.angle = getDragAngle(event);
    },
    onmove: function (event) {
      var element = event.target;
      var angle = getDragAngle(event).toFixed(2);
      var angleData = radToDeg(angle) || 180;
      // update transform style on dragmove

      element.style.transform = "rotate(" + angleData + "deg" + ")";
    },
    onend: function (event) {
      const element = event.target;
      var angle = getDragAngle(event).toFixed(2);
      var angleData = radToDeg(angle);

      if (angleData < 11.25 && angleData > 0) {
        setDeg(element, 0, "West");
      } else if (angleData < 0 && angleData > -11.25) {
        setDeg(element, 0, "West");
      } else if (angleData > 11.25 && angleData < 33.75) {
        setDeg(element, 22.5, "WNW");
      } else if (angleData > 33.75 && angleData < 56.25) {
        setDeg(element, 45, "Nord-West");
      } else if (angleData > 56.25 && angleData < 78.75) {
        setDeg(element, 67.5, "NNW");
      } else if (angleData > 78.75 && angleData < 101.15) {
        setDeg(element, 90, "Norden");
      } else if (angleData > 101.15 && angleData < 123.75) {
        setDeg(element, 112.5, "NNO");
      } else if (angleData > 123.75 && angleData < 146.25) {
        setDeg(element, 135, "Nord-Ost");
      } else if (angleData > 146.25 && angleData < 168.75) {
        setDeg(element, 157.5, "ONO");
      } else if (angleData < -11.25 && angleData > -33.75) {
        setDeg(element, -22.5, "WSW");
      } else if (angleData < -33.75 && angleData > -56.25) {
        setDeg(element, -45, "Süd-West");
      } else if (angleData < -56.25 && angleData > -78.75) {
        setDeg(element, -67.5, "SSW");
      } else if (angleData < -78.75 && angleData > -101.15) {
        setDeg(element, -90, "Süd");
      } else if (angleData < -101.15 && angleData > -123.75) {
        setDeg(element, -112.5, "SSO");
      } else if (angleData < -123.75 && angleData > -146.25) {
        setDeg(element, -135, "Süd-Ost");
      } else if (angleData < -146.25 && angleData > -168.75) {
        setDeg(element, -157.5, "OSO");
      } else if (angleData > 168.75 && angleData < 180) {
        setDeg(element, 180, "Ost");
      } else if (angleData < -168.75 && angleData > -180) {
        setDeg(element, -180, "Ost");
      }
    },
  });
  useEffect(() => { });
  function setDeg(element, value, direction) {
    element.style.transform = "rotate(" + value + "deg" + ")";

    // setAnimDirection({ ...animDirection, direction: direction });
    setRotationalDir(direction);
  }
  function radToDeg(rad) {
    return rad * (180.0 / Math.PI);
  }
  function getDragAngle(event) {
    var element = event.target;
    var startAngle = parseFloat(element.dataset.angle) || 0;
    var center = {
      x: parseFloat(element.dataset.centerX) || 0,
      y: parseFloat(element.dataset.centerY) || 0,
    };
    var angle = Math.atan2(center.y - event.clientY, center.x - event.clientX);
    return angle - startAngle;
  }

  const handlechangetab = () => {
    setOpenTab("A");
    setCheckTab(checkTab.filter((data) => data != openTab))
  }
  return (
    <div className="rootArea-content-left-alignment">
      <div className="grid">
        <div className="grid-items">
          <div className="second-steper-content-alignment">
            <div className="second-steper-content-heading">
              <h1>Deine Dachfläche</h1>
            </div>

            <div className="second-steper-form-alignment">
              <div className="two-grid-input-alignment">
                <div>
                  <div className="input">
                    <div className="flex-alignment">
                      <label>Standort</label>
                      <div className="input-alignment2">
                        <i class="fa-solid fa-circle-exclamation"></i>

                        <div className="input-tooltip-details">
                          <span>Gib die Adresse des Objektes an, wo die Solaranlage installiert werden soll.</span>
                        </div>
                      </div>
                    </div>
                    <div className="input-relative">
                      <input
                        name="location"
                        value={value}
                        autoComplete="address-line1"
                        placeholder="Straße, Hausnummer, PLZ"
                        onChange={(evt) => {
                          getPlacePredictions({ input: evt.target.value });
                          setValue(evt.target.value);
                          setDropdownHidden1(true);
                          setErrors({ ...errors, location: "" });
                        }}
                      />

                      {!isPlacePredictionsLoading && (
                        <div className={dropdownHidden1 ? "input-dropdown input-dropdown-show" : "input-dropdown input-dropdown-hidden"}>
                          <div className="input-dropdown-design">
                            {placePredictions.map((item) => {
                              return (
                                <>
                                  <span
                                    onClick={() => {
                                      getLatLongFromAddress(item.description);
                                      setDropdownHidden1(false);
                                    }}
                                  >
                                    {item.description}
                                  </span>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="error-alignment">
                    <span>{errors?.location}</span>
                  </div>
                </div>

                <div>
                  <div className="input">
                    <div className="flex-alignment">
                      <label>Postleitzahl</label>
                      <div className="input-alignment2">
                        <i class="fa-solid fa-circle-exclamation"></i>

                        <div className="input-tooltip-details second-tooltip">
                          <span>Gib die Postleitzahl des Objektes an, wo die Solaranlage installiert werden soll.</span>
                        </div>
                      </div>
                    </div>
                    <div className="input-relative">
                      <input
                        type="text"
                        name="pincode"
                        value={inputPowerCon.pincode}
                        placeholder="
                        Postleitzahl"
                        onChange={(e) => {
                          onInputChang(e);
                        }}
                      />
                      <div className="error-alignment">
                        <span>{errors?.pincode}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="third-input-grid-alignment">
                {!inputPowerCon.roofArea ? (
                  <>
                    <div>
                      <div className="input">
                        <div className="flex-alignment">
                          <label>Bitte geben Sie Ihre Dachfläche ein</label>
                          <div className="input-alignment2">
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <div className="input-tooltip-details dachflache-tooltips">
                              <span>Die belegbare Fläche des Daches ergibt sich als Produkt aus der Länge und Breite.</span>
                            </div>
                          </div>
                        </div>
                        <div className="input-relative">
                          <input
                            type="text"
                            // placeholder="150.07"
                            name="areaofRoof"
                            className={errors?.areaofRoof ? "error-input" : ""}
                            value={inputPowerCon?.areaofRoof}
                            onChange={(e) => onInputChang(e)}
                          />

                          <div className="icon-alignment no-curser">
                            <span>
                              Dachfläche (m<sup>2</sup>){" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="error-alignment">
                        <span>{errors?.areaofRoof}</span>
                      </div>
                    </div>
                    <div>
                      {/* <div className="input">
                        <div className="flex-alignment">
                          <label>Dachbreite</label>
                          <div className="input-alignment2">
                            <i class="fa-solid fa-circle-exclamation"></i>
                          </div>
                        </div>
                        <div className="input-relative">
                          <input
                            type="text"
                            // placeholder="200.70"
                            name="width"
                            className={errors?.width ? "error-input" : ""}
                            value={inputPowerCon?.width}
                            onChange={(e) => onInputChang(e)}
                          />

                          <div className="icon-alignment">
                            <span>Meter</span>
                          </div>
                        </div>
                      </div> */}
                      <div className="error-alignment">
                        <span style={{ color: "red" }}>{errors?.width}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="input">
                    <div className="flex-alignment">
                      <label>Dachfläche</label>
                      <div className="input-alignment2">
                        <i class="fa-solid fa-circle-exclamation"></i>
                      </div>
                    </div>
                    <div className="input-relative">
                      <input disabled={true} type="text" value={inputPowerCon.roofArea} />

                      <div className="icon-alignment">
                        <span>
                          Dachfläche (m<sup>2</sup>){" "}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="button-alignment">
                  <button onClick={() => handleSubmitMap()}>
                    Via Google Maps <br />
                    ermitteln
                  </button>
                </div>
              </div>

              <div className="two-grid-input-alignment  compass-alignment">
                <div className="chart-option-alignment">
                  <div className="input">
                    <div className="flex-alignment">
                      <label>Dachart</label>
                      <div className="input-alignment2">
                        <i class="fa-solid fa-circle-exclamation"></i>

                        <div className="input-tooltip-details dcharts-tooltips">
                          <span>Wähle die Dachart, welche dem größten zu belegenden Dach am ehestens entspricht.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="child-input-grid-alignment">
                    <div
                      className={inputPowerCon?.rooftype === "Flachdach" ? "roots-option-alignment active" : "roots-option-alignment "}
                      onClick={() => handleSetRoofType("Flachdach")}
                    >
                      <img src={inputPowerCon?.rooftype === "Flachdach" ? root1White : Root1} alt="Root1" />

                      <div className="roots-option-name-alignment">
                        <p>Flachdach</p>
                      </div>
                    </div>
                    <div
                      className={inputPowerCon?.rooftype === "Satteldach" ? "roots-option-alignment active" : "roots-option-alignment "}
                      onClick={() => handleSetRoofType("Satteldach")}
                    >
                      <img src={inputPowerCon?.rooftype === "Satteldach" ? Root2 : roof2orange} alt="Root2" />

                      <div className="roots-option-name-alignment">
                        <p>Satteldach</p>
                      </div>
                    </div>
                    <div
                      className={inputPowerCon?.rooftype === "Pultdach" ? "roots-option-alignment active" : "roots-option-alignment "}
                      onClick={() => handleSetRoofType("Pultdach")}
                    >
                      <img src={inputPowerCon?.rooftype === "Pultdach" ? roof3white : Root3} alt="Root3" />

                      <div className="roots-option-name-alignment">
                        <p>Pultdach</p>
                      </div>
                    </div>
                    <div
                      className={inputPowerCon?.rooftype === "Andere" ? "roots-option-alignment active" : "roots-option-alignment "}
                      onClick={() => handleSetRoofType("Andere")}
                    >
                      <img src={inputPowerCon?.rooftype === "Andere" ? roof4white : Root4} alt="Root4" />

                      <div className="roots-option-name-alignment">
                        <p>Andere</p>
                      </div>
                    </div>
                  </div>
                  <div className="error-alignment">
                    <span>{errors?.rooftype}</span>
                  </div>
                </div>

                <div className="compass-details-section">
                  <div className="child-two-grid-input-alignment">
                    <div className="child-two-grid-input-alignment-first-items1">
                      <div className="input">
                        <div className="flex-alignment chart-alignment">
                          <label>Dachausrichtung</label>
                          <div className="input-alignment2">
                            <i class="fa-solid fa-circle-exclamation"></i>

                            <div className="input-tooltip-details dcharts-tooltips">
                              <span>Wähle die Ausrichtung, die dem größten zu belegenden Dach am ehestens entspricht.</span>
                            </div>
                          </div>

                          <div className="input-relative mobile-view-dropdown" onClick={() => setdropdowncompass(!dropdowncompass)}>
                            <input
                              type="text"
                              // placeholder="S"
                              value={inputPowerCon.direction}
                            // onChange={(e) =>console.log(e.target.value,"****")}
                            />

                            <div className={dropdowncompass ? "input-dropdown input-dropdown-show" : "input-dropdown input-dropdown-hidden"}>
                              <div className="input-dropdown-design">
                                <span onClick={() => handlesetDirection("Süd", 270)}>S</span>
                                <span onClick={() => handlesetDirection("Süd-West", 315)}>SW</span>
                                <span onClick={() => handlesetDirection("West", 0)}>W</span>
                                <span onClick={() => handlesetDirection("Nord-West", 45)}>NW</span>
                                <span onClick={() => handlesetDirection("Nord", 90)}>N</span>
                                <span onClick={() => handlesetDirection("Nord-Ost", 135)}>NO</span>
                                <span onClick={() => handlesetDirection("Ost", 180)}>O</span>
                                <span onClick={() => handlesetDirection("Süd-Ost", 225)}>SO</span>

                                {/*<span onClick={() => handlesetDirection("Süd", 270)}>S</span>
                                 <span onClick={() => handlesetDirection("NNO", 112.25)}>NNO</span>
                                <span onClick={() => handlesetDirection("ONO", 157.5)}>ONO</span>
                                <span onClick={() => handlesetDirection("OSO", 202.75)}>OSO</span>
                                <span onClick={() => handlesetDirection("SSO", 248)}>SSO</span>
                                <span onClick={() => handlesetDirection("SSW", 293.25)}>SSW</span>
                                <span onClick={() => handlesetDirection("WSW", 338.25)}>WSW</span>
                                <span onClick={() => handlesetDirection("WNW", 22.35)}>WNW</span>
                                <span onClick={() => handlesetDirection("NNW", 67.25)}>NNW</span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {isImageLoading ? (
                        <div className="compaas-relative-alignment">
                          <div className="compassImg-alignment">
                            <div className="compassImg-round-alignment">
                              <img style={{ pointerEvents: "none" }} src={CompassRoundImg} alt="CompassRoundImg" />

                              <div
                                className="child-img-alignment"

                              // onMouseDown={(e) => handleMouseDown(e)}
                              // onMouseMove={(e) => {
                              //   angleData && handleMouseMove(e);
                              // }}
                              // onMouseUp={(e) => handleMouseEnd(e)}
                              >
                                <img
                                  // style={{ pointerEvents: "none" }}
                                  style={{
                                    transform: `rotate(${angleData}deg)`,
                                  }}
                                  src={W}
                                  alt="Compass"
                                  className="drag-rotate"

                                // className={rotationalDir === inputPowerCon.direction ? "animate__animated animate__rotateIn" : ""}
                                // data-wow-offset="140"
                                />
                              </div>
                            </div>
                            <div className="compass_alignment">
                              <button
                                className={inputPowerCon.direction === "Norden" ? "btn-1 active" : "btn-1"}
                                // onClick={() => setAngleData(0)}
                                onClick={() => handlesetDirection("Nord", 90)}
                              >
                                N
                              </button>
                              <button
                                className={inputPowerCon.direction === "Nord-Ost" ? "btn-2 active" : "btn-2"}
                                onClick={() => handlesetDirection("Nord-Ost", 135)}
                              >
                                NO
                              </button>
                              <button
                                className={inputPowerCon.direction === "Ost" ? "btn-3 active" : "btn-3"}
                                onClick={() => handlesetDirection("Ost", 180)}
                              >
                                O
                              </button>
                              <button
                                className={inputPowerCon.direction === "Süd-Ost" ? "btn-4 active" : "btn-4"}
                                onClick={() => handlesetDirection("Süd-Ost", 225)}
                              >
                                SO
                              </button>
                              <button
                                className={inputPowerCon.direction === "Süd" ? "btn-5 active" : "btn-5"}
                                onClick={() => handlesetDirection("Süd", 270)}
                              >
                                S
                              </button>
                              <button
                                className={inputPowerCon.direction === "Süd-West" ? "btn-6 active" : "btn-6"}
                                onClick={() => handlesetDirection("Süd-West", 315)}
                              >
                                SW
                              </button>
                              <button
                                className={inputPowerCon.direction === "West" ? "btn-7 active" : "btn-7"}
                                onClick={() => handlesetDirection("West", 0)}
                              >
                                W
                              </button>
                              <button
                                className={inputPowerCon.direction === "Nord-West" ? "btn-8 active" : "btn-8"}
                                onClick={() => handlesetDirection("Nord-West", 45)}
                              >
                                NW
                              </button>
                              <button
                                className="btn-9 box-alignment"
                                // className={inputPowerCon.direction === "btn9" ? "btn-9 active" : "btn-9"}
                                onClick={() => handlesetDirection("NNO", 112.25)}
                              ></button>
                              <button
                                className="btn-10 box-alignment"
                                // className={inputPowerCon.direction === "btn10" ? "btn-10 active" : "btn-10"}
                                onClick={() => handlesetDirection("ONO", 157.5)}
                              ></button>
                              <button
                                className="btn-11 box-alignment"
                                //  className={inputPowerCon.direction === "btn11" ? "btn-11 active" : "btn-11"}
                                onClick={() => handlesetDirection("OSO", 202.75)}
                              ></button>
                              <button
                                className="btn-12 box-alignment"
                                //  className={inputPowerCon.direction === "btn12" ? "btn-12 active" : "btn-12"}
                                onClick={() => handlesetDirection("SSO", 248)}
                              ></button>
                              <button
                                className="btn-13 box-alignment"
                                //  className={inputPowerCon.direction === "btn13" ? "btn-13 active" : "btn-13"}
                                onClick={() => handlesetDirection("SSW", 293.25)}
                              ></button>
                              <button
                                className="btn-14 box-alignment"
                                //  className={inputPowerCon.direction === "btn14" ? "btn-14 active" : "btn-14"}
                                onClick={() => handlesetDirection("WSW", 338.25)}
                              ></button>
                              <button
                                className="btn-15 box-alignment"
                                //  className={inputPowerCon.direction === "btn15" ? "btn-15 active" : "btn-15"}
                                onClick={() => handlesetDirection("WNW", 22.35)}
                              ></button>
                              <button
                                className="btn-16 box-alignment"
                                //  className={inputPowerCon.direction === "btn16" ? "btn-16 active" : "btn-16"}
                                onClick={() => handlesetDirection("NNW", 67.25)}
                              ></button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="skeleton-loader">
                          <Skeleton height={240} width={240} borderRadius={"50%"} />
                        </div>
                      )}
                    </div>
                    <div className="child-two-grid-input-alignment-first-items2">
                      <div className="input">
                        <div className="flex-alignment chart-alignment">
                          <label>Dachneigung</label>
                          <div className="input-alignment2">
                            <i class="fa-solid fa-circle-exclamation"></i>

                            <div className="input-tooltip-details dachneigung-tooltips">
                              <span>Sollte die konkrete Dachneigung nicht bekannt sein, nimm den bereits hinterlegten Standardwert.</span>
                            </div>
                          </div>

                          <div className="input-relative mobile-view-dropdown" onClick={() => setdropdownRange(!dropdownRange)}>
                            <input type="text" placeholder="0" value={inputPowerCon.pitch} />
                            <div className={dropdownRange ? "input-dropdown input-dropdown-show" : "input-dropdown input-dropdown-hidden"}>
                              <div className="input-dropdown-design">
                                <span onClick={() => handlesetroofpitch("0")}>0</span>
                                <span onClick={() => handlesetroofpitch("10")}>10</span>
                                <span onClick={() => handlesetroofpitch("20")}>20</span>
                                <span onClick={() => handlesetroofpitch("30")}>30</span>
                                <span onClick={() => handlesetroofpitch("40")}>40</span>
                                <span onClick={() => handlesetroofpitch("50")}>50</span>
                                <span onClick={() => handlesetroofpitch("60")}>60</span>
                                <span onClick={() => handlesetroofpitch("70")}>70</span>
                                <span onClick={() => handlesetroofpitch("80")}>80</span>
                                <span onClick={() => handlesetroofpitch("90")}>90</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 
                        <div className="compass-rangeBar-alignment">
                          <input type="range" />
                          <div className="range-area-number-alignment">
                            <span>90</span>
                            <span>80</span>
                            <span>70</span>
                            <span>60</span>
                            <span>50</span>
                            <span>40</span>
                            <span>30</span>
                            <span>20</span>
                            <span>10</span>
                            <span>0</span>
                          </div>
                        </div> */}

                        <div className="range-chart-alignment">
                          <div className="range-chart">
                            <img src={ptichImg} alt="Range90" />
                            {/* <RoofChart
                              setInputPowerCon={setInputPowerCon}
                              inputPowerCon={inputPowerCon}
                            /> */}
                          </div>

                          <div className="range-number-alignment">
                            <button onClick={() => handlesetroofpitch("90")}>90</button>
                            <button onClick={() => handlesetroofpitch("80")}>80</button>
                            <button onClick={() => handlesetroofpitch("70")}>70</button>
                            <button onClick={() => handlesetroofpitch("60")}>60</button>
                            <button onClick={() => handlesetroofpitch("50")}>50</button>
                            <button onClick={() => handlesetroofpitch("40")}>40</button>
                            <button className="top-four-content-align" onClick={() => handlesetroofpitch("30")}>
                              30
                            </button>
                            <button className="top-five-content-align" onClick={() => handlesetroofpitch("20")}>
                              20
                            </button>
                            <button className="top-five-content-align" onClick={() => handlesetroofpitch("10")}>
                              10
                            </button>
                            <button className="o-content-align" onClick={() => handlesetroofpitch("0")}>
                              0
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="compass-button-alignment">
                    <div className="compass-button-grid">
                      <button
                        onClick={() => {
                          handlechangetab()

                        }}
                      >
                        Zurück
                      </button>
                      <button onClick={() => handleSubmit()}>Weiter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-items">
          <div className="main-image-style">
            <img src={SideImg} alt="SideImg" />
            <SliderSolar />
          </div>
        </div>
      </div>
    </div>
  );
}
