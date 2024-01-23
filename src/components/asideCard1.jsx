import clsx from "clsx";
import houseIcon from "/src/assets/icons8-casa-48.png";
import micrIcon from "/src/assets/icons8-micrófono-94.png";
import videoIcon from "/src/assets/icons8-emoji-camara-de-pelicula-48.png";
import tagIcon from "/src/assets/icons8-etiqueta-48.png";
import faqIcon from "/src/assets/icons8-idea-48.png";
import bagsIcon from "/src/assets/icons8-bolsas-de-compra-48.png";
import heartIcon from "/src/assets/icons8-traje-de-corazon-48.png";
import devIcon from "/src/assets/dev-to-svgrepo-com.svg";
import contactIcon from "/src/assets/icons8-bocina-postal-48.png";
import guidesIcon from "/src/assets/icons8-libro-48.png";
import thinkingIcon from "/src/assets/icons8-pensador-48.png";
import conductIcon from "/src/assets/icons8-pulgar-48.png";
import privacyIcon from "/src/assets/icons8-cara-de-nerd-48.png";
import eyesIcon from "/src/assets/icons8-ojos-emoji-48.png";
import twitterIcon from "/src/assets/twitter.svg";
import gitHubIcon from "/src/assets/github.svg";
import fbIcon from "/src/assets/facebook.svg";
import twitchIcon from "/src/assets/twitch.svg";
import igIcon from "/src/assets/instagram.svg";
import mIcon from "/src/assets/circulo-m.svg";

export default function AsideCard1() {
  return (
    <>
      <div
        className={clsx(
          "bg-[#f5f5f5]",
          "flex",
          "flex-col",
          "w-full",
          "rounded-md"
        )}
      >
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={houseIcon} alt="" />
          <p>Home</p>
        </div>

        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={micrIcon} alt="" />
          <p>Podcasts</p>
        </div>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={videoIcon} alt="" />
          <p>Videos</p>
        </div>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={tagIcon} alt="" />
          <p>Tags</p>
        </div>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={faqIcon} alt="" />
          <p>FAQ</p>
        </div>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={bagsIcon} alt="" />
          <p>Forem Shop</p>
        </div>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={heartIcon} alt="" />
          <p>Advertise on Dev</p>
        </div>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={devIcon} alt="" />
          <p>About</p>
        </div>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={contactIcon} alt="" />
          <p>Contact</p>
        </div>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={guidesIcon} alt="" />
          <p>Guides</p>
        </div>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={thinkingIcon} alt="" />
          <p>Software comparision</p>
        </div>
        <h1 className={clsx("py-5", "font-bold")}>Other</h1>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={conductIcon} alt="" />
          <p>Code of conduct</p>
        </div>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={privacyIcon} alt="" />
          <p>Privacy Policy</p>
        </div>
        <div
          className={clsx(
            "flex",
            "gap-2",
            "text-[#404040]",
            "hover:bg-[#e3e0f4]",
            "hover:text-[#391fb9]",
            "hover:underline",
            "hover:cursor-pointer",
            "p-2",
            "rounded-md"
          )}
        >
          <img className={clsx("w-5")} src={eyesIcon} alt="" />
          <p>Terms of use</p>
        </div>
        <div
          className={clsx(
            "mt-5",
            "gap-2",
            "flex",
            "w-max-24",
            "justify-center"
          )}
        >
          <img
            className={clsx(
              "w-8",
              "opacity-80",
              "hover:bg-[#391fb9]/20",
              "hover:cursor-pointer",
              "rounded-md",
              "p-1"
            )}
            src={twitterIcon}
            alt=""
          />
          <img
            className={clsx(
              "w-8",
              "opacity-80",
              "hover:bg-[#391fb9]/20",
              "hover:cursor-pointer",
              "rounded-md",
              "p-1"
            )}
            src={fbIcon}
            alt=""
          />
          <img
            className={clsx(
              "w-8",
              "opacity-80",
              "hover:bg-[#391fb9]/20",
              "hover:cursor-pointer",
              "rounded-md",
              "p-1"
            )}
            src={gitHubIcon}
            alt=""
          />
          <img
            className={clsx(
              "w-8",
              "opacity-80",
              "hover:bg-[#391fb9]/20",
              "hover:cursor-pointer",
              "rounded-md",
              "p-1"
            )}
            src={igIcon}
            alt=""
          />
          <img
            className={clsx(
              "w-8",
              "opacity-80",
              "hover:bg-[#391fb9]/20",
              "hover:cursor-pointer",
              "rounded-md",
              "p-1"
            )}
            src={twitchIcon}
            alt=""
          />
          <img
            className={clsx(
              "w-8",
              "opacity-80",
              "hover:bg-[#391fb9]/20",
              "hover:cursor-pointer",
              "rounded-md",
              "p-1"
            )}
            src={mIcon}
            alt=""
          />
        </div>
      </div>

      <div
        className={clsx(
          "mt-10",
          " hidden",
          "w-full",
          "md:flex",
          "flex-col",
          " h-72",
          " overflow-auto",
          " p-2 , bg-[#ffffff] ",
          "m-3",
          "border ",
          "border-[#eaeaea] ",
          "text-[#404040]",
          "rounded-md"
        )}
      >
        <div className="card-actions justify-between flex p-1">
          <p className="text-sm">DEV Community</p>
          <a href="">
            <img
              className="w-5 p-1"
              src="https://img.icons8.com/ios-glyphs/30/ellipsis.png"
              alt="ellipsis"
            />
          </a>
        </div>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--zezDNDfF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8nuyrw43yfedpbj2iieb.jpg"
          alt="devtoimage"
          className="rounded-xl p-1"
        />
        <h1 className="p-3 pb-0 text-2xl font-bold">
          Its time to change it up.
        </h1>
        <p className="p-2 text-[#4e4e4e]">
          You can change your feed and see more relevant posts by adding a
          rating to different tags on DEV. Head here to adjust your weights.
        </p>
      </div>
      <div className="hidden w-full md:flex flex-col card p-2  bg-[#ffffff] m-3 border border-[#eaeaea] text-[#404040] rounded-md">
        <div className="card-actions justify-between p-1 flex">
          <p className="text-sm">DEV Community</p>
          <a href="">
            <img
              className="w-5 p-1"
              src="https://img.icons8.com/ios-glyphs/30/ellipsis.png"
              alt="ellipsis"
            />
          </a>
        </div>
        <div className="p-1 pt-4">
          <p className=" text-[#4e4e4e]">
            DEV runs on 100% open source code known as
          </p>
          <a href="" className="text-[#4825e8] underline ">
            Forem.
          </a>
        </div>
        <div className="p-1 ">
          <p className=" text-[#4e4e4e]">
            Contribute to the codebase or host your own!
          </p>
        </div>
        <div className="p-1 pt-3">
          <p className=" text-[#4e4e4e] font-bold">Check these out! 👇</p>
        </div>
        <div className="p-1 pb-3">
          <a href="" className="text-[#4825e8] underline ">
            Main Forem Repo
          </a>
          <br />
          <a href="" className="text-[#4825e8] underline ">
            Self-Host Instructions
          </a>
        </div>
      </div>
    </>
  );
}
