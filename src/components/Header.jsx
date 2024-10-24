import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="flex w-full px-12 md:px-0 sm:px-0 py-4 justify-between items-center" >
      <div className="flex pl-4">
        <Image src="/images/Group 242.png" alt="logo" width={20} height={17} />
        <p className="ml-2 font-semibold text-xl">Savemytaxes.in</p>
      </div>
      <div className="flex justify-around w-[400px]">
        <p className="hover:text-green-900 hover:font-semibold">Services</p>
        <p className="hover:text-green-900 hover:font-semibold">Tax Guide</p>
        <p className="hover:text-green-900 hover:font-semibold">Support</p>
        <p className="hover:text-green-900 hover:font-semibold">Company</p>
      </div>
      <div className="flex w-[260px] gap-3">
        <div className="flex  items-center px-2 py-1 border-2 border-black rounded-lg ">
          <p>Select Language</p>
          <RiArrowDropDownLine />
        </div>
        <div className="px-5 py-1 border-2 border-black rounded-lg">
          Login
        </div>
      </div>
    </div>
  )
}

export default Header