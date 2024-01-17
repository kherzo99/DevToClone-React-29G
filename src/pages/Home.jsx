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
