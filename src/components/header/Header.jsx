import Link from "next/link";
import ImageHolder from "../common/ImageHolder";
import NavBar from "../common/NavBar";
import Contacts from "../common/Contacts";

function Header() {
  return (
    <header className=" px-12 py-[10px]">
      <div className="flex justify-between items-center border-b border-lightGray">
        <Link className="basis-1/4" href={"/"}>
          <ImageHolder
            alt={"icon image"}
            priority={true}
            src={"/logo.png"}
            sizes={`127px`}
            className={"relative w-[127px] h-[105px]"}
          ></ImageHolder>
        </Link>
        <NavBar
          className={
            "basis-1/2 flex items-center gap-12 justify-center text-darkGray text-base font-semibold"
          }
        />
        <Contacts />
      </div>
    </header>
  );
}

export default Header;
