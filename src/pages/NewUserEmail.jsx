import clsx from "clsx";
import { useForm } from "react-hook-form";

export default function NewUserEmail() {
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
      console.log("User created succesfully!");
    } else {
      console.log("User not created, try again.");
    }
  }
  // setError("root", { message: "Invalid Data" });
  return (
    <>
      <div className={clsx("flex justify-center")}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={clsx(
            "bg-black text-gray-400",
            "flex flex-col justify-center",
            "w-44"
          )}
        >
          <h1>Create your account</h1>
          <p>Profile Image</p>
          <input
            className={clsx("border border-gray-700")}
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
          <p>Name</p>
          <input
            className={clsx("border border-gray-700")}
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

          <p>Last Name</p>
          <input
            className={clsx("border border-gray-700")}
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
          <p>Email</p>
          <input
            className={clsx("border border-gray-700")}
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
          <p>Password</p>
          <input
            className={clsx("border border-gray-700")}
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
            className={clsx("bg-purple-600 text-white rounded-md p-1 m-1")}
            type="submit"
            value="Sign up"
          />
        </form>
      </div>
    </>
  );
}
