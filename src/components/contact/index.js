import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { ApiGet, ApiPost } from "../../helpers/API/ApiData";
import SliderSolar from "../sliderSolar";
import "./contact.scss";
import SideImg from "../../assets/image/Page5.jpg";
import axios from "axios";
import useOnClickOutside from "../home/hook";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { steperArray } from "../../helpers/Atom/StaperAtom";

export default function Contact(props) {
  const { setOpenTab, inputPowerCon, setInputPowerCon, openTab } = props;
  const [dropdownHidden1, setDropdownHidden1] = useState(false);
  const [checkTab, setCheckTab] = useAtom(steperArray);

  const [lodertrue, setLoader] = useState(false);
  let time = ["Morgens", "Mittags", "Nachmittags", "Abends", "Den ganzen Tag"];

  const popupRef = useRef();
  useOnClickOutside(popupRef, () => setDropdownHidden1(false));

  const onInputChangform = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      let val = value.replace(/[^0-9]/g, "");
      setInputPowerCon({ ...inputPowerCon, [name]: val });
    } else {
      setInputPowerCon({ ...inputPowerCon, [name]: value });
    }
    setErrors({ ...errors, [name]: "" });
  };

  const onInputChang = (e) => {
    const { name, value, checked } = e.target;
    // console.log("checkbox", value, checked);
    setInputPowerCon({ ...inputPowerCon, [value]: checked });
    setErrors({ ...errors, terms: "" });
  };

  const onInputChangAgreement = (e) => {
    const { name, value, checked } = e.target;
    // console.log("checkbox", value, checked);
    setInputPowerCon({ ...inputPowerCon, [value]: checked });
    setErrors({ ...errors, agreement: "" });
  };

  const regexEmail = /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i;

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    if (!inputPowerCon.username) {
      err.username = "* Bitte gib deinen Name an.";
      formIsValid = false;
    }
    if (!inputPowerCon?.time) {
      err.time = "* Bitte wähle deine Erreichbarkeit aus.";
      formIsValid = false;
    }
    if (!inputPowerCon?.phone) {
      err.phone = "*Bitte gib deine Telefonnummer an.";
      formIsValid = false;
    }
    // if (inputPowerCon?.phone?.length < 10) {
    //   err.phone = "* Bitte geben Telefonnummer  .";
    //   formIsValid = false;
    // }
    if (!inputPowerCon?.mail) {
      err.mail = "*Bitte gib deine Mailadresse an.";
      formIsValid = false;
    } else if (regexEmail.test(inputPowerCon?.mail) === false) {
      err.mail = "Bitte geben Sie Ihre gültige E-Mail-Adresse ein.";
      formIsValid = false;
    }
    if (inputPowerCon.address) {
      if (!inputPowerCon?.location) {
        err.location = "*Bitte gib deine Adresse an.";
        formIsValid = false;
      }
    }
    if (!inputPowerCon?.terms) {
      err.terms = "*Bitte AGB und Datenschutzbestimmungen auswählen.";
      formIsValid = false;
    }

    if (!inputPowerCon?.agreement) {
      err.agreement = "*Bitte bestätige die Kontaktaufnahme.";
      formIsValid = false;
    }
    setErrors(err);
    return formIsValid;
  };

  // const config = {
  //   headers: {
  //     "X-API-Account": "394078",
  //     "X-API-Key":
  //       "OiIwMDAwLNYyJ9.eyJhdWQiqx3425OiJSUzI1NiIqwdTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwc3aW5kb3dzLmwMDAwMDAwMy05ldC85MjNkZhbGciqdHTmd2UUsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmgsdgd2UU8yqnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2Yn8yVnp",
  //   },
  // };

  // const handleSubmitToFE = async () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  //   if (validateForm()) {
  //     setLoader(true);
  //     const data = {
  //       name_komplett: inputPowerCon.username,
  //       plz: inputPowerCon.pincode,
  //       ort: inputPowerCon.location,
  //       telefon: inputPowerCon.phone,
  //       email: inputPowerCon.mail,
  //       stromverbrauch: inputPowerCon.eConsumption,
  //       dachform: inputPowerCon.rooftype,
  //       erreichbarkeit: inputPowerCon.time,
  //       leadherkunft: "https://ekdfunnel.netlify.app/",
  //       // anrede: ,
  //       // vorname: ,
  //       // nachname: ,
  //       // strasse_nr: ,
  //       // eigentuemer: ,
  //       // interesse_finanzierung: ,
  //       // art_des_gebaeudes: ,
  //       // art_dacheindeckung: ,
  //       // art_heizung: ,
  //       // totalPeople: inputPowerCon.members,
  //       // electricityRequirement: inputPowerCon.requirementPerYear,
  //     };
  //     await axios
  //       .post(`https://fe-partnerportal.de/FE_API/lead_api/v1/lead`, data, config)
  //       .then((res) => {
  //         setLoader(false);
  //         // console.log("res", res);
  //         setOpenTab("G");
  //         // toast.success("Daten übermittelt");
  //         localStorage.removeItem("solar");
  //       })
  //       .catch((err) => {
  //         setLoader(false);
  //         toast.error("E-Mail oder Handy bereits vorhanden");
  //         // console.log("err.message", err.response.data.message);
  //       });
  //   }
  // };

  const handleSubmit = async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (validateForm()) {
      setLoader(true);
      const data = {
        username: inputPowerCon.username,
        email: inputPowerCon.mail,
        rooftype: inputPowerCon.rooftype,
        phone: inputPowerCon.phone,
        pincode: inputPowerCon.pincode,
        location: inputPowerCon.location,
        eConsumption: inputPowerCon.eConsumption,
        time: inputPowerCon.time,
        Lnews: inputPowerCon.Lnews,
        Monthlyprice: inputPowerCon?.Monthlyprice,
        agreement: inputPowerCon.agreement,
        areaofRoof: inputPowerCon.areaofRoof,
        currntPrice: inputPowerCon.currntPrice,
        direction: inputPowerCon.direction,
        members: inputPowerCon.members,
        message: inputPowerCon.message,
        pitch: inputPowerCon.pitch,
        requirementPerYear: inputPowerCon.requirementPerYear,
        terms: inputPowerCon.terms,
        total20yearSavings: inputPowerCon.total20yearSavings,
        // leadherkunft: "https://ekdfunnel.netlify.app/",

        //       totalPeople: inputPowerCon.members,
        //       electricityRequirement: inputPowerCon.requirementPerYear,
        //       electricityPrice: inputPowerCon.currntPrice,
        //       MonthlyFee: inputPowerCon.Monthlyprice,
        //       location: inputPowerCon.location,
        //       roofLength: inputPowerCon.areaofRoof,
        //       roofWidth: inputPowerCon.areaofRoof,
        //       roofOrientation: inputPowerCon.directions,
        //       roofArea: inputPowerCon.roofArea,
        //       storage: inputPowerCon?.moreOptions?.includes("Speicher"),
        //       warmth: inputPowerCon?.moreOptions?.includes("Warme"),
        //       eMobility: inputPowerCon?.moreOptions?.includes("EMobility"),
        //       eMobilityMessage: inputPowerCon.KM,
        //       userAvailableTime: inputPowerCon.time,
        //       message: inputPowerCon.message,
        //       address: inputPowerCon.address ? inputPowerCon.address : false,
        //       lettestNews: inputPowerCon.Lnews ? inputPowerCon.Lnews : false,
        //       agreement: inputPowerCon.agreement ? inputPowerCon.agreement : false,
        //       terms: inputPowerCon.terms ? inputPowerCon.terms : false,
        //       total20yearSavings: inputPowerCon.total20yearSavings,
      };

      await ApiPost(`userForm/create`, data)
        .then((res) => {
          console.log("res", res);
          // localStorage.setItem("solar", JSON.stringify(inputPowerCon));
          // toast.success("Daten übermittelt");
          localStorage.removeItem("solar");
          setLoader(false);
          // console.log("res", res);
        })
        .catch((err) => {
          setLoader(false);
          console.log("err", err?.response?.data?.message);
          toast.error(err?.response?.data?.message);
        });

      // await axios.post(`https://abe7-2405-201-200d-1c68-e20d-9416-8bde-8139.ngrok.iovorteli/api/v1/userForm/create`, data).then((res) => {
      //   console.log("res", res);
      //   // localStorage.setItem("solar", JSON.stringify(inputPowerCon));
      //   // toast.success("Daten übermittelt");
      //   localStorage.removeItem("solar");
      //   setLoader(false);
      //   // console.log("res", res);
      // }).catch((err) => {
      //   setLoader(false);
      //   console.log("err", err);
      //   toast.error("E-Mail oder Handy bereits vorhanden");
      // });
    }
  };

  const handleSetMember = (item) => {
    setInputPowerCon({ ...inputPowerCon, ["time"]: item });
    setDropdownHidden1(!dropdownHidden1);
    setErrors({ ...errors, ["time"]: "" });
  };
  const handlechangetab = () => {
    setOpenTab("E");
    setCheckTab(checkTab.filter((data) => data != openTab))
  }
  return (
    <div className="contact-content-left-alignment">
      <div className="grid">
        <div className="grid-items">
          <div className="contact-content-alignment">
            <div className="contact-content-heading">
              <h1>Kontakt</h1>
            </div>

            <div className="contact-content-form-alignment">
              <div className="contact-content-form-grid">
                <div className="contact-form-details-alignment">
                  <div className="input">
                    <label>
                      Name <span className="contact-alignment">*</span>
                    </label>
                    <div className="input-relative">
                      <input
                        type="text"
                        placeholder="Vor- und Zuname"
                        name="username"
                        value={inputPowerCon?.username}
                        onChange={(e) => onInputChangform(e)}
                        className={errors?.username ? "error-input" : ""}
                      />
                    </div>
                  </div>
                  <div className="error-alignment">
                    <span>{errors?.username}</span>
                  </div>
                </div>

                <div className="contact-form-details-alignment">
                  <div className="input">
                    <div className="conatct-flex-details">
                      <label>Erreichbarkeit</label>
                      <div className="input-alignment2">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <div className="input-tooltip-details input-tooltip-details-width1">
                          <span>
                            Wähle ein Zeitfenster, in dem <br /> wir dich erreichen können.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="input-relative" onClick={() => setDropdownHidden1(!dropdownHidden1)}>
                      <input
                        type="text"
                        placeholder="Morgens"
                        name="time"
                        className={errors?.time ? "error-input" : ""}
                        value={inputPowerCon?.time}
                        onChange={(e) => onInputChangform(e)}
                      />
                      <div className="icon-alignment">
                        {" "}
                        <i class="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                    <div className="error-alignment">
                      <span>{errors?.time}</span>
                    </div>
                  </div>
                  <div className={dropdownHidden1 ? "input-dropdown input-dropdown-show" : "input-dropdown input-dropdown-hidden"}>
                    <div className="input-dropdown-design" ref={popupRef}>
                      {time.map((item) => {
                        return (
                          <>
                            <span onClick={() => handleSetMember(item)}>{item}</span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="contact-form-details-alignment">
                  <div className="input">
                    <div className="label-flex-alignment">
                      {/* <label>Deine Telefonnummer</label> */}

                      <div className="conatct-flex-details">
                        <label>
                          Telefonnummer <span className="contact-alignment">*</span>
                        </label>
                        <div className="input-alignment2">
                          <i class="fa-solid fa-circle-exclamation"></i>

                          <div className="input-tooltip-details input-tooltip-details-width">
                            <span>
                              Telefonische Rückfragen <br />
                              beschleunigen die Terminfindung.
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="option-select-alignment">
                        {/* <div className="radio-button-alignment">
                          <input type="radio" id="radio1" name="radio-group" />

                          <label for="radio1"><em>bevorzugter Kontakt</em></label>

                        </div> */}
                      </div>
                    </div>
                    <div className="input-relative">
                      <input
                        type="text"
                        placeholder=""
                        name="phone"
                        className={errors?.phone ? "error-input" : ""}
                        value={inputPowerCon?.phone}
                        onChange={(e) => onInputChangform(e)}
                      />
                    </div>
                  </div>
                  <div className="error-alignment">
                    <span>{errors?.phone}</span>
                  </div>
                </div>

                <div className="contact-form-details-alignment">
                  <div className="input">
                    <div className="label-flex-alignment">
                      {/* <label>Deine Miladeresse</label> */}
                      <div className="conatct-flex-details">
                        <label>E-Mail Adresse</label>
                        <div className="input-alignment2">
                          <i class="fa-solid fa-circle-exclamation"></i>

                          <div className="input-tooltip-details input-tooltip-details-width1">
                            <span>
                              Wir senden dir ausschlieBlich <br />
                              E-Mails zur Terminbestätigung.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="option-select-alignment">
                        {/* <div className="radio-button-alignment">
                          <input type="radio" id="radio2" name="radio-group" />
                          <label for="radio2"><em>bevorzugter Kontakt</em></label>
                        </div> */}
                      </div>
                    </div>
                    <div className="input-relative">
                      <input
                        type="text"
                        placeholder=""
                        name="mail"
                        className={errors?.mail ? "error-input" : ""}
                        value={inputPowerCon?.mail}
                        onChange={(e) => onInputChangform(e)}
                      />
                    </div>
                  </div>
                  <div className="error-alignment">
                    <span>{errors?.mail}</span>
                  </div>
                </div>

                <div className="contact-form-details-alignment">
                  <div className="input">
                    <div className="label-flex-alignment">
                      <label>
                        Nachricht{" "}
                        <em>
                          <span style={{ fontWeight: "200", opacity: ".8" }}>- optional</span>
                        </em>
                      </label>
                    </div>
                    <div className="input-relative">
                      <textarea
                        type="text"
                        placeholder="Hier kannst du uns zusätzliche Anliegen schildern oder Fragen stellen."
                        name="message"
                        value={inputPowerCon?.message}
                        onChange={(e) => onInputChangform(e)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="contact-note-details-checkout-section">
                  <div className="conatct-checkbox-alignment">
                    {/* <div className="check-box-alignment contact-alignment">
                      <div>
                        <input type="checkbox" value="address" checked={inputPowerCon?.address} onChange={(e) => onInputChang(e)} id="check1" />
                        <label for="check1"></label>
                      </div>
                      <p>Ja, Ich möchte gerne mehr erfahren und auf dem Postweg die Broschüre und weiteres Infomaterial erhalten.</p>
                    </div> */}
                  </div>
                  {inputPowerCon?.address ? (
                    <div className="contact-form-details-alignment">
                      <div className="input">
                        {/* <label>Wie lautet dein Name ?</label> */}
                        <div className="input-relative">
                          <input
                            type="text"
                            placeholder="StraBe, Hausnummer, PLZ"
                            name="location"
                            className={errors?.location ? "error-input" : ""}
                            value={inputPowerCon?.location}
                            onChange={(e) => onInputChangform(e)}
                          />
                        </div>
                      </div>
                      <div className="error-alignment">
                        <span>{errors?.location}</span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="conatct-checkbox-alignment">
                    <div className="check-box-alignment contact-alignment">
                      <div>
                        <input type="checkbox" value="Lnews" checked={inputPowerCon?.Lnews} onChange={(e) => onInputChang(e)} id="check2" />
                        <label for="check2"></label>
                      </div>
                      <p>Ja, ich mõchte gern den Newsletter abonnieren, um über aktuelle Produkte und Leistungen informiert zu werden.</p>
                    </div>
                  </div>
                  <div className="conatct-checkbox-alignment">
                    <div className="check-box-alignment contact-alignment">
                      <div>
                        <input
                          type="checkbox"
                          value="agreement"
                          checked={inputPowerCon?.agreement}
                          onChange={(e) => onInputChangAgreement(e)}
                          id="check3"
                        />
                        <label for="check3"></label>
                      </div>
                      <div>
                        <p>
                          lch stimme einer Kontaktaufnahme durch einen Berater in meiner Nähe zu und bin damit einverstanden, dass meine Daten nur für
                          diesen Zweck weitergeleitet werden. *
                        </p>
                        <div className="error-alignment">
                          <span>{errors?.agreement}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="conatct-checkbox-alignment">
                    <div className="check-box-alignment contact-alignment">
                      <div>
                        <input type="checkbox" value="terms" checked={inputPowerCon?.terms} onChange={(e) => onInputChang(e)} id="check4" />
                        <label for="check4"></label>
                      </div>
                      <div>
                        <p>
                          lch habe die   <NavLink to="/datenschutzerklaerung"><b>AGB</b></NavLink> und <NavLink to="/datenschutzerklaerung"><b>Datenschutzbestimmungen</b></NavLink> gelesen und akzeptiert.
                          Es gelten die <NavLink to="/datenschutzerklaerung"><b>Datenschutzbedingungen</b></NavLink> der Energiekonzepte Deutschland GmbH. *
                        </p>
                        <div className="error-alignment">
                          <span>{errors?.terms}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-button-alignment">
                <div className="contact-button-grid">
                  <button
                    onClick={() => {
                      handlechangetab()

                    }}
                  >
                    Zurück
                  </button>
                  <button
                    onClick={() => {
                      // handleSubmit();
                      handleSubmit();
                    }}
                  >
                    Anfrage senden
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-items">
          <div className="main-image-style">
            <img src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            <SliderSolar />
          </div>
        </div>
      </div>
      <div>
        {lodertrue ? (
          <div className="loader-section">
            <div className="spinner"></div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}


// salutation
// firstname - surname => 2 in 1
// street
//owner
//isLiveInOwnProperty
// interestfunding
// typeofbuilding
// typeroofcovering
// typeheating
// remarks


// DONE
// location = location
// phone = phone
// email = mail
// powerconsuption = eConsumption
// reachability = time
// roofshape = rooftype
// postcode = pincode