import Image from "next/image"
import UserDropdown from "./Dropdown"
import { name } from "@/data"
interface HeaderProps {
    type: String,

};
const Header = ({type}: HeaderProps) => {
  return (
    <div className="hidden md:flex justify-between items-center bg-white rounded-b-lg p-4">
            <div className="flex gap-2 items-center">
              <h1 className="text-2xl font-normal">Dashboard</h1>
             {type === "admin" && (<span className='bg-[#070E30]  uppercase text-white text-sm px-2 py-1 rounded-lg'>
                ADMIN
              </span>)} 
            </div>
    
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/svg/f7_person-crop-circle.svg"
                  alt="person"
                  width={30}
                  height={30}
                />
                <span className="font-medium">{type === "admin" && `${name.admin.firstName} ${name.admin.lastName}`}</span>
                <UserDropdown />
              </div>
            </div>
          </div>
  )
}

export default Header
