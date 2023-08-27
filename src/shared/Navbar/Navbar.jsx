import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navBox = [
    {
      title: "home",
      path: "#navbar-home",
    },
    {
      title: "skills",
      path: "#skills",
    },
    {
      title: "project",
      path: "#project",
    },
    {
      title: "resume",
      path: "/resume",
    },
    {
      title: "blog",
      path: "/blog",
    },
    {
      title: "contact",
      path: "#contact",
    },
  ];

  useEffect(() => {
    function smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        window.scrollTo({
          behavior: "smooth",
          top: element.offsetTop,
        });
      }
    }

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = this.getAttribute("href");
        smoothScroll(target);
      });
    });
  }, []);

  // ---------------------------

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`duration-100 ${
        scrolled ? "nav-scrolled" : "bg-transparent static"
      }`}
    >
      <div
        id="navbar-home"
        className={`w-11/12 ${
          scrolled ? "xl:w-10/12" : "xl:w-11/12"
        } navbar  mx-auto `}
      >
        <div className="w-3/4 md:w-10/12 lg:w-1/2">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              style={{ background: "var(--bg-color-1)" }}
              tabIndex={0}
              className="menu hover:bg-[--bg-color-2] menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navBox.map(({ title, path }) => (
                <li key={title}>
                  <a
                    className="p-3 uppercase text-[--color-lightn]"
                    href={path}
                  >
                    {" "}
                    {title}
                  </a>

                  {/* <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-black p-3 uppercase text-[--color-lightn]"
                        : "p-3 uppercase text-[--color-lightn]"
                    }
                    to={path}
                  >
                    {title}
                  </NavLink> */}
                </li>
              ))}
            </ul>
          </div>
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

        <nav className="lg:navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navBox.map(({ title, path }) => (
              <li key={title}>
                <a className="p-3 uppercase text-[--color-lightn]" href={path}>
                  {" "}
                  {title}
                </a>

                {/* <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black p-3 uppercase text-[--color-lightn]"
                      : "p-3 uppercase text-[--color-lightn]"
                  }
                  to={path}
                >
                  {title}
                </NavLink> */}
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-end flex lg:hidden w-[75px] h-[75px] rounded-full overflow-hidden p-[3px] border-[3px] border-[#2e3337]">
          <img
            src={"https://i.ibb.co/68WB8qf/nav-logo.png"}
            className="w-full h-full transform scale-[1.3] translate-x-[2px] translate-y-[8px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// https://i.ibb.co/68WB8qf/nav-logo.png
// https://i.ibb.co/JBmpT9T/pf1.png
// https://i.ibb.co/tbKrW5Q/pf2.png
// https://i.ibb.co/JQMMq5r/pf3.png
// https://i.ibb.co/pbV67Yc/favicon.png
// https://i.ibb.co/thnHQ06/logo.png
