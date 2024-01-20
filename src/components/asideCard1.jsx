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
      </div>
    </>
  );
}
