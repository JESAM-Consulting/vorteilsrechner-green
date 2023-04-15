import React, { useEffect } from "react";
import SliderSolar from "../sliderSolar";
import Page4 from "../../assets/image/Page4.png";
import "./solarSaving.scss";
import performanceData from "./data.json";
import selfConsumptionData from "./consumption.json";
import Autarkie from "./Autarkie.json";
import { useAtom } from "jotai";
import { steperArray } from "../../helpers/Atom/StaperAtom";

export default function SolarSavings(props) {
  const { setOpenTab, inputPowerCon, setInputPowerCon, openTab } = props;
  const [checkTab, setCheckTab] = useAtom(steperArray);
  const handlechangetab = () => {
    setOpenTab("D");
    setCheckTab(checkTab.filter((data) => data != openTab))
  }
  const onInputChang = (e) => {
    const { name, value } = e.target;
    // console.log("value", value);

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
      tmpArr = tmpArr.filter((a) => a !== value);
      setInputPowerCon((preValue) => ({
        ...preValue,
        moreOptions: tmpArr,
      }));
    }
  };

  // const principal = inputPowerCon.requirementPerYear;
  // const time = 20;
  // const rate = 4.5;
  // const n = 12;
  // const compoundInterest = (p, t, r, n) => {
  //    const amount = p * (Math.pow((1 + (r / n)), (n * t)));
  //    const interest = amount - p;
  //    return interest;
  // };
  // let totalElement=0
  // for (let index = 1; index <= 2; index++) {
  //   totalElement = Kosten+Kosten;
  //  console.log("first")

  // }
  // console.log("totalElement ",totalElement-700 )
  const getDirectionValue = () => {
    if (inputPowerCon.direction === "Süd") {
      return 0;
    } else if (inputPowerCon.direction === "SSW") {
      return 22.5;
    } else if (inputPowerCon.direction === "SüdWest") {
      return 45;
    } else if (inputPowerCon.direction === "WSW") {
      return 67.5;
    } else if (inputPowerCon.direction === "West") {
      return 90;
    } else if (inputPowerCon.direction === "WNW") {
      return 112.5;
    } else if (inputPowerCon.direction === "Nord-West") {
      return 135;
    } else if (inputPowerCon.direction === "NNW") {
      return 157.5;
    } else if (inputPowerCon.direction === "Norden") {
      return 180;
    } else if (inputPowerCon.direction === "NNO") {
      return 157.5;
    } else if (inputPowerCon.direction === "Nord-Ost") {
      return 135;
    } else if (inputPowerCon.direction === "ONO") {
      return 112.5;
    } else if (inputPowerCon.direction === "Ost") {
      return 90;
    } else if (inputPowerCon.direction === "OSO") {
      return 67.5;
    } else if (inputPowerCon.direction === "Süd-Ost") {
      return 45;
    } else if (inputPowerCon.direction === "SSO") {
      return 22.5;
    }
  };

  const getPercentageDeviation = () => {
    let direction = getDirectionValue();
    let angle = inputPowerCon.pitch;
    // console.log("direction", direction);
    // console.log("angle", angle);
    let finalPercentage;
    let matchedData = performanceData.find(
      (item) => item.direction == direction && item.angle == angle
    );
    // console.log("matchedData", matchedData, direction, angle, performanceData);
    // console.log("matcehd data", matchedData?.value);
    return matchedData?.value;
  };

  const getSpecificYield = () => {
    // console.log("inputPowerCon.pincode", inputPowerCon.pincode.toString());
    if (
      inputPowerCon.pincode.toString() >= "01000" &&
      inputPowerCon.pincode.toString() <= "09999"
    ) {
      return 911;
    } else if (
      inputPowerCon.pincode >= 10000 &&
      inputPowerCon.pincode <= 19999
    ) {
      return 886;
    } else if (
      inputPowerCon.pincode >= 20000 &&
      inputPowerCon.pincode <= 29999
    ) {
      return 857;
    } else if (
      inputPowerCon.pincode >= 30000 &&
      inputPowerCon.pincode <= 39999
    ) {
      return 873;
    } else if (
      inputPowerCon.pincode >= 40000 &&
      inputPowerCon.pincode <= 49999
    ) {
      return 895;
    } else if (
      inputPowerCon.pincode >= 50000 &&
      inputPowerCon.pincode <= 59999
    ) {
      return 913;
    } else if (
      inputPowerCon.pincode >= 60000 &&
      inputPowerCon.pincode <= 69999
    ) {
      return 908;
    } else if (
      inputPowerCon.pincode >= 70000 &&
      inputPowerCon.pincode <= 79999
    ) {
      return 987;
    } else if (
      inputPowerCon.pincode >= 80000 &&
      inputPowerCon.pincode <= 89999
    ) {
      return 987;
    }
  };

  const getMaximumStorage = (data) => {
    if (data == 0) {
      return 0;
    } else if (data > 0 && data <= 6) {
      return 6;
    } else if (data > 6 && data <= 9) {
      return 9;
    } else if (data > 9 && data <= 12) {
      return 12;
    } else if (data > 12) {
      return 15;
    }
  };

  const calculatePower = (data) => {
    if (data <= 3000) {
      return 3000;
    } else if (data > 3000 && data <= 4000) {
      return 4000;
    } else if (data > 4000 && data <= 5000) {
      return 5000;
    } else if (data > 5000 && data <= 6000) {
      return 6000;
    } else if (data > 6000 && data <= 7000) {
      return 7000;
    } else if (data > 7000 && data <= 8000) {
      return 8000;
    } else if (data > 8000 && data <= 9000) {
      return 9000;
    } else if (data > 9000 && data <= 10000) {
      return 10000;
    } else if (data > 10000 && data <= 11000) {
      return 11000;
    } else if (data > 11000 && data <= 12000) {
      return 12000;
    } else if (data > 12000 && data <= 13000) {
      return 13000;
    } else if (data > 13000) {
      return 15000;
    }
  };


  const calculatePowerAutarkie = (data) => {
    if (data <= 3500) {
      return 3000;
    } else if (data > 3500 && data <= 4500) {
      return 4000;
    } else if (data > 4500 && data <= 5500) {
      return 5000;
    } else if (data > 5500 && data <= 6500) {
      return 6000;
    } else if (data > 6500 && data <= 7500) {
      return 7000;
    } else if (data > 7500 && data <= 8500) {
      return 8000;
    } else if (data > 8500 && data <= 9500) {
      return 9000;
    } else if (data > 9500 && data <= 10500) {
      return 10000;
    } else if (data > 10500 && data <= 11500) {
      return 11000;
    } else if (data > 11500 && data <= 12500) {
      return 12000;
    } else if (data > 12500 && data <= 13500) {
      return 13000;
    } else if (data > 13500) {
      return 15000;
    }
  };

  let resultData = 0;
  const getSelfConsumption = (
    requirementPerYear,
    maximumStorage,
    plantPerformance
  ) => {
    let PVpowerkW = calculatePower(plantPerformance); // PV-Leistung
    resultData = selfConsumptionData.find(
      (item) =>
        item.StrombedarfkWh == requirementPerYear &&
        item.PVLeistung == PVpowerkW &&
        item.PVSpeicher == maximumStorage
    );
    // console.log("resultData", resultData?.result);
    return resultData?.result;
  };
  let resultData2 = 0;
  const getSelfConsumption2 = (
    requirementPerYear,
    maximumStorage,
    produceSolarPerYer
  ) => {
    let PVpowerkW = calculatePower(produceSolarPerYer); // PV-Leistung
    // console.log("PVpowerkW is here", PVpowerkW);
    resultData2 = selfConsumptionData.find(
      (item) =>
        item.StrombedarfkWh == requirementPerYear &&
        item.PVLeistung == PVpowerkW &&
        item.PVSpeicher == maximumStorage
    );
    // console.log("resultData2", resultData2?.result);
    return resultData2?.result;
  };

  const getAutarkie = (requirementPerYear, maximumStorage, produceSolarPerYer) => {
    let PVpowerkW = calculatePowerAutarkie(produceSolarPerYer); // PV-Leistung
    // console.log("PVpowerkW is here", PVpowerkW);
    resultData = Autarkie.find(
      (item) => item.StrombedarfkWh == requirementPerYear && item.PVLeistung == PVpowerkW && item.PVSpeicher == maximumStorage,
    );
    // console.log("resultData2", resultData2?.result);
    return resultData?.result;
  };

  const getCompensation = (data) => {
    if (data <= 10) {
      return 8.2;
    } else if (data > 10 && data <= 40) {
      return 7.1;
    } else if (data > 40) {
      return 5.8;
    }
  };

  const getCountedFinalEconsumption = (data) => {
    if (data < 2500) {
      return 2000;
    } else if (data >= 2500 && data < 3500) {
      return 3000;
    } else if (data >= 3500 && data < 4500) {
      return 4000;
    } else if (data >= 4500 && data < 5500) {
      return 5000;
    } else if (data >= 5500 && data < 6500) {
      return 6000;
    } else if (data >= 6500 && data < 7500) {
      return 7000;
    } else if (data >= 7500 && data < 8500) {
      return 8000;
    } else if (data >= 8500 && data < 9500) {
      return 9000;
    } else if (data >= 9500) {
      return 10000;
    }
  };

  const getFinalStorage1 = () => {
    let data = storage1 < storage2 ? storage1 : storage2;
    if (data <= 6) {
      return 6;
    }
    if (data > 6 && data <= 9) {
      return 9;
    }
    if (data > 9 && data <= 12) {
      return 12;
    }
    if (data > 12) {
      return 15;
    }
  };

  const gettotalFinalSaving20 = (data) => {
    // console.log("finalSavingf15", data);
    let finalSavingf15 = data;
    let yearArr = [finalSavingf15];
    for (let i = 0; i < 19; i++) {
      finalSavingf15 = finalSavingf15 * 0.045 + finalSavingf15;
      yearArr.push(finalSavingf15);
      // console.log(`pushing yearss ${i}`, finalSavingf15);
    }
    // console.log(
    //   "sum of 20 years",
    //   yearArr.reduce((partialSum, a) => partialSum + a, 0),
    // );
    return yearArr.reduce((partialSum, a) => partialSum + a, 0);
  };
  const handletotal20FinalSaving = (data) => {
    // console.log("finalSavingf15", data);
    let finalSavingf15 = data;
    let yearArr = [finalSavingf15];
    for (let i = 0; i < 19; i++) {
      finalSavingf15 = finalSavingf15 * 0.045 + finalSavingf15;
      yearArr.push(finalSavingf15);
      // console.log(`pushing yearss ${i}`, finalSavingf15);
    }
    // console.log(
    //   "sum of 20 years",
    //   yearArr.reduce((partialSum, a) => partialSum + a, 0),
    // );
    return yearArr.reduce((partialSum, a) => partialSum + a, 0);
  };
  const gettotalFinalSavingFor2 = (data) => {
    // console.log("finalSavingf15", data);
    let finalSavingf15 = data;
    let yearArr = [finalSavingf15];
    for (let i = 0; i < 19; i++) {
      finalSavingf15 = finalSavingf15 * 0.045 + finalSavingf15;
      yearArr.push(finalSavingf15);
      // console.log(`pushing yearss ${i}`, finalSavingf15);
    }
    // console.log(
    //   "sum of 20 years",
    //   yearArr.reduce((partialSum, a) => partialSum + a, 0),
    // );
    return yearArr.reduce((partialSum, a) => partialSum + a, 0);
  };

  let Sizeofroof = 0;
  if (!inputPowerCon.areaofRoof) {
    Sizeofroof = inputPowerCon?.roofArea;
  } else {
    Sizeofroof = inputPowerCon?.areaofRoof;
  }
  // console.log("Sizeofroof", Sizeofroof);

  let staticHeight = 1723;
  let staticWidth = 1134;
  let noOfModules = Sizeofroof / 1953.882 / 1000;
  let plantPerformance = noOfModules * 380;
  let percentageDeviation = getPercentageDeviation() / 100;
  let percentagePlantPerformance = plantPerformance * percentageDeviation;
  let specificYield = getSpecificYield();
  let maxYield = percentagePlantPerformance * specificYield;
  let storageByGeneration = (maxYield / 1000) * 1.5;
  let memoryByConsumption = (inputPowerCon.requirementPerYear / 1000) * 1.5;
  if (!inputPowerCon.moreOptions.includes("Speicher")) {
    storageByGeneration = 0;
  }
  // else{
  //   storageByGeneration
  // }
  let storageChoice =
    storageByGeneration > memoryByConsumption
      ? memoryByConsumption
      : storageByGeneration;
  let maximumStorage = getMaximumStorage(storageChoice);
  let selfConsumption =
    getSelfConsumption(
      inputPowerCon.requirementPerYear,
      maximumStorage,
      plantPerformance
    ) / 100;
  let selfUsedSolarPower = maxYield * selfConsumption;
  let compensation = getCompensation(plantPerformance);
  let feedInTariff = (maxYield - selfUsedSolarPower) * compensation;
  let savings = selfUsedSolarPower * inputPowerCon.currntPrice;
  let totalSavings = savings + feedInTariff;

  // display calculation
  let inputPowerConKm = 0;
  if (!inputPowerCon?.moreOptions?.includes("EMobility")) {
    inputPowerConKm = 0;
  } else {
    inputPowerConKm = (inputPowerCon.KM * 18) / 100;
  }
  // let finalInputPowerConKm = inputPowerConKm > 10000 ? 10000 : inputPowerConKm;
  let eConsumption =
    parseInt(inputPowerCon.requirementPerYear) + parseInt(inputPowerConKm);
  let finalEconsumption = eConsumption > 10000 ? 10000 : eConsumption;
  let RecommendedNoOfModule = Sizeofroof / 1.953882;
  let roundupModules = Math.round(RecommendedNoOfModule);
  let produceSolarPerYer =
    (roundupModules *
      380 *
      (getPercentageDeviation() / 100) *
      getSpecificYield()) /
    1000;
  let storage1 = (eConsumption / 1000) * 1.5;
  let storage2 = (produceSolarPerYer / 1000) * 1.5;
  let finalStorage1 = getFinalStorage1(storage1, storage2);
  let countedFinalEconsumption = getCountedFinalEconsumption(finalEconsumption);
  let coveredSelfConsumption = getSelfConsumption2(
    countedFinalEconsumption,
    maximumStorage,
    produceSolarPerYer
  );
  let finalSavingf15 =
    parseInt((eConsumption * inputPowerCon.currntPrice) / 100) +
    parseInt(inputPowerCon.Monthlyprice);
  let totalFinalSaving20 = gettotalFinalSaving20(finalSavingf15);
  let solarPowerProduced = parseInt(
    (produceSolarPerYer * inputPowerCon.currntPrice) / 100
  );
  let totalSolarPowerProduced = gettotalFinalSavingFor2(solarPowerProduced);
  let c1 = totalFinalSaving20 - totalSolarPowerProduced;
  let c2 = (eConsumption - produceSolarPerYer) * 0.071;
  let c3 = c2 * 20;
  let field15 = c1 + c3;


  let autarkie = getAutarkie(countedFinalEconsumption, maximumStorage, produceSolarPerYer)

  // Final Calculation......................................................................

  let year1F1 =
    (produceSolarPerYer *
      (coveredSelfConsumption / 100) *
      inputPowerCon.currntPrice) /
    100;
  let total20F2 = handletotal20FinalSaving(year1F1);

  let Anlagengröße = roundupModules * 380;
  let finalAnlagengröße = Anlagengröße <= 10000 ? 8.2 : 7.1;

  let F3 =
    ((produceSolarPerYer -
      produceSolarPerYer * (coveredSelfConsumption / 100)) *
      finalAnlagengröße) /
    100;
  let F4 = F3 * 20;
  let finalField15 = total20F2 + F4;

  const handlechangeTab = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    // let datadata = { ...inputPowerCon, total20yearSavings: ErsparnismitPVESVüber20J.toFixed(2) };
    setInputPowerCon({
      ...inputPowerCon,
      total20yearSavings: finalField15.toFixed(2),
    });
    // localStorage.setItem("solar", JSON.stringify(datadata));
    setOpenTab("F");
  };

  useEffect(() => {
    setInputPowerCon((preval) => ({ ...preval, eConsumption: eConsumption }));
  }, [])

  return (
    <div className="solar-saving-content-left-alignment">
      <div className="grid">
        <div className="grid-items">
          <div className="solar-saving-content-alignment">
            <div className="solar-saving-content-heading">
              <h1>Deine Stromkosten-Ersparnis</h1>
            </div>

            <div className="solar-saving-content-grid">
              <div className="solar-saving-details-content-alignment">
                <div className="solar-saving-heading-alignment">
                  <h5>Du sparst über 20 Jahre bis zu</h5>
                </div>
                <div className="solar-calc-details-alignment">
                  <h1>{Math.round(finalField15).toLocaleString("de-DE")} €</h1>
                  <span>*</span>
                </div>
                <div className="solar-saving-content-details-section">
                  <div className="solar-saving-content-details">
                    <div className="solar-saving-question-alignment">
                      <p>Dein produzierter Solarstrom im Jahr</p>
                      <span>{Math.trunc(produceSolarPerYer).toLocaleString("de-DE")} kWh</span>
                      {/* <span>{Solarstrom} kWh</span> */}
                    </div>

                    <div className="solar-saving-question-alignment">
                      <p>Dein Eigenverbrauch beträgt</p>
                      <span>{resultData2?.result.toFixed(0)} %</span>
                    </div>


                    <div className="solar-saving-question-alignment">
                      <p>Deine Autarkie beträgt </p>
                      <span>{resultData?.result.toFixed(0)} %</span>
                    </div>
                  </div>
                </div>

                <div className="solar-saving-details-button-alignment">
                  <button onClick={() => {
                    handlechangeTab();
                  }}>Jetzt <br />Fachberater kostenlos <br />bestellen <br /></button>
                </div>
                <div className="solar-saving-content-notes">
                  <p>
                    *Es handelt sich hierbei um eine grobe Einschätzung
                    basierend auf deinen angegebenen Daten.
                  </p>
                </div>
              </div>
              <div className="solar-saving-box-alignment">
                <div className="solar-saving-details-conatent">
                  <div className="solar-saving-box-heading-details">
                    <p>Dein Stromverbrauch</p>

                    {/* <div className="input-alignment2">
                      <i class="fa-solid fa-circle-exclamation"></i>
                    </div> */}
                  </div>
                  <div className="solar-saving-box-details-alignment">
                    <div className="solar-saving-box-details-name">
                      <p>Personen im Haushalt </p>
                      <p>{inputPowerCon?.members}</p>
                    </div>
                    <div className="solar-saving-box-details-name">
                      <p>Dein Standort</p>
                      <p>{inputPowerCon?.location}</p>
                    </div>
                    <div className="solar-saving-box-details-name">
                      <p>Dein jährlicher Stromverbrauch</p>
                      <p>{Math.trunc(finalEconsumption).toLocaleString("de-DE")} kWh</p>
                    </div>
                  </div>
                </div>

                <div className="solar-saving-details-conatent">
                  <div className="solar-saving-box-heading-details">
                    <p>Deine Dachfläche</p>
                  </div>
                  <div className="solar-saving-box-details-alignment">
                    <div className="solar-saving-box-details-name">
                      <p>Dachgröße </p>
                      <p>
                        {Math.trunc(Sizeofroof).toLocaleString("de-DE")}m<sup>2</sup>{" "}
                      </p>
                    </div>
                    <div className="solar-saving-box-details-name">
                      <p>Ausrichtung</p>
                      <p>{inputPowerCon?.direction}</p>
                    </div>
                    <div className="solar-saving-box-details-name">
                      <p>Empfohlene Modul-Anzahl</p>
                      <p>{Math.floor(RecommendedNoOfModule).toLocaleString("de-DE")}</p>
                    </div>
                  </div>
                </div>
                <div className="solar-saving-details-conatent">
                  <div className="solar-saving-box-heading-details">
                    <p>Weitere 0ptionen</p>
                  </div>
                  <div className="solar-saving-box-details-alignment">
                    <div className="solar-saving-box-details-name mobile-checkbox-alignment">
                      <div className="check-box-alignment solar-saving ">
                        <input
                          type="checkbox"
                          name="Speicher"
                          value="Speicher"
                          id="Speicher"
                          checked={inputPowerCon?.moreOptions?.includes(
                            "Speicher"
                          )}
                          onChange={(e) => onInputChang(e)}
                        // checked
                        />
                        <label for="Speicher" className="solar-label">
                          Speicher
                        </label>
                      </div>
                    </div>
                    <div className="solar-saving-box-details-name mobile-checkbox-alignment">
                      <div className="check-box-alignment solar-saving ">
                        <input
                          type="checkbox"
                          name="Warme"
                          value="Warme"
                          id="Warme"
                          checked={inputPowerCon?.moreOptions?.includes(
                            "Warme"
                          )}
                          onChange={(e) => onInputChang(e)}
                        />
                        <label for="Warme" className="solar-label">
                          Wärme
                        </label>
                      </div>
                    </div>
                    <div className="solar-saving-box-details-name mobile-checkbox-alignment">
                      <div className="check-box-alignment solar-saving ">
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
                        <label for="EMobility" className="solar-label">
                          E-Mobility
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="solar-saving-content-notes-mobileview">
                <p className="notes-alignemnt">
                  *Es handelt sich hierbei um eine grobe Einschätzung
                  basierend auf deinen angegebenen Daten.
                </p>
              </div> */}
            </div>

            <div className="solar-saving-button-alignment">
              <div className="solar-saving-button-grid">
                <button
                  onClick={() => {
                    handlechangetab()

                  }}
                >
                  Zurück
                </button>
                <button
                  onClick={() => {
                    handlechangeTab();
                  }}
                >
                  Weiter
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-items">
          <div className="main-image-style">
            <img src={Page4} alt="Page4" />
          </div>
          <SliderSolar />
        </div>
      </div>
    </div>
  );
}
