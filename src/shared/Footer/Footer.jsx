import { Link } from "react-router-dom";
import { Divider } from "../../App";

const Footer = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="">
          <div className="hidden lg:flex w-[75px] h-[75px] rounded-full overflow-hidden p-[3px] border-[3px] border-[#2e3337]">
            <Link to={"/"}>
              <img
                src={"https://i.ibb.co/68WB8qf/nav-logo.png"}
                className="w-full h-full transform scale-[1.3] translate-x-[2px] translate-y-[8px]"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div> */}
      <Divider className={"mb-12"}></Divider>
      <div className="pb-12">
        <p className="text-center text-lg font-medium text-[#878e99]">
          © {new Date().getFullYear()}. All rights reserved by Developer -
          Sajedul
        </p>
      </div>
    </div>
  );
};

export default Footer;
