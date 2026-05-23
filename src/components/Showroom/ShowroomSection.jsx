import React from "react";
import HeadlineArrow from "../../assets/images/headng_line_arw.png";
import Plus from "../../assets/images/Plus.png";
import Car1 from "../../assets/images/car_01.png";
import Car2 from "../../assets/images/car_02.png";
import Car3 from "../../assets/images/car_03.png";
import Car4 from "../../assets/images/Car_04.png";
import showroomLeftarwPng from "../../assets/images/showroom_arw_left.png";
import showroomRigtharwPng from "../../assets/images/showroom_arw_right.png";
const showroomItems = [
  {
    id: 1,
    image: Car1,
    carModel: "2014 Q50",
    price: "37,500",
  },
  {
    id: 2,
    image: Car2,
    carModel: "2014 QX70",
    price: "53,350",
  },
  {
    id: 3,
    image: Car3,
    carModel: "2014 QX50",
    price: "37,900",
  },
  {
    id: 4,
    image: Car4,
    carModel: "2014 QX60",
    price: "43,000",
  },
];

const ShowroomSection = () => {
  return (
    <div>
      <h2>MODEL SHOWROOM</h2>
      <img src={HeadlineArrow} />

      <div>
        <img src={showroomLeftarwPng} />
        {showroomItems.map((showroomItem) => {
          return (
            <div>
              <h3>{showroomItem.carModel}</h3>
              <img src={showroomItem.image} />
              <p>Starting at ${showroomItem.price}</p>
              <img src={Plus} />
            </div>
          );
        })}
        <img src={showroomRigtharwPng} />
      </div>
    </div>
  );
};

export default ShowroomSection;
