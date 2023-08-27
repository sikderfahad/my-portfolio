import Home from "./views/Home/Home";
import Portfolio from "./views/Portfolio/Portfolio";
import Skills from "./views/Skills/Skills";

export const Divider = () => {
  return (
    <div className="w-10/12 mx-auto">
      <hr className="mt-20 mb-20 border-1 border-[#121415]" />
    </div>
  );
};

const App = () => {
  return (
    <div id="home">
      <div>
        <Home></Home>
      </div>

      <Divider></Divider>

      <div id="skills">
        <Skills></Skills>
      </div>

      <Divider></Divider>

      <div id="portfolio">
        <Portfolio></Portfolio>
      </div>
    </div>
  );
};

export default App;
