import React from "react";
import HeadlineArrow from "../../assets/images/headng_line_arw.png";
import videorightarw from "../../assets/images/video_right_arw.png";
import videoleftarw from "../../assets/images/video_left_arw.png";
import eventImage from "../../assets/images/event.png";
import readmore from "../../assets/images/read-more.png";
const NewsAndEvents = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex justify-between">
          <h2>News And Events</h2>
          <div className="flex  justify-between">
            <img src={videoleftarw} />
            <img src={videorightarw} />
          </div>
        </div>

        <img src={HeadlineArrow} alt="headline arrow" />
      </div>
      <div>
        <h3>Infiniti reveals Q30 Concept</h3>
        <img src={eventImage} />
        <p>
          Infiniti today revealed the next step in its strategy to expand into
          new premium segments with the debut of the Q30 Concept at the
          Frankfurt Motor Show. The sleek, seductive Q30 Concept..
          <label>Read more</label>
          <img src={readmore} alt="read more" />
        </p>
      </div>
    </div>
  );
};

export default NewsAndEvents;
