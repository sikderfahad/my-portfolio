import { Divider } from "../../App";

const Footer = () => {
  return (
    <div>
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
