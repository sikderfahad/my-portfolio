import { Outlet } from "react-router-dom";
import ToastBox from "../Toast/ToastBox";
import Navbar from "../../shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastBox></ToastBox>
    </div>
  );
};

export default Root;
