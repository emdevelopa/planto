import Image from "next/image";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import bag from "../assets/bag.png";
import menu from "../assets/menu.png";
export default function Navbar() {
  return (
    <nav className="pl-[2em] pr-[4em] *:pt-[2em] flex justify-between items-center">
      <div>
        <Image src={logo} alt="logo" width={190} height={0} />
      </div>
      <div>
        <ul className="flex gap-10 items-center">
          <li
            className="hover:cursor-pointer border border-[#ffffff00]  hover:border-[gray] rounded-3xl
           px-2 py-1"
          >
            <a href="#">Home</a>
          </li>

          <li
            className="hover:cursor-pointer border border-[#ffffff00]  hover:border-[gray] rounded-3xl
           px-2 py-1"
          >
            <a href="#">Plants Type</a>
          </li>
          <li
            className="hover:cursor-pointer border border-[#ffffff00]  hover:border-[gray] rounded-3xl
           px-2 py-1"
          >
            <a href="#">More</a>
          </li>
          <li
            className="hover:cursor-pointer border border-[#ffffff00]  hover:border-[gray] rounded-3xl
           px-2 py-1"
          >
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <div className="hover:cursor-pointer border border-[#ffffff00]  hover:border-[gray] flex items-center justify-center rounded-[100%] p-2">
          <Image src={search} alt="search" width={20} height={0} />
        </div>
        <div className="hover:cursor-pointer border border-[#ffffff00]  hover:border-[gray] flex items-center justify-center rounded-[100%] p-2">
          <Image src={bag} alt="search" width={20} height={0} />
        </div>{" "}
        <div className="hover:cursor-pointer border border-[#ffffff00]  hover:border-[gray] flex items-center justify-center rounded-[100%] p-2">
          <Image src={menu} alt="search" width={20} height={0} />
        </div>
      </div>
    </nav>
  );
}
