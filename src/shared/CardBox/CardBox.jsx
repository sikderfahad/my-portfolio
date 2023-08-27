import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const CardBox = ({
  img,
  name,
  logo,
  nameColor,
  f1,
  f2,
  f3,
  live,
  client,
  server,
}) => {
  const featureBox = [f1, f2, f3];
  return (
    <div className="card-box">
      <div className="card">
        <figure className="inner">
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body px-4 md:px-8 clear-left gap-4">
          {name && (
            <h2 style={{ color: nameColor }} className="card-title text-2xl ">
              {name}
            </h2>
          )}
          {logo && <img className="w-[150px]" src={logo} />}
          <div>
            <h1 className="text-xl font-medium text-white">Features :</h1>
            <ul className="list-disc ps-4 mt-2 flex flex-col gap-2">
              {featureBox.map((feature) => (
                <li key={feature} className="text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex items-center justify-between">
            <div>
              <Link
                to={live}
                className="text-white hover:text-[--color-subtitle] duration-300"
              >
                View Live →
              </Link>
            </div>

            <div className="relative flex items-center gap-8">
              <div className="text-4xl text-white">
                <BsGithub></BsGithub>
              </div>
              <div className="flex flex-col gap-8">
                <Link
                  title="view client side code repository"
                  className="font-medium git-code duration-300"
                  to={client}
                >
                  Client
                </Link>
                <Link
                  title="view server side code repository"
                  className="font-medium git-code hover:text-[--color-subtitle] duration-300"
                  to={server}
                >
                  Server
                </Link>
              </div>
              <div
                style={{
                  transform: "rotate(320deg) translate(9px, 44px)",
                }}
                className="git-line absolute w-[2.1rem] h-[1.5px] top-0 left-0"
              ></div>
              <div
                style={{
                  transform: "rotate(45deg) translate(60px, 12px)",
                }}
                className="git-line absolute w-[2.2rem] h-[1.5px] bg-white top-0 left-0"
              ></div>
            </div>
          </div>
          {/* <div className="card-actions justify-start">
                <button className="text-[--color-subtitle]">View more ▶</button>
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardBox;
