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
            src={"/group31.png"}
            className={"relative w-[127px] h-[105px]"}
          ></ImageHolder>
        </Link>
        <NavBar />
        <Contacts />
      </div>
    </header>
  );
}

export default Header;
