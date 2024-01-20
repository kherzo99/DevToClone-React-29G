import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import UserCard from "../components/UserCard";
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
                  <div className={clsx("flex", "p-3")}>
                    <img
                      src={post.userImg}
                      alt="avatar"
                      className={clsx("rounded-full", "w-12", "")}
                    />
                  </div>
                  <div className="">
                    <p className="text-[22px] text-[#404040]">
                      {post.userName}
                    </p>
                    <p className="text-[#7b7b7b]">{post.date}</p>
                  </div>
                </div>

                <div className="flex justify-between flex-col gap-5">
                  <div className="inline-flex place-items-center gap-5">
                    <a
                      href=""
                      className="p-2 hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      💖 12
                    </a>
                    <a
                      href=""
                      className="p-2 hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      🦄 3
                    </a>
                    <a
                      href=""
                      className="p-2 hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      🤯 2
                    </a>
                    <a
                      href=""
                      className="p-2 hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      🙌 2
                    </a>
                    <a
                      href=""
                      className="p-2 hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      🔥 2
                    </a>
                  </div>
                  <h1 className={clsx("text-[36px] text-[#171717] font-bold")}>
                    {post.title}
                  </h1>
                  <div className={clsx("pt-2 flex", "gap-3")}>
                    <a
                      href=""
                      className="p-2 hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      #{post.hashtag1}
                    </a>
                    <a
                      href=""
                      className="p-2 hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      #{post.hashtag2}
                    </a>
                    <a
                      href=""
                      className="p-2 hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      #{post.hashtag3}
                    </a>
                    <a
                      href=""
                      className="p-2 hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      #{post.hashtag4}
                    </a>
                  </div>
                  <p className={clsx("text-[20px]")}>{post.postContent}</p>
                </div>
              </div>
            </div>
          </section>

          <section className={clsx("col-span-3")}>
            <UserCard />
          </section>
        </div>
      </main>
    </>
  );
}
