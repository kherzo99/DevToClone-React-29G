import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginButtons from "../components/LoginButtons";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (responseData?.token) {
      localStorage.setItem("token", responseData.token);
      navigate("/");
    } else {
      setError("root", { message: "Invalid data, try again." });
    }
  }

  return (
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
          "pt-10"
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

        <LoginButtons />

        <div className={clsx("font-bold")}>
          <h1 className={clsx("font-bold")}>or</h1>
        </div>

        <form
          className={clsx("flex flex-col", "items-start", "gap-3", "w-5/6")}
          onSubmit={handleSubmit(onSubmit)}
        >
          {errors.root && (
            <p
              className={clsx(
                "bg-red-500/50",
                "text-white",
                "w-full",
                "rounded-md",
                "p-1",
                "border border-red-500"
              )}
            >
              {errors.root?.message}
            </p>
          )}
          <p>Email</p>
          <input
            className={clsx(
              "border border-black/20",
              "rounded-md",
              "p-1",
              "w-full",
              "h-10"
            )}
            type="text"
            id="email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
          />
          {errors.email && (
            <p className={clsx("text-red-500", "text-xs")}>
              {errors.email?.message}
            </p>
          )}
          <p>Password</p>
          <input
            className={clsx(
              "border border-black/20",
              "rounded-md",
              "p-1",
              "w-full",
              "h-10"
              // "hover: border border-[#4925e8]"
            )}
            type="password"
            id="password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
            })}
          />
          {errors.password && (
            <p className={clsx("text-red-500", "text-xs")}>
              {errors.password?.message}
            </p>
          )}
          <div
            className={clsx(
              "bg-white",
              "text-black",
              "flex",
              "justify-between"
            )}
          >
            <div className={clsx("flex", "justify-between")}>
              <input className={clsx("")} type="checkbox" />
              <p className={clsx("")}>Remember Me</p>
            </div>
            <a className={clsx("text-[#522bec]", "px-24")} href="">
              Forgot Password?
            </a>
          </div>
          <button
            className={clsx(
              "border border-black/20",
              "p-2",
              "rounded-md",
              "w-full",
              "mt-5",
              "bg-[#4925e8]",
              "text-white",
              "hover:bg-[#391fb9]"
            )}
          >
            Log in
          </button>
          <div className={clsx("w-full", "flex", "justify-center")}>
            <p
              className={clsx(
                "w-5/6",
                "flex",
                "justify-center",
                "text-sm",
                "text-gray-400",
                "italic"
              )}
            >
              By signing in, you are agreeing to our privacy policy, terms of
              use and code of conduct.
            </p>
          </div>
          <div className={clsx("pt-5")}>
            <svg
              className="w-full h-1 items-center"
              viewBox="0 0 24 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="gray"
                strokeWidth="0.5"
              />
            </svg>
          </div>
          <div className={clsx("p-10", "flex", "justify-between")}>
            <p className={clsx("px-5")}>
              New to DEV Community?
              <Link className={clsx("text-[#522bec]", "px-2")} to="/createUser">
                Create account.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
