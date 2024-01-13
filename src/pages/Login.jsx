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
        <div className="relative">
          {/* Elemento base */}
          <div className="bg-blue-500 h-24 w-24 absolute top-0 left-0">
            {/* Contenido del elemento base */}
          </div>

          {/* Elemento superpuesto */}
          <div className="bg-red-500 h-16 w-16 absolute top-4 left-4">
            {/* Contenido del elemento superpuesto */}
          </div>
        </div>
        <div>
          <p>or</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.root && (
            <p
              className={clsx(
                "bg-red-500/50",
                "text-white",
                "w-60",
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
            className="text-black"
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
            className="text-black"
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
          <div>
            <p>Rememeber Me</p>
            <a href="">Forgot Password?</a>
          </div>
          <button>Login</button>
          <p>
            By signing in, you are agreeing to our privacy policy, terms of use
            and code of conduct.
          </p>
          <div>
            <p> rayita</p>
          </div>
          <p>
            New to DEV Community?
            <Link className={clsx("text-purple-600")} to="/createUser">
              Create account.
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
