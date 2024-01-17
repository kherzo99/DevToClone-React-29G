import clsx from "clsx";
import { useState } from "react";
import SignOutButton from "./SignOutButton";

export default function UserInfo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userName = localStorage.getItem("userName");
  const userLastName = localStorage.getItem("userLastName");
  const userProfImg = localStorage.getItem("userImg");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={clsx("relative", "align-middle")}>
      <button onClick={toggleMenu} className={clsx("p-1 w-10 rounded-full")}>
        <img className={clsx("", "rounded-full")} src={userProfImg} alt="" />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              {`${userName}`} {`${userLastName}`}
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              <SignOutButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
