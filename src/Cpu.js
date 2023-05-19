import "./App.css";
import "./Semicircle";
import Semicircle from "./Semicircle";
import axios from "axios";
import React, { useState, useEffect } from "react";
const baseURL = `${process.env.REACT_APP_MEMORY_HOST}/memory/utilize`;

function Cpu() {
  const [cpuUtil, setCpu] = useState(100);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log("response : " + response.data);

      setCpu(response.data);
      // console.log("cpu : " + cpuUtil.cpu.toFixed(2));
    });
  }, []);
  return (
    <div className="App">
      <h1>CPU UTILIZATION</h1>
      <Semicircle a={cpuUtil.cpu} b="10"></Semicircle>
      <h1>MEMORY UTILIZATION</h1>
      <Semicircle a={cpuUtil.memory} b="100"></Semicircle>
    </div>
  );
}

export default Cpu;
