import clsx from "clsx";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function NewUserEmail() {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm();

  async function onSubmit(data) {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        userImg: data.userImg,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      alert("User created succesfully!");
    } else {
      alert("User not created, try again.");
    }
  }
  // setError("root", { message: "Invalid Data" });
  return (
    <>
      <main
        className={clsx(
          "bg-white",
          "text-black",
          "flex flex-col",
          "justify-center, items-center"
        )}
      >
        <div
          className={clsx(
            "flex flex-col",
            "justify-center",
            "items-center",
            "gap-3",
            "pt-10",
            "bg-white"
          )}
        >
          <img
            className={clsx("w-16")}
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt="DevLogo"
          />
          <h1 className={clsx("text-3xl font-bold")}>Join the DEV Community</h1>
          <p className={clsx("text-black/60")}>
            DEV Community is a community of 1,231,240 amazing developers
          </p>
        </div>
      </main>

      <div
        className={clsx("flex justify-center", "pt-10", "pb-10", "bg-white")}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={clsx(
            " text-black",
            "flex flex-col justify-center",
            "border border-black/20",
            "rounded-md",
            "w-3/6",
            "p-5",
            "gap-3"
          )}
        >
          <h1 className={clsx("text-lg", "font-bold")}>Create your account</h1>
          <p>Profile Image</p>
          <input
            className={clsx("border border-black/20", "p-2", "rounded-md")}
            type="text"
            id="userImg"
            {...register("userImg", {
              required: { value: true, message: "Profile picture is required" },
            })}
          />
          {errors.name && (
            <p className={clsx("text-red-700", "text-xs")}>
              {errors.userImg?.message}
            </p>
          )}
          <p>Name *</p>
          <input
            className={clsx("border border-black/20", "p-2", "rounded-md")}
            type="text"
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
          />
          {errors.name && (
            <p className={clsx("text-red-700", "text-xs")}>
              {errors.name?.message}
            </p>
          )}

          <p>Last Name*</p>
          <input
            className={clsx("border border-black/20", "p-2", "rounded-md")}
            type="text"
            {...register("lastName", {
              required: { value: true, message: "Last name is required" },
            })}
          />
          {errors.lastName && (
            <p className={clsx("text-red-700", "text-xs")}>
              {errors.lastName?.message}
            </p>
          )}
          <p>Email*</p>
          <input
            className={clsx("border border-black/20", "p-2", "rounded-md")}
            type="text"
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
          />
          {errors.email && (
            <p className={clsx("text-red-700", "text-xs")}>
              {errors.email?.message}
            </p>
          )}
          <p>Password*</p>
          <input
            className={clsx("border border-black/20", "p-2", "rounded-md")}
            type="password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
            })}
          />
          {errors.password && (
            <p className={clsx("text-red-700", "text-xs")}>
              {errors.password?.message}
            </p>
          )}
          <input
            // onClick={() => navigate("/login")}
            className={clsx("bg-purple-600 text-white rounded-md p-1 m-1 w-32")}
            type="submit"
            value="Sign up"
          />
        </form>
      </div>
    </>
  );
}
