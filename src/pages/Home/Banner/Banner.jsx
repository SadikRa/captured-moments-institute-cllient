import img1 from "../../../assets/banner1.jpg";
import img2 from "../../../assets/banner2.jpg";
import img3 from "../../../assets/banner3.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[100vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-md" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-black">
          <div className="text-white space-y-7 sm:w-full md:w-1/2 ps-20">
                  <h2 className="text-6xl font-bold">
                    Learn Skills From Our Top Instructors
                  </h2>
                  <p>
                    Join us on a journey to master the craft of photography
                    through our workshops and courses led by industry
                    professionals. Discover the secrets behind composition,
                    lighting, and post-processing techniques, and unleash your
                    creative potential.
                  </p>
                  <div>
                    <button className="btn btn-primary mr-5">
                      EXPLORE COURSES
                    </button>
                  </div>
                </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-md" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-black">
          <div className="text-white space-y-7 sm:w-full md:w-1/2 ps-20">
                  <h2 className="text-6xl font-bold">
                    Learn Skills From Our Top Instructors
                  </h2>
                  <p>
                    Join us on a journey to master the craft of photography
                    through our workshops and courses led by industry
                    professionals. Discover the secrets behind composition,
                    lighting, and post-processing techniques, and unleash your
                    creative potential.
                  </p>
                  <div>
                    <button className="btn btn-primary mr-5">
                      EXPLORE COURSES
                    </button>
                  </div>
                </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-md" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-black">
          <div className="text-white space-y-7 sm:w-full md:w-1/2 ps-20">
                  <h2 className="text-6xl font-bold">
                    Learn Skills From Our Top Instructors
                  </h2>
                  <p>
                    Join us on a journey to master the craft of photography
                    through our workshops and courses led by industry
                    professionals. Discover the secrets behind composition,
                    lighting, and post-processing techniques, and unleash your
                    creative potential.
                  </p>
                  <div>
                    <button className="btn btn-primary mr-5">
                      EXPLORE COURSES
                    </button>
                  </div>
                </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
