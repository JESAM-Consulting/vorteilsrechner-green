import React, { useState, useEffect } from "react";
import "./determineRootArea.scss";
import MapImg from "../../assets/image/mapImg.png";
import * as turf from "@turf/turf";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import DrawControl from "react-mapbox-gl-draw";
import ReactMapboxGl, { MapContext } from "react-mapbox-gl";
import SliderSolar from "../sliderSolar";
import SideImg from "../../assets/image/Page2.jpg";
import { locationData, steperArray } from "../../helpers/Atom/StaperAtom";
import { useAtom } from "jotai";
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoidW1hbmdiaGFsb2RpeWEiLCJhIjoiY2wybzd5ejdnMGkwbjNmbWZxaXhwcTltbCJ9.Hks0A1RrPY87QPdXnHB-PA",
});
export default function DetermineRootArea(props) {
  let cords1 = localStorage.getItem("coords");
  const { setOpenTab, inputPowerCon, setInputPowerCon, openTab } = props;

  const [checkTab, setCheckTab] = useAtom(steperArray);
  const [locationInfo, setLocationInfo] = useAtom(locationData);
  const [area, setArea] = useState({});
  const [arrayOfArea, setarrayOfArea] = useState([]);
  const [errors, setErrors] = useState({});
  const [locate, setLocate] = useState([8.674038959361514, 50.103093140182494]);
  const initiateCoords = [8.674038959361514, 50.103093140182494];
  const onDrawCreate = ({ features }) => {
    setErrors({ ...errors, roofArea: "" });
    let deawId = features[0].id;

    features.map((step1) =>
      step1.geometry.coordinates.map((allCords) => {
        let polygon = turf.polygon([allCords]);
        handleArea(polygon, allCords, deawId);
        return allCords;
      }),
    );
  };
  const onDrawUpdate = ({ features }) => {
    let deawId = features[0].id;
    features.map((step1) => {
      return step1.geometry.coordinates.map((allCords) => {
        let polygon = turf.polygon([allCords]);
        handleArea(polygon, allCords, deawId);
        return allCords;
      });
    });
  };

  const handleArea = (polygon, allCords, DrawId) => {
    let area = turf.area(polygon).toFixed();
    var from = turf.point(allCords[0]);
    var to = turf.point(allCords[1]);
    var options = { units: "kilometers" };
    var distance = turf.distance(from, to, options);
    var areaLength = (distance * 1000).toFixed();
    let areaWidth = (area / areaLength).toFixed();
    setArea({
      areaCoordinates: allCords,
      areaMtr: Number(area),
      areaWidth: Number(areaWidth),
      areaLength: Number(areaLength),
    });

    setarrayOfArea((preval) => [...preval, { _id: DrawId, areaMeter: Number(area) }]);
  };
  const [deleteId, setdeleteId] = useState("");
  const onDrawDelete = ({ features }) => {
    setdeleteId(features[0].id);
  };

  const handleWeiter = () => {
    let err = {};
    if (first === 0) {
      err["roofArea"] = " * Bitte überprüfe deine Eingabe.";
    } else {
      setOpenTab("B");
      localStorage.setItem("solar", JSON.stringify(inputPowerCon));
    }
    setErrors(err);
  };
  const handleZurück = () => {
    setOpenTab("B");
    setCheckTab(checkTab.filter((data) => data != openTab))
  };

  let onMove = (map) => {
    var cdd = Array(map.getCenter().toArray());
    localStorage.setItem("coords", cdd);
  };
  useEffect(() => {
    let dat = JSON.parse(localStorage.getItem("loc"));
    if (dat) {
      setLocate(dat);
    } else {
      setLocate([8.674038959361514, 50.103093140182494]);
    }
  }, []);

  useEffect(() => {
    sumOfarea();
  }, [area]);

  const [first, setfirst] = useState(0);
  const sumOfarea = () => {
    let total = area?.areaMtr;
    arrayOfArea.map((item) => {
      total = total + item.areaMeter;
    });
    setfirst(total);
    setInputPowerCon({ ...inputPowerCon, roofArea: total });
  };
  useEffect(() => {
    let data = arrayOfArea?.filter((data) => data._id !== deleteId);
    setarrayOfArea(data);
    let total = 0;
    data.map((item) => {
      total = total + item.areaMeter;
    });
    setInputPowerCon({ ...inputPowerCon, roofArea: total });
    setfirst(total);
  }, [deleteId]);

  // console.log("array", arrayOfArea);


  return (
    <div className="rootArea-determine-content-left-alignment">
      <div className="grid">
        <div className="grid-items">
          <div className="second-steper-determine-content-alignment">
            <div className="second-steper-determine-content-heading">
              <h1>Ermittle deine Dachfläche</h1>
              <p>Verschiebe die Punkte passend zu deiner Dachfläche. Wenn du fertig bist, klicke auf „Bestätigen“.</p>
            </div>
            <div className="determine-map-area-alignment">
              <Map
                onMove={onMove}
                center={locate ? locate : initiateCoords}
                style="mapbox://styles/umangbhalodiya/cl2a37bnb00no14mqwir37j0n"
                containerStyle={{
                  height: "50vh",
                  width: "100%",
                }}
                zoom={[17]}
              >
                <br />
                <DrawControl
                  position="top-left"
                  displayControlsDefault={false}
                  controls={{
                    polygon: true,
                    trash: true,
                  }}
                  defaultMode="draw_polygon"
                  onDrawCreate={onDrawCreate}
                  onDrawUpdate={onDrawUpdate}
                  onDrawDelete={onDrawDelete}
                />
              </Map>
            </div>
            <div className="determine-area-option-alignment">
              <div className="determine-area-option-details">
                <i class="fa-solid fa-circle-minus"></i>
                <span>
                  Dachflache : {" " + first ? first : ""} m<sup>2</sup>
                  {/* Dachflache : {" " + area?.areaMtr ? area?.areaMtr : ""} m<sup>2</sup> */}
                </span>
                &nbsp;&nbsp;<span style={{ color: "red" }}> {errors["roofArea"]}</span>
              </div>
              {/* <div className="determine-area-option-details">
                <i class="fa-solid fa-circle-plus plus"></i>
                <span className="plus-option ">Punkt hinzufugen</span>
              </div>
              <div className="determine-area-option-details">
                <i class="fa-solid fa-circle-xmark"></i>
                <span>Neu markieren</span>
              </div> */}
            </div>
            <div className="compass-button-alignment">
              <div className="compass-button-grid">
                <button
                  onClick={() => {
                    handleZurück();
                  }}
                >
                  Zurück
                </button>
                <button
                  onClick={() => {
                    handleWeiter();
                  }}
                >
                  Bestätigen
                </button>
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
