import React, { useState, useEffect } from "react";
import "./moreOption.scss";
import Home from "../../assets/image/1.png";
import Speicher from "../../assets/image/Speicher.png";
import Emobility from "../../assets/image/Emobility.png";
import Warme from "../../assets/image/Warme.png";
import SpeicherWarme from "../../assets/image/SpeicherWarme.png";
import SpeicherEmobility from "../../assets/image/SpeicherEmobility.png";
import WarmeEmobil from "../../assets/image/GasEmobil.png";
import All from "../../assets/image/All.png";
import HomeMap from "../../assets/image/homemapImg.png";
import SliderSolar from "../sliderSolar";
import Page3 from "../../assets/image/Page3.png";
import { useAtom } from "jotai";
import { steperArray } from "../../helpers/Atom/StaperAtom";

export default function MoreOption(props) {
  const { setOpenTab, inputPowerCon, setInputPowerCon,openTab } = props;
  const [checkTab, setCheckTab] = useAtom(steperArray);
  const [checkbox, setCheckbox] = useState([]);
  const [image, setImage] = useState(Home);

  const onInputChang = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, moreOptions: "" });
    if (e.target.checked) {
      if (inputPowerCon.moreOptions) {
        let tmpArr = inputPowerCon.moreOptions;
        tmpArr.push(value);
        setInputPowerCon((preValue) => ({
          ...preValue,
          moreOptions: tmpArr,
        }));
      } else {
        let tmpArr = [value];
        setInputPowerCon((preValue) => ({
          ...preValue,
          moreOptions: tmpArr,
        }));
      }
    } else {
      let tmpArr = inputPowerCon.moreOptions;
      tmpArr = tmpArr?.filter((a) => a !== value);
      setInputPowerCon((preValue) => ({
        ...preValue,
        moreOptions: tmpArr,
      }));
    }
  };

  const [check, setcheck] = useState(false);
  useEffect(() => {
    if (inputPowerCon?.moreOptions) {
      if (
        inputPowerCon?.moreOptions?.includes("Speicher") &&
        inputPowerCon?.moreOptions?.includes("Warme") &&
        inputPowerCon?.moreOptions?.includes("EMobility")
      ) {
        // console.log("all");
        setImage(All);
        setcheck(true);
      }
      if (
        inputPowerCon?.moreOptions?.includes("Speicher") &&
        inputPowerCon?.moreOptions?.includes("Warme") &&
        !inputPowerCon?.moreOptions?.includes("EMobility")
      ) {
        // console.log("SW");
        setImage(SpeicherWarme);
        setcheck(false);
      }
      if (
        inputPowerCon?.moreOptions?.includes("Speicher") &&
        inputPowerCon?.moreOptions?.includes("EMobility") &&
        !inputPowerCon?.moreOptions?.includes("Warme")
      ) {
        // console.log("SE");
        setImage(SpeicherEmobility);
        setcheck(true);
      }
    }
    if (
      inputPowerCon?.moreOptions?.includes("Warme") &&
      inputPowerCon?.moreOptions?.includes("EMobility") &&
      !inputPowerCon?.moreOptions?.includes("Speicher")
    ) {
      // console.log("WE");
      setImage(WarmeEmobil);
      setcheck(true);
    }
    if (
      inputPowerCon?.moreOptions?.includes("Speicher") &&
      !inputPowerCon?.moreOptions?.includes("Warme") &&
      !inputPowerCon?.moreOptions?.includes("EMobility")
    ) {
      // console.log("S");
      setImage(Speicher);
      setcheck(false);
    }
    if (
      inputPowerCon?.moreOptions?.includes("Warme") &&
      !inputPowerCon?.moreOptions?.includes("Speicher") &&
      !inputPowerCon?.moreOptions?.includes("EMobility")
    ) {
      // console.log("W");
      setImage(Warme);
      setcheck(false);
    }
    if (
      inputPowerCon?.moreOptions?.includes("EMobility") &&
      !inputPowerCon?.moreOptions?.includes("Warme") &&
      !inputPowerCon?.moreOptions?.includes("Speicher")
    ) {
      // console.log("E");
      setImage(Emobility);
      setcheck(true);
    }
    if (
      !inputPowerCon?.moreOptions?.includes("EMobility") &&
      !inputPowerCon?.moreOptions?.includes("Warme") &&
      !inputPowerCon?.moreOptions?.includes("Speicher")
    ) {
      // console.log("none");
      setImage(Home);
      setcheck(false);
    }
  }, [inputPowerCon]);

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    if (check && !inputPowerCon.KM) {
      err.KM = "*  Bitte überprüfe deine Eingabe.";
      formIsValid = false;
    }
    if (!inputPowerCon?.moreOptions || !inputPowerCon?.moreOptions.length) {
      err.moreOptions = "*  Bitte überprüfe deine Eingabe.";
      formIsValid = false;
    }
    setErrors(err);
    return formIsValid;
  };

  const onInputChangKM = (e) => {
    const { name, value } = e.target;
    if (name === "KM") {
      let val = value.replace(/[^0-9]/g, "");
      setInputPowerCon({ ...inputPowerCon, [name]: val });
    }
    setErrors({ ...errors, [name]: "" });
  };
  const handleSubmit = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (validateForm()) {
      localStorage.setItem("solar", JSON.stringify(inputPowerCon));
      setOpenTab("E");
    }
  };
  // console.log("checkbox", checkbox);
  const handlechangetab=()=>{
    setOpenTab("B");
    setCheckTab(checkTab.filter((data)=>data!=openTab))
  }
  return (
    <div className="more-option-content-left-alignment">
      <div className="grid">
        <div className="grid-items">
          <div className="more-option-content-alignment">
            <div className="more-option-content-heading">
              <h1>Weitere Optionen</h1>
              <p>Neben der reinen PV-Anlage lohnt es sich weitere Komponenten auszuwählen. Generell bieten wir eine individuelle Rund-Um-Lösung zugeschnitten auf das Lastprofil des Verbrauchers.</p>
            </div>
            <div className="error-alignment">
              <span>{errors?.moreOptions}</span>
            </div>
            <div className="more-option-content-details-alignment">
              <div className="more-option-checkbox-alignment">
                <div className="more-option-select-alignment">
                  <div className="check-box-alignment">
                    <input
                      type="checkbox"
                      name="Speicher"
                      value="Speicher"
                      id="Speicher"
                      checked={inputPowerCon?.moreOptions?.includes("Speicher")}
                      onChange={(e) => onInputChang(e)}
                      // checked
                    />
                    <label for="Speicher">Speicher</label>


                  </div>
                    <div className="checkbox-input-alignment">
                      <i class="fa-solid fa-circle-exclamation"></i>

                      <div className="more-option-input-tooltip-details">
                        <span>
                          Ein Stromspeicher kann die Effizienz der Solaranlage verbessern. Du kannst mehr vom selbstproduzierten Strom nutzen.
                        </span>
                      </div>
                    </div>

                </div>
                <div className="more-option-select-alignment">
                  <div className="check-box-alignment">
                    <input
                      type="checkbox"
                      name="Warme"
                      value="Warme"
                      id="Warme"
                      checked={inputPowerCon?.moreOptions?.includes("Warme")}
                      onChange={(e) => onInputChang(e)}
                    />
                    <label for="Warme">Wärme</label>

                    <div className="checkbox-input-alignment">
                      <i class="fa-solid fa-circle-exclamation"></i>

                      <div className="more-option-input-tooltip-details warmey-tooltips">
                        <span>
                          Ist bereits eine Wärmepumpe vorhanden oder möchtest du eine haben, nehmen wir diese mit in die Planung auf.
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
                <div className="more-option-select-alignment">
                  <div className="check-box-alignment">
                    <input
                      type="checkbox"
                      name="EMobility"
                      value="EMobility"
                      id="EMobility"
                      checked={inputPowerCon?.moreOptions?.includes(
                        "EMobility"
                      )}
                      onChange={(e) => onInputChang(e)}
                    />
                    <label for="EMobility">E-Mobility</label>

                    <div className="checkbox-input-alignment">
                      <i class="fa-solid fa-circle-exclamation"></i>

                      <div className="more-option-input-tooltip-details e-mobility-tooltips">
                        <span>
                          Ein E-Auto kann den Verbrauch erheblich verändern und sollte bei der Planung der Anlagengröße mitberücksichtigt werden. Wir nehmen hier einen Durchschnittsverbrauch von 18 kWh je 100 km an. Bitte gib uns hier deine jährlichen geplanten Kilometer mit dem E-Auto an.
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {check ? (
                  <div className="two-input-grid-items">
                    <div className="input">
                      {/* <label>Dein aktueller Strombedarf im Jahr</label> */}
                      <div className="input-relative">
                        <input
                          type="text"
                          placeholder="10000"
                          name="KM"
                          value={inputPowerCon?.KM}
                          onChange={(e) => onInputChangKM(e)}
                        />
                        <div className="icon-alignment">
                          <span>km/Jahr</span>
                        </div>
                      </div>
                    </div>
                    <div className="error-alignment">
                      <span>{errors?.KM}</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="more-option-img-alignment">
                <img src={image} alt="HomeMap" />
              </div>
            </div>

            <div className="more-option-button-alignment">
              <div className="more-option-button-grid">
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
        <div className="grid-items">
          <div className="main-image-style">
            <img src={Page3} alt="Page3" />
            <SliderSolar />
          </div>
        </div>
      </div>
    </div>
  );
}
