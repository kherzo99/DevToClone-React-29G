import clsx from "clsx";
import { useState } from "react";

export default function PostCard() {
  const [posts, setPosts] = useState([]);

  fetch("http://localhost:3001/posts")
    .then((response) => response.json())
    .then((data) => {
      setPosts(data.data);
    }, []);

  return (
    <>
      <h1>ALL POSTS</h1>
      <section>
        {posts.map((post) => {
          return (
            <div
              key={`post-${post.id}`}
              className={clsx(
                "flex flex-col items-center border border-yellow-500"
              )}
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

                <div className="pl-10">
                  <a
                    className="text-3xl text-[#171717] font-bold"
                    href="/postdetail"
                  >
                    {post.title}
                  </a>
                  <div className="pt-2 flex">
                    <a
                      href=""
                      className="hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      #{post.hashtag1}
                    </a>
                    <a
                      href=""
                      className="hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      #{post.hashtag2}
                    </a>
                    <a
                      href=""
                      className="hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      #{post.hashtag3}
                    </a>
                    <a
                      href=""
                      className="hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3] hover:border-[#d3d3d3] p-1 text-sm text-[#7b7b7b]"
                    >
                      #{post.hashtag4}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <div className="inline-flex place-items-center">
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
                    <div className="flex place-items-center m-1 p-1 hover:border hover:rounded-md hover:text-[#171717] hover:bg-[#f3f3f3]  text-sm text-[#7b7b7b]">
                      <a className="p-1 ">
                        <img
                          className="w-5"
                          src="src/assets/icons8-comment.svg"
                          alt="comments"
                        />
                      </a>
                      <span className="block align-middle text-[#404040] p-1 text-sm">
                        6 Comments
                      </span>
                    </div>
                    <div className="flex place-items-center m-1">
                      <span className="block align-middle text-[#404040] text-sm">
                        {post.timeToRead}
                      </span>
                      <a className="hover:bg-[#e3e0f4] p-1 hover:rounded-lg cursor-pointer">
                        <img
                          className="w-6"
                          src="src/assets/icons8-bookmark.svg"
                          alt="bookmark"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
