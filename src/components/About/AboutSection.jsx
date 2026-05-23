import React from "react";
import HeadlineArrow from "../../assets/images/headng_line_arw.png";
import WelcomeBG from "../../assets/images/welocme_bg.png";
import viloetbg from "../../assets/images/viloet_bg.png";
import graybg from "../../assets/images/gray_bg.png";
import familyOwnedBG from "../../assets/images/family_owned.png";
import professional from "../../assets/images/professional.png";
import readmore from "../../assets/images/read-more.png";

const AboutSection = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-8">
        <h2>WELCOME TO MARKHAM INFINITI</h2>

        <img
          src={HeadlineArrow}
          alt="headline arrow"
          className="mx-auto mt-2"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center mb-12">
        <p>
          Markham Infiniti is a family owned business in Toronto that has been
          servicing the GTA market since Infiniti was introduced. Agincourt
          Infiniti was one of the original fifteen Infiniti dealers appointed in
          Canada in 1990, and in October 2007 we relocated to Unionville,
          Ontario under our new name “Markham Infiniti”.
        </p>
      </div>

      <div
        className="w-full bg-cover bg-center bg-no-repeat py-16"
        style={{
          backgroundImage: `url(${WelcomeBG})`,
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
          <div
            className="w-[300px] h-[300px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-6"
            style={{
              backgroundImage: `url(${graybg})`,
            }}
          >
            <img src={familyOwnedBG} alt="family owned" className="mb-4" />

            <h3 className="mb-3">FAMILY OWNED</h3>

            <p>In our continual dedication to exceed our customers’</p>
          </div>

          <div
            className="w-[320px] h-[320px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-8"
            style={{
              backgroundImage: `url(${viloetbg})`,
            }}
          >
            <h3 className="mb-4">DEDICATED TO YOU</h3>

            <p className="mb-5">
              We have grown from that first sale to now selling hundreds of
              Infiniti’s per year in the greater Toronto area. Our Infiniti
              service business is one of the largest in Canada.
            </p>

            <div className="flex items-center gap-2">
              <label>Read More</label>

              <img src={readmore} alt="read more" />
            </div>
          </div>

          <div
            className="w-[300px] h-[300px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-6"
            style={{
              backgroundImage: `url(${graybg})`,
            }}
          >
            <img src={professional} alt="professional" className="mb-4" />

            <h3 className="mb-3">FRIENDLY AND PROFESSIONAL</h3>

            <p>Our Infiniti service business is one of the largest</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
