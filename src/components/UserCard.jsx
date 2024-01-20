import clsx from "clsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserCard() {
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
      <div
        key={post}
        className={clsx(
          "border",
          "border-gray-300",
          "w-50",
          "flex",
          "flex-col",
          "rounded-md",
          "bg-white",
          "mt-5"
        )}
      >
        <div className={clsx("bg-[#2900ae]", "text-[#2900ae]", "", "h-8")}>
          ______________
        </div>
        <img
          className={clsx(
            "rounded-full",
            "items-start",
            "w-16",
            "absolute",
            "p-2"
          )}
          src={post.userImg}
          alt=""
        />
        <p
          className={clsx(
            "px-20",
            "text-lg",
            "font-bold",
            "m-2",
            "text-black/80"
          )}
        >
          {post.userName}
        </p>
        <div className={clsx("flex", "justify-center")}>
          <button
            className={clsx(
              "p-2",
              "border",
              "w-64",
              "rounded-md",
              "bg-[#4825e8]",
              "text-white"
            )}
          >
            Follow
          </button>
        </div>
        <div
          className={clsx(
            "flex",
            "flex-col",
            "gap-1",
            "justify-items-start",
            "p-2"
          )}
        >
          <p className={clsx("text-[#595959]")}>
            Passionate Talented Young Full-Stack Developer, Writer and Student
            by Profession from India 🇮🇳
          </p>
          <p className={clsx("text-[#595959]", "font-bold")}>LOCATION</p>
          <p className={clsx("text-[#595959]")}>India</p>
          <p className={clsx("text-[#595959]", "font-bold")}>EDUCATION</p>
          <p className={clsx("text-[#595959]")}>Self-Taught</p>
          <p className={clsx("text-[#595959]", "font-bold")}>PRONOUNS</p>
          <p className={clsx("text-[#595959]")}>They</p>
          <p className={clsx("text-[#595959]", "font-bold")}>WORK</p>
          <p className={clsx("text-[#595959]")}>
            Self Employed Full Stack Developer
          </p>
          <p className={clsx("text-[#595959]", "font-bold")}>JOINED</p>
          <p className={clsx("text-[#595959]")}>May 25, 2022</p>
        </div>
      </div>
    </>
  );
}
