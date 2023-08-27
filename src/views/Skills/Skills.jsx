import Title from "../../shared/Title/Title";

export const Skill = ({ name, value }) => {
  return (
    <div className="flex flex-col items-center gap-12">
      <span className={`block text-xl font-medium`}>{name}</span>
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
    <div className="w-11/12 lg:w-10/12 mx-auto mt-12">
      <Title title={"Professional Skills"} subtitle={"Features"}></Title>

      <div className="mt-12 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 justify-between">
        <Skill name={"MongoDB"} value={100}></Skill>
        <Skill name={"ExpressJS"} value={80}></Skill>
        <Skill name={"ReactJS"} value={85}></Skill>
        <Skill name={"NodeJS"} value={75}></Skill>
        <Skill name={"HTML5"} value={100}></Skill>
        <Skill name={"CSS3"} value={90}></Skill>
        <Skill name={"JavaScript"} value={80}></Skill>
      </div>
    </div>
  );
};

export default Skills;
