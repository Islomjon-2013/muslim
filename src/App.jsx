import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import IMG from "./assets/calendar.png";
const App = () => {
  const [text, setText] = useState("Toshkent");
  const [time, setTime] = useState({});
  const [date, setDate] = useState("");

  setInterval(() => {
    setDate(new Date().toLocaleString());
  }, 1000);

  useEffect(() => {
    axios
      .get(`https://islomapi.uz/api/present/day?region=${text}`)
      .then((res) => {
        setTime(res.data);
      });
  }, [text]);
  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="col header__inner">
            <h1 className="header__title">Prayer times</h1>
          </div>
          <div className="header__box-1">
            <span className="span"></span>

            <div className="checbox">
              <label>Select a region:</label>
              <select
                onChange={(e) => {
                  setText(e.target.value);
                }}
                className="select"
                name="city"
                id="city"
              >
                <option selected value="Toshkent" className="option">
                  Tashkent
                </option>
                <option value="Qarshi">Qarshi</option>
                <option value="Samarqand">Samarqand</option>
                {/* <option value="Termiz">Termiz</option> */}
                <option value="Buxoro">Buhora</option>
                <option value="Andijon">Andijon</option>
                <option value="Farg'ona">Fargona</option>
              </select>
            </div>

            <div className="header__time">
              <div>
                <h2 className="h2">
                  Region: <span>{time?.region}</span>
                </h2>
              </div>
              <div className="form__box">
                <img src={IMG} alt="" />
                <div className="time">
                  {/* <h3>{time?.date}</h3> */}
                  <h4 className="text-warning ">{date}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header data={time} />
    </div>
  );
};

export default App;
