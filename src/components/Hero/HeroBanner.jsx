import HeroBannerImage from "../../assets/images/banner.webp";

const HeroBanner = () => {
  return (
    <section className="w-full bg-black">
      <img
        src={HeroBannerImage}
        alt="Markham Infiniti Hero Banner"
        width={1920}
        height={550}
        className="
          w-full
          h-auto
          object-contain
          block
        "
      />
    </section>
  );
};

export default HeroBanner;
