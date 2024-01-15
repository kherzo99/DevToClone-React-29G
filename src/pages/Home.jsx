import clsx from "clsx";
import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import AsideCard1 from "../components/asideCard1";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={clsx("text-black", "m-5 mt-0", "border border-red-500")}>
        <div className={clsx("grid grid-cols-12")}>
          <aside className={clsx("col-span-2", "border border-red-500")}>
            <AsideCard1 />
          </aside>
          <section className={clsx("col-span-7", "border border-red-500")}>
            <PostCard />
          </section>
          <section className={clsx("col-span-3", "border border-red-500")}>
            <h1>Right Section</h1>
          </section>
        </div>
      </main>
    </>
  );
}
