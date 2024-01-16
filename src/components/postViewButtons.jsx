import clsx from "clsx";
import heartIcon from "/src/assets/corazon.svg";
import commentIcon from "/src/assets/puntos-de-comentario.svg";
import bookMark from "/src/assets/libro-marcador.svg";

export default function PostViewButtons() {
  return (
    <>
      <div className={clsx("flex", "flex-col", "pt-10")}>
        <div
          className={clsx(
            "flex",
            "flex-col",
            "items-center",
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
          <p>26</p>
        </div>
        <div
          className={clsx(
            "flex",
            "flex-col",
            "items-center",
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
          <img className={clsx("w-5")} src={commentIcon} alt="" />
          <p>24</p>
        </div>
        <div
          className={clsx(
            "flex",
            "flex-col",
            "items-center",
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
          <img className={clsx("w-5")} src={bookMark} alt="" />
          <p>3</p>
        </div>
      </div>
    </>
  );
}
