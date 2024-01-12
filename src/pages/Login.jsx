import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, setError } = useForm();

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
      alert("Datos invalidos");
    }
  }

  return (
    <main
      className={clsx(
        "bg-black/50",
        "text-white",
        "flex flex-col",
        "justify-center, items-center"
      )}
    >
      <div className={clsx("flex flex-col justify-center items-center")}>
        <img
          className={clsx("w-16")}
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
          alt="DevLogo"
        />
        <h1>Join the DEV Community</h1>
        <p>DEV Community is a community of 1,231,240 amazing developers</p>
        <button>Continue with Apple</button>
        <button>Continue with Forem</button>
        <button>Continue with GitHub</button>
        <button>Continue with Twitter</button>
        <div>
          <p>or</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Email</p>
          <input
            className="text-black"
            type="text"
            {...register("email", {
              required: { value: true },
            })}
          />
          <p>Password</p>
          <input
            className="text-black"
            type="password"
            {...register("password", {
              required: { value: true },
            })}
          />
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
