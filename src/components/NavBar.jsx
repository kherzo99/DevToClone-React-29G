import clsx from "clsx";
import { useState, useEffect } from "react";
import devToLogo from "/src/assets/devTologo.png";
import searchLogo from "/src/assets/busqueda.svg";
import bellIcon from "/src/assets/campana.svg";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [token, setToken] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return <div className="">{!token ? <Navbar /> : <NavBarwUser />}</div>;
}

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav
      className={clsx(
        "bg-white",
        "h-12",
        "flex flex-row",
        "gap-5",
        "p-2",
        "justify-between"
      )}
    >
      <div className={clsx("flex")}>
        <img className={clsx("w-13", "h-9")} src={devToLogo} alt="devTo-logo" />
      </div>

      <div
        className={clsx(
          "flex",
          "border",
          "border-black/20",
          "p-1",
          "rounded-md"
        )}
      >
        <input
          className={clsx("placeholder-slate-400", "rounded-md", "w-60", "p-1")}
          placeholder="Search..."
        />

        <button className={clsx("w-6", "hover:bg-gray-500")}>
          <img className={clsx("w-10")} src={searchLogo} alt="" />
        </button>
      </div>
      <div className={clsx("flex")}>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className={clsx(
            "px-2",
            "m-1",
            "hover:bg-[#ece9fd]",
            "rounded-md",
            "text-black/60",
            "hover:text-[#391fb9]",
            "hover:underline"
          )}
        >
          Log In
        </button>
        <button
          onClick={() => {
            navigate("/createUser");
          }}
          className={clsx(
            "px-2",
            "m-1",
            "border border-[#391fb9]",
            "text-[#391fb9]",
            "hover:bg-[#391fb9]",
            "rounded-md",
            "text-black/60",
            "hover:text-white",
            "hover:underline"
          )}
        >
          Create Account
        </button>
      </div>
    </nav>
  );
};

const NavBarwUser = () => {
  // const [user, setUser] = useState({});
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`http://localhost:3001/users/${user}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUser(data.data);
  //       console.log("esta es la data de users", data.data);
  //     });
  // }, [user]);

  return (
    <nav
      key={`user`}
      className={clsx(
        "bg-white",
        "h-12",
        "flex flex-row",
        "gap-5",
        "p-2",
        "justify-between"
      )}
    >
      <div className={clsx("flex")}>
        <img className={clsx("w-13", "h-9")} src={devToLogo} alt="devTo-logo" />
      </div>

      <div
        className={clsx(
          "flex",
          "border",
          "border-black/20",
          "p-1",
          "rounded-md"
        )}
      >
        <input
          className={clsx("placeholder-slate-400", "rounded-md", "w-60", "p-1")}
          placeholder="Search..."
        />

        <button className={clsx("w-6", "hover:bg-gray-500")}>
          <img className={clsx("w-10")} src={searchLogo} alt="" />
        </button>
      </div>
      <div className={clsx("flex", "gap-3")}>
        <button
          onClick={() => {
            navigate("/createPost");
          }}
          className={clsx(
            "px-2",
            "m-1",
            "border border-[#391fb9]",
            "text-[#391fb9]",
            "hover:bg-[#391fb9]",
            "rounded-md",
            "text-black/60",
            "hover:text-white",
            "hover:underline"
          )}
        >
          Create Post
        </button>

        <div className={clsx("grid", "justify-items-center")}>
          <img
            className={clsx("w-6", "hover:bg-[#391fb9]", "rounded-md")}
            src={bellIcon}
            alt=""
          />
        </div>
        <div className={clsx("grid", "justify-items-center")}>
          <img
            className={clsx("w-6", "hover:bg-[#391fb9]", "rounded-full")}
            src=""
            alt="userImg"
          />
        </div>
      </div>
    </nav>
  );
};
