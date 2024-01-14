import clsx from "clsx";
import appleIcon from "/src/assets/apple.svg";
import foremIcon from "/src/assets/banco.svg";
import gitHubIcon from "/src/assets/github.svg";
import twitterIcon from "/src/assets/twitter.svg";
import emailIcon from "/src/assets/sobre.svg";
import { useNavigate } from "react-router-dom";

export default function Createuser() {
  const navigate = useNavigate();

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
          <button
            className={clsx(
              "border border-black/20",
              "p-3",
              "w-5/6",
              "rounded-md",
              "flex",
              "space-x-32",
              "hover:bg-gray-300/10"
            )}
          >
            <img className={clsx("w-5")} src={appleIcon} alt="" />
            <p className={clsx("text-sm")}>Continue with Apple</p>
          </button>
          <button
            className={clsx(
              "border border-black/20",
              "p-3",
              "w-5/6",
              "rounded-md",
              "flex",
              "space-x-32",
              "hover:bg-gray-300/10"
            )}
          >
            <img className={clsx("w-5")} src={foremIcon} alt="" />
            <p className={clsx("text-sm")}>Continue with Forem</p>
          </button>
          <button
            className={clsx(
              "border border-black/20",
              "p-3",
              "w-5/6",
              "rounded-md",
              "flex",
              "space-x-32",
              "hover:bg-gray-300/10"
            )}
          >
            <img className={clsx("w-5")} src={gitHubIcon} alt="" />
            <p className={clsx("text-sm")}>Continue with GitHub</p>
          </button>
          <button
            className={clsx(
              "border border-black/20",
              "p-3",
              "w-5/6",
              "rounded-md",
              "flex",
              "space-x-32",
              "hover:bg-gray-300/10"
            )}
          >
            <img className={clsx("w-5")} src={twitterIcon} alt="" />
            <p className={clsx("text-sm")}>Continue with Twitter</p>
          </button>
          <button
            onClick={() => navigate("/createUserEmail")}
            className={clsx(
              "border border-black/20",
              "p-3",
              "w-5/6",
              "rounded-md",
              "flex",
              "space-x-32",
              "hover:bg-gray-300/10"
            )}
          >
            <img className={clsx("w-5")} src={emailIcon} alt="" />
            <p className={clsx("text-sm")}>Sign up with Email</p>
          </button>
        </div>
      </main>
    </>
  );
}
