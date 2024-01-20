import { useForm } from "react-hook-form";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import xIcon from "/src/assets/x.svg";
import bIcon from "/src/assets/b.svg";
import yIcon from "/src/assets/yo.svg";
import linkIcon from "/src/assets/enlace.png";
import numberListIcon from "/src/assets/lista-de-numeros.png";
import listIcon from "/src/assets/menu.png";
import hIcon from "/src/assets/h.png";
import quoteIcon from "/src/assets/cotizar.png";
import codeIcon from "/src/assets/codificacion.png";
import codeIcon2 from "/src/assets/programacion.png";
import embedIcon from "/src/assets/perno-de-luz.png";
import pictureIcon from "/src/assets/foto.png";

export default function CreatePost() {
  const [showImgInput, setShowImgInput] = useState(false);
  const [showCard1, setShowCard1] = useState(false);

  const handleMouseEnter1 = () => {
    setShowCard1(true);
  };

  const handleMouseEnter1Leave = () => {
    setShowCard1(false);
  };

  const handleShowImgInput = () => {
    setShowImgInput(!showImgInput);
  };

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const userName = localStorage.getItem("userName");
  const userLastName = localStorage.getItem("userLastName");
  const userProfImg = localStorage.getItem("userImg");

  async function onSubmit(data) {
    const response = await fetch("http://localhost:3001/posts", {
      method: "POST",
      body: JSON.stringify({
        date: data.date,
        hashtag1: data.hashtag1,
        hashtag2: data.hashtag2,
        hashtag3: data.hashtag3,
        hashtag4: data.hashtag4,
        postContent: data.postContent,
        postImg: data.postImg,
        timeToRead: data.timeToRead,
        title: data.title,
        userImg: userProfImg,
        userName: userName + " " + userLastName,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let dataTest = await response.json();
    console.log("data", dataTest.data);
    if (response.ok) {
      alert("Post created! (:");
      navigate("/");
    } else {
      alert("Something went wrong ):");
    }
  }

  return (
    <>
      <main className={clsx("w-full")}>
        <div className={clsx("flex", "justify-between", "m-2")}>
          <div className={clsx("flex")}>
            <div className={clsx("flex")}>
              <a href="/">
                <img
                  className={clsx("w-14")}
                  src="	https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                  alt="devtoicon"
                />
              </a>
              <p className={clsx("pl-3 text-[#404040] pt-3")}>Create a post</p>
            </div>
          </div>
          <div className={clsx("flex ")}>
            <p
              className={clsx(
                "px-4",
                "py-2",
                "rounded",
                "text-neutral-500",
                "hover:bg-indigo-600/10",
                "hover:text-indigo-600"
              )}
            >
              Edit
            </p>
            <p
              className={clsx(
                "px-4",
                "py-2",
                "rounded",
                "text-neutral-500",
                "hover:bg-indigo-600/10",
                "hover:text-indigo-600"
              )}
            >
              Preview
            </p>
          </div>

          <a
            className={clsx(
              "px-4",
              "py-2",
              "rounded",
              "text-neutral-500",
              "hover:bg-indigo-600/10",
              "hover:text-indigo-600"
            )}
            href="/"
          >
            <img className={clsx("w-5")} src={xIcon} alt="" />
          </a>
        </div>
        <div className={clsx("grid grid-cols-5 m-10 ")}>
          <div className={clsx("grid col-span-3")}>
            <div
              className={clsx(
                "block",
                "w-full",
                "bg-white",
                "rounded-lg",
                "outline outline-1 outline-neutral-500/20"
              )}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={clsx(
                  "flex",
                  "flex-col",
                  "w-full",
                  "gap-8",
                  "px-5",
                  "pt-5 ",
                  "items-start"
                )}
              >
                <button
                  onClick={handleShowImgInput}
                  className={clsx(
                    "rounded-lg",
                    "border",
                    "m-2",
                    "p-3",
                    "shadow",
                    "text-[#404040]",
                    "w-48"
                  )}
                >
                  Add a cover image
                </button>

                {showImgInput && (
                  <div>
                    <input
                      className={clsx(
                        "border",
                        "rounded-lg",
                        "m-2",
                        "mt-0",
                        "p-2",
                        "shadow",
                        "text-[#404040]",
                        "w-92"
                      )}
                      type="text"
                      placeholder="Image URL..."
                      {...register("postImg", {
                        required: { value: true, message: "Image is required" },
                      })}
                    />
                  </div>
                )}

                <input
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseEnter1Leave}
                  type="text"
                  placeholder="New Post title here..."
                  className={clsx(
                    "text-5xl",
                    "placeholder-[#404040]",
                    " focus:placeholder-[#404040]",
                    "outline-none",
                    "font-bold",
                    "rounded p-2 bg-white"
                  )}
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Post title is required",
                    },
                  })}
                />
                <p className={clsx("text-black/60")}>Add up to 4 tags...</p>
                <div className={clsx("flex", "gap-3")}>
                  <input
                    className={clsx(
                      "border",
                      "rounded-lg",
                      "m-2",
                      "mt-0",
                      "p-2",
                      "shadow",
                      "text-[#404040]",
                      "w-28",
                      "p-2"
                    )}
                    placeholder="#"
                    type="text"
                    {...register("hashtag1", {
                      required: { value: true, message: "Hashtag is required" },
                    })}
                  />
                  <input
                    className={clsx(
                      "border",
                      "rounded-lg",
                      "m-2",
                      "mt-0",
                      "p-2",
                      "shadow",
                      "text-[#404040]",
                      "w-28",
                      "p-2"
                    )}
                    placeholder="#"
                    type="text"
                    {...register("hashtag2", {
                      required: { value: true, message: "Hashtag is required" },
                    })}
                  />
                  <input
                    className={clsx(
                      "border",
                      "rounded-lg",
                      "m-2",
                      "mt-0",
                      "p-2",
                      "shadow",
                      "text-[#404040]",
                      "w-28",
                      "p-2"
                    )}
                    placeholder="#"
                    type="text"
                    {...register("hashtag3", {
                      required: { value: true, message: "Hashtag is required" },
                    })}
                  />
                  <input
                    className={clsx(
                      "border",
                      "rounded-lg",
                      "m-2",
                      "mt-0",
                      "p-2",
                      "shadow",
                      "text-[#404040]",
                      "w-28",
                      "p-2"
                    )}
                    placeholder="#"
                    type="text"
                    {...register("hashtag4", {
                      required: { value: true, message: "Hashtag is required" },
                    })}
                  />
                </div>

                <div className="flex items-center justify-between h-10 px-6 -m-6 text-4xl bg-neutral-300/20 w-full">
                  <div className="flex gap-2">
                    <a
                      href=""
                      className="p-1 hover:bg-[#010102] hover:rounded-lg cursor-pointer"
                    >
                      <img className="w-6" src={bIcon} alt="bold" />
                    </a>
                    <a
                      href=""
                      className="p-1 hover:bg-[#e3e0f4] hover:rounded-lg cursor-pointer"
                    >
                      <img className="w-6" src={yIcon} alt="italic" />
                    </a>
                    <a
                      href=""
                      className="p-1 hover:bg-[#e3e0f4] hover:rounded-lg cursor-pointer"
                    >
                      <img className="w-6" src={linkIcon} alt="file" />
                    </a>
                    <a
                      href=""
                      className="p-1 hover:bg-[#e3e0f4] hover:rounded-lg cursor-pointer"
                    >
                      <img className="w-6" src={numberListIcon} alt="list" />
                    </a>
                    <a
                      href=""
                      className="p-1 hover:bg-[#e3e0f4] hover:rounded-lg cursor-pointer"
                    >
                      <img className="w-6" src={listIcon} alt="pointslist" />
                    </a>
                    <a
                      href=""
                      className="p-1 hover:bg-[#e3e0f4] hover:rounded-lg cursor-pointer"
                    >
                      <img className="w-6" src={hIcon} alt="H" />
                    </a>
                    <a
                      href=""
                      className="p-1 hover:bg-[#e3e0f4] hover:rounded-lg cursor-pointer"
                    >
                      <img className="w-8" src={quoteIcon} alt="quote" />
                    </a>
                    <a
                      href=""
                      className="p-1 hover:bg-[#e3e0f4] hover:rounded-lg cursor-pointer"
                    >
                      <img className="w-6" src={codeIcon} alt="code" />
                    </a>
                    <a
                      href=""
                      className="p-1 hover:bg-[#e3e0f4] hover:rounded-lg cursor-pointer"
                    >
                      <img className="w-6" src={codeIcon2} alt="codeblock" />
                    </a>
                    <a
                      href=""
                      className="p-1 hover:bg-[#e3e0f4] hover:rounded-lg cursor-pointer"
                    >
                      <img className="w-6" src={embedIcon} alt="embed" />
                    </a>
                    <a
                      href=""
                      className="p-1 hover:bg-[#e3e0f4] hover:rounded-lg cursor-pointer"
                    >
                      <img className="w-6" src={pictureIcon} alt="uploadimg" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img
                        className="w-5 p-1"
                        src="https://img.icons8.com/ios-glyphs/30/ellipsis.png"
                        alt="ellipsis"
                      />
                    </a>
                  </div>
                </div>
                <input
                  placeholder="Write your post content here..."
                  className={clsx(
                    "w-full",
                    "h-48",
                    "text-lg",
                    "font-mono",
                    "placeholder-[#404040]",
                    "focus:placeholder-[#404040]",
                    " outline-none",
                    "border",
                    "rounded",
                    "p-2",
                    " bg-white"
                  )}
                  {...register("postContent", {
                    required: { value: true, message: "Content is required" },
                  })}
                />
                <div className={clsx("flex")}>
                  <input
                    className={clsx(
                      "border",
                      "rounded-lg",
                      "m-2",
                      "mt-0",
                      "p-2",
                      "shadow",
                      "text-[#404040]",
                      "w-28",
                      "p-2"
                    )}
                    type="text"
                    placeholder="Date"
                    {...register("date", {
                      required: { value: true, message: "Date is required" },
                    })}
                  />

                  <input
                    className={clsx(
                      "border",
                      "rounded-lg",
                      "m-2",
                      "mt-0",
                      "p-2",
                      "shadow",
                      "text-[#404040]",
                      "w-32",
                      "p-2"
                    )}
                    type="text"
                    placeholder="Time to Read..."
                    {...register("timeToRead", {
                      required: { value: true, message: "Hashtag is required" },
                    })}
                  />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="submit"
                    value="Publish"
                    className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-600/90"
                  />
                  <button
                    className={clsx(
                      "px-4 py-2 rounded text-neutral-500 hover:bg-indigo-600/10 hover:text-indigo-600"
                    )}
                  >
                    Save draft
                  </button>

                  <button className="px-4 py-2.5 text-sm rounded text-neutral-500 hover:bg-indigo-600/10 hover:text-indigo-600">
                    Revert new changes
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="grid col-span-2 ">
            <article className="flex gap-5 px-8">
              {showCard1 && (
                <div className="absolute w-72 top-[5rem]">
                  <h2 className="font-bold text-[#404040]">
                    Writing a Great Post Title
                  </h2>
                  <p className="text-[#404040]/90">
                    Think of your post title as a super short (but compelling!)
                    description — like an overview of the actual post in one
                    short sentence. Use keywords where appropriate to help
                    ensure people can find your post by search.
                  </p>
                </div>
              )}
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
