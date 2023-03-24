import React, { useEffect, useRef, useState } from "react";
import SunImg from "../../assets/image/sunImg.gif";
import SunCloseImg from "../../assets/image/sunCloseImg.png";
import SliderIcon1 from "../../assets/image/sliderIcon1.png";
import SliderIcon2 from "../../assets/image/sliderIcon2.png";
import SliderIcon3 from "../../assets/image/sliderIcon3.png";
import SliderIcon4 from "../../assets/image/sliderIcon4.png";
import DropdownIcon from "../../assets/Icons/dropdownIcon.png";
import SideImg from "../../assets/image/Page1.png";
import "./home.scss";
import SliderSolar from "../sliderSolar";
import MobilViewSteper from "../mobileViewSteper";
import useOnClickOutside from "./hook";

export default function Home(props) {
  const { setOpenTab, inputPowerCon, setInputPowerCon } = props;
  const [dropdownHidden1, setDropdownHidden1] = useState(false);
  const [dropdownHidden2, setDropdownHidden2] = useState(false);
  const [dropdownHidden3, setDropdownHidden3] = useState(false);

  let members = ["1", "2", "3", "4", "5", "6"];
  let currentEcPrice = [
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
  ];
  let KWH = [
    "2000",
    "3000",
    "4000",
    "5000",
    "6000",
    "7000",
    "8000",
    "9000",
    "10000",
  ];

  useEffect(() => {
    if (inputPowerCon.members === "1") {
      setInputPowerCon({ ...inputPowerCon, ["requirementPerYear"]: "2000" });
    }
    if (inputPowerCon.members === "2") {
      setInputPowerCon({ ...inputPowerCon, ["requirementPerYear"]: "3000" });
    }
    if (inputPowerCon.members === "3") {
      setInputPowerCon({ ...inputPowerCon, ["requirementPerYear"]: "4000" });
    }
    if (inputPowerCon.members === "4") {
      setInputPowerCon({ ...inputPowerCon, ["requirementPerYear"]: "5000" });
    }
    if (inputPowerCon.members === "5") {
      setInputPowerCon({ ...inputPowerCon, ["requirementPerYear"]: "6000" });
    }
    if (inputPowerCon.members === "6") {
      setInputPowerCon({ ...inputPowerCon, ["requirementPerYear"]: "7000" });
    } else if (inputPowerCon.members === "6") {
      setInputPowerCon({ ...inputPowerCon, ["requirementPerYear"]: "8000" });
    } else if (inputPowerCon.members === "6") {
      setInputPowerCon({ ...inputPowerCon, ["requirementPerYear"]: "9000" });
    } else if (inputPowerCon.members === "6") {
      setInputPowerCon({ ...inputPowerCon, ["requirementPerYear"]: "10000" });
    }

    setErrors({ ...errors, requirementPerYear: "" });
  }, [inputPowerCon?.members]);

  // useEffect(() => {
  //   if (inputPowerCon.requirementPerYear === "10000") {
  //     setInputPowerCon({ ...inputPowerCon, ["members"]: "6" });
  //   }
  //   if (inputPowerCon.requirementPerYear === "9000") {
  //     setInputPowerCon({ ...inputPowerCon, ["members"]: "6" });
  //   }
  //   if (inputPowerCon.requirementPerYear === "8000") {
  //     setInputPowerCon({ ...inputPowerCon, ["members"]: "6" });
  //   }
  //   if (inputPowerCon.requirementPerYear === "7000") {
  //     setInputPowerCon({ ...inputPowerCon, ["members"]: "6" });
  //   }
  //   if (inputPowerCon.requirementPerYear === "6000") {
  //     setInputPowerCon({ ...inputPowerCon, ["members"]: "5" });
  //   }
  //   if (inputPowerCon.requirementPerYear === "5000") {
  //     setInputPowerCon({ ...inputPowerCon, ["members"]: "4" });
  //   }
  //   if (inputPowerCon.requirementPerYear === "4000") {
  //     setInputPowerCon({ ...inputPowerCon, ["members"]: "3" });
  //   }
  //   if (inputPowerCon.requirementPerYear === "3000") {
  //     setInputPowerCon({ ...inputPowerCon, ["members"]: "2" });
  //   }
  //   if (inputPowerCon.requirementPerYear === "2000") {
  //     setInputPowerCon({ ...inputPowerCon, ["members"]: "1" });
  //   }
  // }, [inputPowerCon?.requirementPerYear]);

  // ON CHANGE EVENT
  const onInputChang = (e) => {
    const { name, value } = e.target;
    if (
      name === "requirementPerYear" ||
      name === "Monthlyprice" ||
      name === "members" ||
      name === "currntPrice"
    ) {
      let val = value.replace(/[^0-9]/g, " ");
      setInputPowerCon({ ...inputPowerCon, [name]: val });
    } else {
      setInputPowerCon({ ...inputPowerCon, [name]: value });
    }
    setErrors({ ...errors, [name]: "" });
  };
  const handleSetMember = (item) => {
    if (item === "1") {
      setInputPowerCon({ ...inputPowerCon, ["requirementPerYear"]: "3000" });
    }
    // console.log("item", typeof item);
    setInputPowerCon({ ...inputPowerCon, ["members"]: item });
    setDropdownHidden1(!dropdownHidden1);
    setErrors({ ...errors, ["members"]: "" });
  };
  const handleSetCurrentEcPrice = (item) => {
    setInputPowerCon({ ...inputPowerCon, ["currntPrice"]: item });
    setDropdownHidden2(!dropdownHidden2);
    setErrors({ ...errors, ["currntPrice"]: "" });
  };

  const handleSetKwh = (item) => {
    setInputPowerCon({ ...inputPowerCon, ["requirementPerYear"]: item });
    setDropdownHidden3(!dropdownHidden3);
    setErrors({ ...errors, ["requirementPerYear"]: "" });
  };

  // FORM VALIDATION FUNCTION...
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    if (!inputPowerCon || !inputPowerCon.members) {
      err.members = "* Bitte überprüfe deine Eingabe.";
      formIsValid = false;
    }
    if (!inputPowerCon || !inputPowerCon?.requirementPerYear) {
      err.requirementPerYear = "* Bitte überprüfe deine Eingabe.";
      formIsValid = false;
    }
    if (!inputPowerCon || !inputPowerCon?.currntPrice) {
      err.currntPrice = "* Bitte überprüfe deine Eingabe.";
      formIsValid = false;
    }
    if (!inputPowerCon || !inputPowerCon?.Monthlyprice) {
      err.Monthlyprice = "* Bitte überprüfe deine Eingabe.";
      formIsValid = false;
    }
    setErrors(err);
    return formIsValid;
  };

  // STORE DATA IN LOCAL STORAGE
  const handleSubmit = () => {
    if (validateForm()) {
      localStorage.setItem("solar", JSON.stringify(inputPowerCon));
      setOpenTab("B");

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const popupRef1 = useRef();
  const popupRef2 = useRef();
  const popupRef3 = useRef();
  useOnClickOutside(popupRef1, () => setDropdownHidden1(false));
  useOnClickOutside(popupRef2, () => setDropdownHidden2(false));
  useOnClickOutside(popupRef3, () => setDropdownHidden3(false));

  return (
    <>
      <div className="home-content-left-alignment">
        <div className="grid">
          <div className="grid-items">
            <div className="first-steper-content-alignment">
              <h1>Dein Stromverbrauch</h1>
              <div className="two-input-grid">
                <div className="two-input-grid-items">
                  <div className="input">
                    <div className="flex-alignment">
                      <label>
                        Wie viele Personen wohnen in deinem Haushalt?
                      </label>
                      <div className="input-alignment2">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <div className="input-tooltip-details">
                          <span>
                            Für die Berechnung deines Stromverbrauchs ist <br />{" "}
                            die Anzahl der Verbraucher ein wichtiger Faktor.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                    
                      className="input-relative"
                      onClick={() => setDropdownHidden1(!dropdownHidden1)}
                    >
                      <input
                        type="text"
                        placeholder="3"
                        name="members"
                        className={errors?.members ? "error-input" : ""}
                        value={inputPowerCon?.members}
                      // onChange={(e) => onInputChang(e)}
                      // onChange={() => setDropdownHidden1(false)}
                      />
                      <div className="icon-alignment">
                        <span>Anzahl</span>
                        {/* <i class="fa-solid fa-chevron-down"></i> */}

                        {/* <img src={DropdownIcon} alt="DropdownIcon" /> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      dropdownHidden1
                        ? "input-dropdown input-dropdown-show"
                        : "input-dropdown input-dropdown-hidden"
                    }
                  >
                    <div className="input-dropdown-design" ref={popupRef1}>
                      {members.map((item) => {
                        return (
                          <>
                            <span onClick={() => handleSetMember(item)}>
                              {item}
                            </span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="error-alignment">
                    <span>{errors?.members}</span>
                  </div>
                </div>
                <div className="two-input-grid-items">
                  <div className="input">
                    <div className="flex-alignment">
                      <label>Dein aktueller Strombedarf im Jahr</label>

                      <div className="input-alignment2">
                        <i class="fa-solid fa-circle-exclamation"></i>

                        <div className="input-tooltip-details third-tooltip">
                          <span>
                            Der Strombedarf im Jahr wird entsprechend der Personen im Haushalt als Durchschnittswert übernommen. Dieser kann entsprechend der Stromrechnung individuell angepasst werden.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="input-relative"
                      onClick={() => setDropdownHidden3(!dropdownHidden3)}
                    >
                      <input
                        type="text"
                        placeholder="4000"
                        name="requirementPerYear"
                        className={
                          errors?.requirementPerYear ? "error-input" : ""
                        }
                        value={inputPowerCon?.requirementPerYear}
                      // onChange={(e) => onInputChang(e)}
                      />
                      <div className="icon-alignment">
                        <span>kWh</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      dropdownHidden3
                        ? "input-dropdown input-dropdown-show"
                        : "input-dropdown input-dropdown-hidden"
                    }
                  >
                    <div className="input-dropdown-design" ref={popupRef3}>
                      {KWH.map((item) => {
                        return (
                          <>
                            <span onClick={() => handleSetKwh(item)}>
                              {item + "kWh"}{" "}
                            </span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="error-alignment">
                    <span>{errors?.requirementPerYear}</span>
                  </div>
                </div>
                <div className="two-input-grid-items">
                  <div className="input">
                    <div className="flex-alignment">
                      <label>Dein aktueller Strompreis inkl. MwSt.</label>
                      <div className="input-alignment2">
                        <i class="fa-solid fa-circle-exclamation"></i>

                        <div className="input-tooltip-details">
                          <span>
                            Diese Informationen können der Stromrechnung entnommen werden.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="input-relative"
                      onClick={() => setDropdownHidden2(!dropdownHidden2)}
                    >
                      <input
                        type="text"
                        placeholder="29 Cent/kWh"
                        name="currntPrice"
                        className={errors?.currntPrice ? "error-input" : ""}
                        value={
                          inputPowerCon?.currntPrice
                            ? inputPowerCon?.currntPrice + " "
                            : ""
                        }
                      // onChange={(e) => onInputChang(e)}
                      />
                      <div className="icon-alignment">
                        <span>Cent/kWh</span>
                        {/* <i class="fa-solid fa-chevron-down"></i> */}
                        {/* <img src={DropdownIcon} alt="DropdownIcon" /> */}
                      </div>
                    </div>
                    <div className="error-alignment">
                      <span>{errors?.currntPrice}</span>
                    </div>
                  </div>
                  <div
                    className={
                      dropdownHidden2
                        ? "input-dropdown input-dropdown-show"
                        : "input-dropdown input-dropdown-hidden"
                    }
                  >
                    <div className="input-dropdown-design" ref={popupRef2}>
                      {currentEcPrice.map((item) => {
                        return (
                          <>
                            <span onClick={() => handleSetCurrentEcPrice(item)}>
                              {item} Cent/kWh
                            </span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="two-input-grid-items">
                  <div className="input">
                    <div className="flex-alignment">
                      <label>
                        Deine aktuelle jährliche Grundgebühr inkl. MwSt.
                      </label>
                      <div className="input-alignment2">
                        <i class="fa-solid fa-circle-exclamation"></i>

                        <div className="input-tooltip-details second-tooltip">
                          <span>
                            {/* Du findest diese Informationen auf <br /> deiner
                            aktuellen Stromrechnung. */}
                            Diese Informationen können der Stromrechnung entnommen werden.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="input-relative">
                      <input
                        type="text"
                        placeholder="100"
                        name="Monthlyprice"
                        className={errors?.Monthlyprice ? "error-input" : ""}
                        value={inputPowerCon?.Monthlyprice}
                        onChange={(e) => onInputChang(e)}
                      />
                      <div className="icon-alignment">
                        <span>€</span>
                      </div>
                    </div>
                  </div>
                  <div className="error-alignment">
                    <span>{errors?.Monthlyprice}</span>
                  </div>
                </div>
              </div>
              <div className="right-side-button-alignment">
                <button onClick={() => handleSubmit()}>Weiter</button>
              </div>
            </div>
          </div>
          <div className="grid-items">
            <div className="main-image-style">
              <img src={SideImg} alt="SideImg" />
            </div>
            <SliderSolar />
          </div>
        </div>
      </div>
    </>
  );
}
