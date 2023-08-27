import Title from "../../shared/Title/Title";

export const Skill = ({ name, value, img }) => {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex items-center gap-3">
        <img className="w-[50px] block" src={img} alt="" />
        <span className={`block text-xl font-medium`}>{name}</span>
      </div>
      <div
        className="radial-progress text-green-500 hover:bg-gray-900 duration-500 transform scale-150"
        style={{ "--value": value }}
      >
        {value}%
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-11/12 xl:w-10/12 mx-auto mt-12">
      <Title title={"Professional Skills"} subtitle={"Features"}></Title>

      <div className="mt-12 xl:mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-24 justify-between">
        <Skill
          name={"ReactJS"}
          img={"https://i.ibb.co/0hRKXQZ/react-logo.png"}
          value={90}
        ></Skill>
        <Skill
          name={"MongoDB"}
          img={"https://i.ibb.co/DYsnhNQ/mongo-logo.png"}
          value={86}
        ></Skill>
        <Skill
          name={"ExpressJS"}
          img={"https://i.ibb.co/JW1DZZf/express-logo.png"}
          value={82}
        ></Skill>
        <Skill
          name={"NodeJS"}
          img={"https://i.ibb.co/Z8rfNKH/nodejs-logo.png"}
          value={79}
        ></Skill>
        <Skill
          name={"HTML5"}
          img={"https://i.ibb.co/NmxtS12/html-5.png"}
          value={100}
        ></Skill>
        <Skill
          name={"CSS3"}
          img={"https://i.ibb.co/KrNZCqH/css-3.png"}
          value={95}
        ></Skill>
        <Skill
          name={"JavaScript"}
          img={"https://i.ibb.co/YtwPYYM/Javascript-Logo.png"}
          value={85}
        ></Skill>
        <Skill
          name={"WordPress"}
          img={"https://i.ibb.co/PT24gWx/wp-logo.png"}
          value={80}
        ></Skill>
      </div>
    </div>
  );
};

export default Skills;

// https://i.ibb.co/KrNZCqH/css-3.png
// https://i.ibb.co/NmxtS12/html-5.png
// https://i.ibb.co/Z8rfNKH/nodejs-logo.png
// https://i.ibb.co/JW1DZZf/express-logo.png
// https://i.ibb.co/DYsnhNQ/mongo-logo.png
// https://i.ibb.co/0hRKXQZ/react-logo.png
// https://i.ibb.co/YtwPYYM/Javascript-Logo.png
// https://i.ibb.co/PT24gWx/wp-logo.png
