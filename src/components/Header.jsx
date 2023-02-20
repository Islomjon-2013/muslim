import React from "react";
import "../assets/header.css";
import image5 from "../assets/moon1.png";
import image from "../assets/moon.png";
import image1 from "../assets/sun1.png";
import image2 from "../assets/sun.png";
import image3 from "../assets/sun3.png";
import image4 from "../assets/sun4.png";
const Header = ({ data }) => {
  console.log(data.times);
  return (
    <div className="container">
      <div className="card__box">
        <div className="cards">
          <h2>Fajr</h2>
          <img src={image5} alt="" />
          <h5>{data?.times?.tong_saharlik}</h5>
        </div>
        <div className="cards">
          <h2>Sunrise</h2>
          <img src={image1} alt="" />
          <h5>{data?.times?.quyosh}</h5>
        </div>
        <div className="cards">
          <h2>Dhuhr</h2>
          <img src={image2} alt="" />
          <h5>{data?.times?.peshin}</h5>
        </div>
        <div className="cards">
          <h2>Asr</h2>
          <img src={image3} alt="" />
          <h5>{data?.times?.asr}</h5>
        </div>
        <div className="cards">
          <h2>Maghrib</h2>
          <img src={image4} alt="" />
          <h5>{data?.times?.shom_iftor}</h5>
        </div>
        <div className="cards">
          <h2>Isha</h2>
          <img src={image} alt="" />
          <h5>{data?.times?.hufton}</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
