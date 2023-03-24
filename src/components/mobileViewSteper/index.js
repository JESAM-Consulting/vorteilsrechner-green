import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { staperAtom, steperArray } from "../../helpers/Atom/StaperAtom";
import "./mobileViewSteper.scss";

export default function MobilViewSteper() {
  const [openTab, setOpenTab] = useAtom(staperAtom);

  const [checkTab, setCheckTab] = useAtom(steperArray)

  useEffect(() => {
    if (!checkTab?.includes(openTab)) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setCheckTab((preValue) => [...preValue, openTab]);
    }
  }, [openTab]);
  return (
    <div className="mobile-view-steper-section">
      <div className="mobile-view-steper-alignment">
        <div
          className={
            openTab === "A"
              ? "mobile-view-steper-details active" :
              checkTab?.includes("A") ? "mobile-view-steper-details  light-orange" : "mobile-view-steper-details "
          }
          onClick={() => {
            if (checkTab?.includes("A")) {
              setOpenTab("A");
            }
          }}
        >
          <span>1</span>
        </div>
        <div
          className={
            openTab === "B" || openTab === "C"
              ? "mobile-view-steper-details active" :
              checkTab?.includes("B") || checkTab?.includes("C") ? "mobile-view-steper-details  light-orange" : "mobile-view-steper-details "
          }
          onClick={() => {
            if (checkTab?.includes("B")) {
              setOpenTab("B");
            }
          }}
        >
          <span>2</span>
        </div>
        <div
          className={
            openTab === "D"
              ? "mobile-view-steper-details active" :
              checkTab?.includes("D") ? "mobile-view-steper-details  light-orange" : "mobile-view-steper-details"
          }
          onClick={() => {
            if (checkTab?.includes("D")) {
              setOpenTab("D");
            }
          }}
        >
          <span>3</span>
        </div>
        <div
          className={
            openTab === "E"
              ? "mobile-view-steper-details active" :
              checkTab?.includes("E") ? "mobile-view-steper-details  light-orange" : "mobile-view-steper-details"
          }
          onClick={() => {
            if (checkTab?.includes("E")) {
              setOpenTab("E");
            }
          }}
        >
          <span>4</span>
        </div>
        <div
          className={
            openTab === "F" || openTab === "G"
              ? "mobile-view-steper-details active":
              checkTab?.includes("F") || checkTab?.includes("G") ? "mobile-view-steper-details  light-orange" : "mobile-view-steper-details "
          }
          onClick={() => {
            if (checkTab?.includes("F")) {
              setOpenTab("F");
            }
          }}
        >
          <span>5</span>
        </div>
      </div>
    </div>
  );
}
