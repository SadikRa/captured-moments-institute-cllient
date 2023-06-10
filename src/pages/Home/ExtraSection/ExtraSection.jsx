import img1 from "../../../assets/sponsors/amazon.png";
import img2 from "../../../assets/sponsors/figma.png";
import img3 from "../../../assets/sponsors/google.png";
import img4 from "../../../assets/sponsors/spotify.png";
import img5 from "../../../assets/sponsors/telerama.png";
const ExtraSection = () => {
  return (
    <div className="py-16">
      <h2 className="text-4xl font-semibold text-center">Our sponsors</h2>
      <div className="flex flex-wrap gap-8 py-8">
        <div className="w-full sm:w-1/2 md:w-1/3  lg:w-1/6">
          <img src={img1} alt="" className="w-full" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3  lg:w-1/6">
          <img src={img2} alt="" className="w-full" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3  lg:w-1/6">
          <img src={img3} alt="" className="w-full" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3  lg:w-1/6">
          <img src={img4} alt="" className="w-full" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3  lg:w-1/6">
          <img src={img5} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
