import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import RightSectionCard from "../components/RightSectionCard";
import PostViewButtons from "../components/postViewButtons";
import NavBar from "../components/NavBar";

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.data);
      });
  }, [id]);
  return (
    <>
      <NavBar />
      <main className={clsx("text-black", "m-5 mt-0")}>
        <div className={clsx("grid grid-cols-12")}>
          <aside className={clsx("col-span-1")}>
            <PostViewButtons />
          </aside>
          <section className={clsx("col-span-8")}>
            <div
              className={clsx(
                "bg-white",
                "flex",
                "flex-col",
                "items-center",
                "border",
                "border-black/20",
                "rounded-lg",
                "m-5"
              )}
              key={`post-${post.id}`}
            >
              <figure>
                <img src={post.postImg} alt="devtoPost" />
              </figure>
              <div className="card-body p-1 m-2">
                <div id="profile-name-and-pic-container" className="flex">
                  <div className="flex m-1 w-9">
                    <img
                      src={post.userImg}
                      alt="avatar"
                      className="rounded-full"
                    />
                  </div>
                  <div className="m-1">
                    <p className="text-sm text-[#404040]">{post.userName}</p>
                    <p className="text-xs text-[#7b7b7b]">{post.date}</p>
                  </div>
                </div>

                <h1 className={clsx("text-3xl text-[#171717] font-bold")}>
                  {post.title}
                </h1>
                <div className="flex justify-between flex-col gap-5">
                  <div className="inline-flex place-items-center gap-5">
                    <a
                      href=""
                      className="hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      💖 12
                    </a>
                    <a
                      href=""
                      className="hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      🦄 3
                    </a>
                    <a
                      href=""
                      className="hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      🤯 2
                    </a>
                    <a
                      href=""
                      className="hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      🙌 2
                    </a>
                    <a
                      href=""
                      className="hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      🔥 2
                    </a>
                  </div>
                  <p>{post.postContent}</p>
                </div>
              </div>
            </div>
          </section>

          <section className={clsx("col-span-3")}>
            <RightSectionCard />
          </section>
        </div>
      </main>
    </>
  );
}
