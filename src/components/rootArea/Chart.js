import React, { PureComponent, useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  Dot,
} from "recharts";

export default function RoofChart(props) {
  //   const [dataValue, setDataValue] = useState("90");
  const { inputPowerCon, setInputPowerCon } = props;
  const [roofPitch, setRoofPitch] = useState(90);
  const [roofPitchDot, setRoofPitchDot] = useState(90);
  //   console.log("roofPitch", roofPitch);
  const House = () => {
    return (
      <svg
        width="150"
        height="180"
        viewBox="0 0 196 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 61V0H196V61H149V20.5H67.5V61H0Z" fill="#e2dfdf" />
      </svg>
    );
  };
  useEffect(() => {
    if (roofPitch == 90) {
      setRoofPitchDot(0);
    } else if (roofPitch == 80) {
      setRoofPitchDot(24);
    } else if (roofPitch == 70) {
      setRoofPitchDot(48);
    } else if (roofPitch == 60) {
      setRoofPitchDot(72);
    } else if (roofPitch == 50) {
      setRoofPitchDot(97);
    } else if (roofPitch == 40) {
      setRoofPitchDot(122);
    } else if (roofPitch == 30) {
      setRoofPitchDot(146);
    } else if (roofPitch == 20) {
      setRoofPitchDot(170);
    } else if (roofPitch == 10) {
      setRoofPitchDot(194);
    } else if (roofPitch == 0) {
      setRoofPitchDot(225);
    }
  });
  const CustomizedLabel = () => {
    return (
      <svg
        width="20"
        height="20"
        y={roofPitchDot}
        x={190}
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
          fill="#F39200"
        />
      </svg>
    );
    //  }
  };
  useEffect(() => {
    if (inputPowerCon.rooftype === "Flachdach") {
      setRoofPitch("0");
    }
    if (inputPowerCon.rooftype === "Satteldach") {
      setRoofPitch("40");
    }
    if (inputPowerCon.rooftype === "Pultdach") {
      setRoofPitch("30");
    }
  }, [inputPowerCon.rooftype]);

  const handlesetroofpitch = (e) => {
    console.log("e", e);
    //  if (inputPowerCon.rooftype === "Flachdach"){
    //   //  setInputPowerCon((preval) => ({ ...preval, pitch: "0" }));
    //    setRoofPitch("0");

    //   }
    setRoofPitch(e);
    setInputPowerCon((preval) => ({ ...preval, pitch: e }));
    console.log("****inputPowerCon*****", inputPowerCon.rooftype);
  };

  const data = [
    {
      name: "Page A",
      uv: 0,
    },
    {
      name: "Page B",
      uv: roofPitch,
    },
  ];
  const Icon = (props) => (
    <g transform={`translate(${props.viewBox.x + 47},${props.viewBox.y - 66})`}>
      <House />
    </g>
  );

  //   const CustomizedDot=(props)=>{
  //     const { cx, cy } = props;

  //   return (
  //     <circle cx={160} cy={50} r={25} stroke="black" strokeWidth={3} fill="red" />

  // )  }
  return (
    <>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={data}
          margin={{
            right: -30,
            top: 0,
          }}
        >
          <XAxis dataKey="name" tick={false} label={<Icon />} />

          <YAxis
            orientation={"right"}
            onMouseDown={(e) => {
              handlesetroofpitch(e?.value);
            }}
            domain={[0, 94]}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}
            type="number"
            style={{
              fontSize: "1rem",
              fontFamily: "Barlow",
              transition: "0.5s",
            }}
            label={<CustomizedLabel />}
          />
          <Area dataKey="uv" stroke="#e2dfdf" fill="#e2dfdf" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
