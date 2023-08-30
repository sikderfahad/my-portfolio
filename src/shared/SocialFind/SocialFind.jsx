import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
const SocialFind = () => {
  return (
    <div>
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
              to="https://www.linkedin.com/in/developer-sajedul/"
              title="Linkedin"
            >
              <FiLinkedin className="text-2xl"></FiLinkedin>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialFind;
