import clsx from "clsx";
import appleIcon from "/src/assets/apple.svg";
import foremIcon from "/src/assets/banco.svg";
import gitHubIcon from "/src/assets/github.svg";
import twitterIcon from "/src/assets/twitter.svg";

export default function LoginButtons() {
  return (
    <>
      <button
        className={clsx(
          "border border-black/20",
          "p-3",
          "w-5/6",
          "rounded-md",
          "flex",
          "space-x-40",
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
          "space-x-40",
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
          "space-x-40",
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
          "space-x-40",
          "hover:bg-gray-300/10"
        )}
      >
        <img className={clsx("w-5")} src={twitterIcon} alt="" />
        <p className={clsx("text-sm")}>Continue with Twitter</p>
      </button>
    </>
  );
}
