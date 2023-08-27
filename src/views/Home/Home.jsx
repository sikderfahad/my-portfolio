import "./Home.css";
// import me from "../../assets/img/logo.png";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-11/12 lg:w-10/12 flex flex-col-reverse gap-10 lg:flex-row items-center mt-6 lg:mt-24 lg:pb-14 mx-auto">
      <div className="w-full lg:w-4/6">
        <p
          className="subtitle text-sm font-medium mb-5"
          style={{ letterSpacing: "3px" }}
        >
          WELCOME TO MY WORLD
        </p>
        <div>
          <h1
            className="title block leading-6 lg:leading-[62px] text-white text-4xl lg:text-6xl font-bold mb-5"
            // style={{ lineHeight: "62px" }}
          >
            Hi, I’m <span className="text-[--color-subtitle]">Sajedul</span>
            <span className=" gap-3 flex mt-6 text-2xl lg:text-5xl font-bold">
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
              className="desc leading-[30px] text-lg font-normal text-[--color-lightn] opacity-90 lg:pr-[16%]"
              // style={{ lineHeight: "30px" }}
            >
              I develop with a knack for crafting engaging and dynamic web
              applications. With a deep love for coding and problem-solving, I
              specialize in bringing innovative ideas to life through the power
              of technology.
            </p>
          </div>
        </div>

        <div className="pt-12 lg:pt-[100px]">
          <p
            className="subtitle uppercase text-sm font-medium mb-5"
            style={{ letterSpacing: "2px" }}
          >
            FIND WITH ME
          </p>{" "}
          <div className="social-link">
            <ul className="flex">
              <li className="list mx-[10px] my-[12px] ml-0 ">
                <Link
                  className="link"
                  title="Facebook"
                  to="https://www.facebook.com/sikderfahad003/"
                >
                  <FiFacebook className="text-2xl"></FiFacebook>
                </Link>
              </li>
              <li className="list mx-[10px] my-[12px]">
                <Link
                  className="link"
                  title="Twitter"
                  to="https://twitter.com/SikDerMDFahaD1"
                >
                  <FiTwitter className="text-2xl"></FiTwitter>
                </Link>
              </li>
              <li className="list mx-[10px] my-[12px]">
                <Link
                  className="link"
                  to="https://www.linkedin.com/in/sajedul-islam-08950722a/"
                  title="Linkedin"
                >
                  <FiLinkedin className="text-2xl"></FiLinkedin>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/6 banner-thumb">
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
