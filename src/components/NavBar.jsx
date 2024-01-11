export default function NavBar() {
  return (
    <>
      <nav className="bg-[#18181B] h-12 flex flex-row gap-5 p-2 justify-between">
        <div className="flex">
          <img
            className="px-2"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png"
            alt="logo-twitch"
          />
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
    </>
  );
}
