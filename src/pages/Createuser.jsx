import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Createuser() {
  return (
    <>
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
          <button>Sign up with Apple</button>
          <button>Sign up with Forem</button>
          <button>Sign up with GitHub</button>
          <button>Sign up with Twitter</button>
          <Link className={clsx("text-purple-800")} to="/createUserEmail">
            Sign up with Email
          </Link>
          <div></div>
        </div>
      </main>
    </>
  );
}
