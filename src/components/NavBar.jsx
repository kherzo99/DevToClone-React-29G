import devIcon from "/src/assets/dev-to-svgrepo-com.svg";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [token, setToken] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
    <div className="">
      {token ? (
        // Si hay un token, muestra el componente1
        <Componente1 />
      ) : (
        // Si no hay un token, muestra el componente2
        <Componente2 />
      )}
    </div>
  );
}

const Componente1 = () => {
  return (
    <nav className="bg-[#18181B] h-12 flex flex-row gap-5 p-2 justify-between">
      <div className="flex">
        <img className="px-2" src={devIcon} alt="logo-twitch" />
        <div>
          <p className="px-2 text-base font-bold hover:text-[#CA85FF] hover:cursor-pointer">
            Explorar
          </p>
        </div>
        <div className="px-2 hover:bg-[#35343C] w-7 hover:rounded-md grid justify-items-center">
          <a className="" href="">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </a>
        </div>
      </div>

      <div className="">
        <input
          className="border border-[#67676B] placeholder-slate-400 rounded-md w-60 bg-[#18181B]"
          type=""
          name=""
          id=""
          placeholder="Search..."
        />
        <button className="w-12 rounded-md bg-[#2F2E36]">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="flex">
        <div className=" hover:bg-[#35343C] w-7 hover:rounded-md grid justify-items-center">
          <a className="" href="">
            <i className="fa-regular fa-envelope-open"></i>
          </a>
        </div>
        <button className="px-2 m-1 bg-[#2F2E36] rounded-md">Log In</button>
        <button className="px-2 m-1 bg-[#A200FF] rounded-md">Register</button>

        <div className="hover:bg-[#35343C] w-7 hover:rounded-md grid justify-items-center">
          <a className="" href="">
            <i className="fa-regular fa-user"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

const Componente2 = () => {
  return (
    <div className="p-4 bg-red-200 rounded">
      <p>Este es el componente 2 que se muestra si no hay un token.</p>
    </div>
  );
};
