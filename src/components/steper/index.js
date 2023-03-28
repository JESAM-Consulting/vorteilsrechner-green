import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./steper.scss";
import SideBarIcon from "../../assets/Icons/sidebar-menu-icon.svg";
import CloseIcon from "../../assets/Icons/wrong.svg";
import { useAtom } from "jotai";
import { staperAtom, steperArray } from "../../helpers/Atom/StaperAtom";
import MobilViewSteper from "../mobileViewSteper";
import Logo from "../../assets/logo/logo.svg";
export default function Steper() {
  const [openTab, setOpenTab] = useAtom(staperAtom);

  const [checkTab, setCheckTab] = useAtom(steperArray);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    if (!checkTab?.includes(openTab)) {
      setCheckTab((preValue) => [...preValue, openTab]);
    }
  }, [openTab]);
  const history = useHistory();
  const habdelchange = () => {
    window.location.reload();
  };

  // console.log("checkTab", checkTab);

  const [showSidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="stper-alignment">
        <div className="container-lg">
          <div className="stper-all-content-alignment">
            <div className="logo" onClick={() => habdelchange()}>
              {/* <h1>
                energie<span> konzepte</span> <br />
                deutschland
              </h1> */}
              <img src={Logo} alt="Logo" />
            </div>
            <div className="steper-details">
              <div
                className="stper-design"
                onClick={() => {
                  if (checkTab?.includes("A")) {
                    setOpenTab("A");
                  }
                }}
              >
                <div className={openTab === "A" ? " active" : checkTab?.includes("A") ? "light-orange" : ""}>1</div>
                <div>
                  <span>Stromverbrauch</span>
                </div>
              </div>
              <div
                className="stper-design"
                onClick={() => {
                  if (checkTab?.includes("B")) {
                    setOpenTab("B");
                  }
                }}
              >
                <div
                  className={
                    openTab === "B" || openTab === "C" ? " active" : checkTab?.includes("B") || checkTab?.includes("C") ? "light-orange" : ""
                  }
                >
                  2
                </div>
                <div>
                  <span>Dachfläche</span>
                </div>
              </div>
              <div
                className="stper-design"
                onClick={() => {
                  if (checkTab?.includes("D")) {
                    setOpenTab("D");
                  }
                }}
              >
                <div className={openTab === "D" ? " active" : checkTab?.includes("D") ? "light-orange" : ""}>3</div>
                <div>
                  <span>Optionen</span>
                </div>
              </div>
              <div
                className="stper-design"
                onClick={() => {
                  if (checkTab?.includes("E")) {
                    setOpenTab("E");
                  }
                }}
              >
                <div className={openTab === "E" ? " active" : checkTab?.includes("E") ? "light-orange" : ""}>4</div>
                <div>
                  <span>Solar-Ersparnis</span>
                </div>
              </div>
              <div
                className="stper-design"
                onClick={() => {
                  if (checkTab?.includes("F")) {
                    setOpenTab("F");
                  }
                }}
              >
                <div
                  className={
                    openTab === "F" || openTab === "G" ? " active" : checkTab?.includes("F") || checkTab?.includes("G") ? "light-orange" : ""
                  }
                >
                  5
                </div>
                <div>
                  <span>Kontakt</span>
                </div>
              </div>
            </div>
            <div className="steper-details-sidebar-alignment">
              <div
                className="steper-details-icon"
                onClick={() => setSidebar(!showSidebar)}
              >
                {showSidebar === true ? (
                  <img src={CloseIcon} alt="CloseIcon" />
                ) : (
                  <img src={SideBarIcon} alt="SideBarIcon" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSidebar && (
        <div className="sidebar-details-section">
          <div className="sidebar-box-alignment">
            <div
              className={
                openTab === "A" ? " steper-details active" : checkTab?.includes("A") ? " steper-details light-orange" : "steper-details"
              }
              onClick={() => {
                if (checkTab?.includes("A")) {
                  setOpenTab("A");
                }
              }}
            >
              <div className="steper-number-alignment">
                <span>1</span>
              </div>
              <div className="steper-name-alignment">
                <p>Stromverbrauch</p>
              </div>
            </div>
            <div
              className={
                openTab === "B" || openTab === "C"
                  ? " steper-details active" :
                  checkTab?.includes("B") || checkTab?.includes("C") ? " steper-details light-orange" : " steper-details"
              }
              onClick={() => {
                if (checkTab?.includes("B")) {
                  setOpenTab("B");
                }
              }}
            >
              <div className="steper-number-alignment">
                <span>2</span>
              </div>
              <div className="steper-name-alignment">
                <p>Dachfläche</p>
              </div>
            </div>
            <div
              className={
                openTab === "D" ? " steper-details active" : checkTab?.includes("D") ? " steper-details light-orange " : " steper-details"
              }
              onClick={() => {
                if (checkTab?.includes("D")) {
                  setOpenTab("D");
                }
              }}
            >
              <div className="steper-number-alignment">
                <span>3</span>
              </div>
              <div className="steper-name-alignment">
                <p>Optionen</p>
              </div>
            </div>

            <div
              className={
                openTab === "E" ? " steper-details active" : checkTab?.includes("E") ? " steper-details light-orange " : " steper-details"
              }
              onClick={() => {
                if (checkTab?.includes("E")) {
                  setOpenTab("E");
                }
              }}
            >
              <div className="steper-number-alignment">
                <span>4</span>
              </div>
              <div className="steper-name-alignment">
                <p>Solar-Ersparnis</p>
              </div>
            </div>

            <div
              className={
                openTab === "F" || openTab === "G"
                  ? " steper-details active"
                  : checkTab?.includes("F") || checkTab?.includes("G") ? " steper-details light-orange" : " steper-details"
              }
              onClick={() => {
                if (checkTab?.includes("F")) {
                  setOpenTab("F");
                }
              }}
            >
              <div className="steper-number-alignment">
                <span>5</span>
              </div>
              <div className="steper-name-alignment">
                <p>Kontakt</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="stper-border">
        <div
          className={
            openTab === "A"
              ? "stper-border-active step1"
              : openTab === "B"
                ? "stper-border-active step2"
                : openTab === "C"
                  ? "stper-border-active step2"
                  : openTab === "D"
                    ? "stper-border-active step3"
                    : openTab === "E"
                      ? "stper-border-active step4"
                      : openTab === "F"
                        ? "stper-border-active step5"
                        : "stper-border-active step5"
          }
        ></div>
      </div>

      <MobilViewSteper />
    </>
  );
}
