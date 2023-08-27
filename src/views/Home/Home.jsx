import SocialFind from "../../shared/SocialFind/SocialFind";
import "./Home.css";
// import me from "../../assets/img/logo.png";

import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="w-11/12 xl:w-10/12 flex flex-col-reverse gap-10 xl:flex-row items-center mt-6 xl:mt-24 xl:pb-14 mx-auto">
      <div className="w-full xl:w-4/6">
        <p
          className="subtitle text-sm font-medium mb-5"
          style={{ letterSpacing: "3px" }}
        >
          WELCOME TO MY WORLD
        </p>
        <div>
          <h1
            className="title block leading-6 xl:leading-[62px] text-white text-4xl xl:text-6xl font-bold mb-5"
            // style={{ lineHeight: "62px" }}
          >
            Hi, I’m <span className="text-[--color-subtitle]">Sajedul</span>
            <span className=" gap-3 flex mt-6 text-2xl xl:text-5xl font-bold">
              a
              <Typewriter
                options={{
                  strings: [
                    " Full Stack Developer ",
                    " Frontend Developer ",
                    " Backend Developer ",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 20,
                  deleteSpeed: 10,
                  cursor: "_",
                }}
              />
            </span>
          </h1>
          <div>
            <p
              className="desc leading-[30px] text-lg font-normal text-[--color-lightn] opacity-90 xl:pr-[16%]"
              // style={{ lineHeight: "30px" }}
            >
              I develop with a knack for crafting engaging and dynamic web
              applications. With a deep love for coding and problem-solving, I
              specialize in bringing innovative ideas to life through the power
              of technology.
            </p>
          </div>
        </div>

        <div className="pt-12 xl:pt-[100px]">
          <SocialFind />
        </div>
      </div>

      <div className="w-full xl:w-2/6 banner-thumb">
        <div className="inner">
          <img
            src={"https://i.ibb.co/thnHQ06/logo.png"}
            className="relative"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
