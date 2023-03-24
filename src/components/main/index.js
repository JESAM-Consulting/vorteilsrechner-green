import React, { useState, useEffect } from "react";
import DetermineRootArea from "../determineRootArea";
import Home from "../home";
import RootArea from "../rootArea";
import MoreOption from "../moreOption";
import "./home.scss";
import SolarSavings from "../solarSaving";
import Contact from "../contact";
import ThankyouRequest from "../thankyouRequest";
import { useAtom } from "jotai";
import { staperAtom, steperArray } from "../../helpers/Atom/StaperAtom";
export default function MainPage() {
  const [inputPowerCon, setInputPowerCon] = useState({
    direction: "Süd",
    pitch: "90",
    pincode: "",
  });
  const [openTab, setOpenTab] = useAtom(staperAtom);
  const [checkTab, setCheckTab] = useAtom(steperArray);
  // console.log("checkTabBB",checkTab)
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("solar"));
    // if (!Object.values(inputPowerCon).length) {
    //   setInputPowerCon(items);
    // }
    if (!inputPowerCon.members) {
      setInputPowerCon({ ...inputPowerCon, ...items });
    }
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [openTab]);

  const handleOnClick = (data) => {
    setOpenTab(data);
  };

  // console.log("first", inputPowerCon);

  return (
    <>
      {/* ALL COMPONENTS RENDER HEARE */}

      {openTab === "A" && (
        <Home
        openTab={openTab}
          setOpenTab={setOpenTab}
          setInputPowerCon={setInputPowerCon}
          inputPowerCon={inputPowerCon}
        />
      )}
      {openTab === "B" && (
        <RootArea
        openTab={openTab}
          setOpenTab={setOpenTab}
          setInputPowerCon={setInputPowerCon}
          inputPowerCon={inputPowerCon}
        />
      )}
      {openTab === "C" && (
        <DetermineRootArea
        openTab={openTab}
          setOpenTab={setOpenTab}
          setInputPowerCon={setInputPowerCon}
          inputPowerCon={inputPowerCon}
        />
      )}
      {openTab === "D" && (
        <MoreOption
        openTab={openTab}
          setOpenTab={setOpenTab}
          setInputPowerCon={setInputPowerCon}
          inputPowerCon={inputPowerCon}
        />
      )}
      {openTab === "E" && (
        <SolarSavings
        openTab={openTab}
          setOpenTab={setOpenTab}
          setInputPowerCon={setInputPowerCon}
          inputPowerCon={inputPowerCon}
        />
      )}
      {openTab === "F" && (
        <Contact
        openTab={openTab}
          setOpenTab={setOpenTab}
          setInputPowerCon={setInputPowerCon}
          inputPowerCon={inputPowerCon}
        />
      )}
      {openTab === "G" && (
        <ThankyouRequest
        openTab={openTab}
          setOpenTab={setOpenTab}
          setInputPowerCon={setInputPowerCon}
          inputPowerCon={inputPowerCon}
        />
      )}
    </>
  );
}
