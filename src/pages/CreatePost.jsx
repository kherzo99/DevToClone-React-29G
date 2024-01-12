import { useForm } from "react-hook-form";
import { clsx } from "clsx";

export default function CreatePost() {
  const { register, handleSubmit } = useForm();

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
        userImg: data.userImg,
        userName: data.userName,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let dataTest = await response.json();
    console.log("data", dataTest.data);
    if (response.ok) {
      alert("Post created! (:");
    } else {
      alert("Something went wrong ):");
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>POST TITLE</h1>
          <input
            className={clsx("border border-gray-700")}
            type="text"
            {...register("title", {
              required: { value: true, message: "Post title is required" },
            })}
          />
          <h1>Date</h1>
          <input
            className={clsx("border border-gray-700")}
            type="text"
            {...register("date", {
              required: { value: true, message: "Date is required" },
            })}
          />
          <h1>User Name</h1>
          <input
            className={clsx("border border-gray-700")}
            type="text"
            {...register("userName", {
              required: { value: true, message: "userName is required" },
            })}
          />
          <h1>Post Img</h1>
          <input
            className={clsx("border border-gray-700")}
            type="text"
            {...register("postImg", {
              required: { value: true, message: "Image is required" },
            })}
          />
          <h1>Post Content</h1>
          <input
            className={clsx("border border-gray-700")}
            type="text"
            {...register("postContent", {
              required: { value: true, message: "Content is required" },
            })}
          />
          <h1>Hashtag 1</h1>
          <input
            className={clsx("border border-gray-700")}
            type="text"
            {...register("hashtag1", {
              required: { value: true, message: "Hashtag is required" },
            })}
          />
          <h1>Hashtag 2</h1>
          <input
            className={clsx("border border-gray-700")}
            type="text"
            {...register("hashtag2", {
              required: { value: true, message: "Hashtag is required" },
            })}
          />
          <h1>Hashtag 3</h1>
          <input
            className={clsx("border border-gray-700")}
            type="text"
            {...register("hashtag3", {
              required: { value: true, message: "Hashtag is required" },
            })}
          />
          <h1>Hashtag 4</h1>
          <input
            className={clsx("border border-gray-700")}
            type="text"
            {...register("hashtag4", {
              required: { value: true, message: "Hashtag is required" },
            })}
          />
          <h1>Time to Read</h1>
          <input
            className={clsx("border border-gray-700")}
            type="text"
            {...register("timeToRead", {
              required: { value: true, message: "Hashtag is required" },
            })}
          />
          <input
            className={clsx(
              "bg-purple-600 text-white rounded-md p-1 m-1",
              "cursor-pointer"
            )}
            type="submit"
            value="POST"
          />
        </form>
      </div>
    </>
  );
}
