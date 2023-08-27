import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import Portfolio from "./views/Portfolio/Portfolio";
import Skills from "./views/Skills/Skills";

export const Divider = ({ id }) => {
  return (
    <div id={id} className="w-10/12 mx-auto">
      <hr className="mt-[100px] mb-[100px] border-1 border-[#121415]" />
    </div>
  );
};

const App = () => {
  return (
    <div id="home">
      <div>
        <Home></Home>
      </div>

      <Divider id={"skills"}></Divider>

      <div>
        <Skills></Skills>
      </div>

      <Divider id={"project"}></Divider>

      <div>
        <Portfolio></Portfolio>
      </div>

      <Divider id={"contact"}></Divider>

      <div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
