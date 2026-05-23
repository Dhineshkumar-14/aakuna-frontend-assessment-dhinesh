import React from "react";

const ContactSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url("/images/map-bg.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 text-white">
          <div>
            <h3 className="text-3xl font-light mb-4">Address</h3>

            <p className="text-lg font-medium">
              4340 Hwy 7 E, Markham, ON L3R 1L9
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-light mb-4">Phone</h3>

            <p className="text-lg font-medium">(905) 752-0881</p>
          </div>

          <div>
            <h3 className="text-3xl font-light mb-4">Email</h3>

            <p className="text-lg font-medium">william@markhaminfiniti.com</p>
          </div>

          <div>
            <h3 className="text-3xl font-light mb-4">Follow us on</h3>

            <div className="flex items-center gap-4">
              <a href="/">
                <img src="" alt="facebook" />
              </a>

              <a href="/">
                <img src="" alt="twitter" />
              </a>

              <a href="/">
                <img src="" alt="youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button className="w-full md:w-[320px] h-[110px] bg-white rounded-sm flex items-center justify-center gap-5 shadow-lg">
            <img src="" alt="clock" />

            <span className="text-3xl text-[#3a3a3a] font-light">
              Dealership Hours
            </span>
          </button>

          <button className="w-full md:w-[320px] h-[110px] bg-[#5B2D90] rounded-sm flex items-center justify-center gap-5 shadow-lg relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#5B2D90] rotate-45"></div>

            <img src="" alt="phone" />

            <span className="text-3xl text-white font-light">Contact Us</span>
          </button>
          <button className="w-full md:w-[320px] h-[110px] bg-white rounded-sm flex items-center justify-center gap-5 shadow-lg">
            <img src="" alt="location" />

            <span className="text-3xl text-[#3a3a3a] font-light">Location</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
