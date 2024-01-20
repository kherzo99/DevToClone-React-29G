import clsx from "clsx";
import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import AsideCard1 from "../components/asideCard1";
import RightSectionCard from "../components/RightSectionCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={clsx("text-black", "m-5 mt-0")}>
        <div className={clsx("grid grid-cols-12")}>
          <aside className={clsx("col-span-2")}>
            <AsideCard1 />
          </aside>
          <section className={clsx("col-span-7")}>
            <div className="text-lg m-1">
              <button className="p-3  hover:bg-white hover:rounded-lg hover:text-[#4925e8] text-black font-bold">
                Relevant
              </button>
              <button className="p-3  hover:bg-white hover:rounded-lg hover:text-[#4925e8] text-[#404040]">
                Latest
              </button>
              <button className="p-3  hover:bg-white hover:rounded-lg hover:text-[#4925e8] text-[#404040]">
                Top
              </button>
            </div>
            <PostCard />
          </section>
          <section className={clsx("col-span-3")}>
            <RightSectionCard />
          </section>
        </div>
      </main>
    </>
  );
}
