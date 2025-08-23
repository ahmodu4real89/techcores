import Image from "next/image"
import { CiCalendar, CiHome } from "react-icons/ci"
import { FiMessageSquare } from "react-icons/fi"
import { IoMdMore } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { MdCreditCard, MdOutlinePeopleAlt } from "react-icons/md"

const Navbar = () => {
    return (
        <div className='flex items-center  p-4 m-6 bg-white rounded-full'>
            <div className='hidden md:flex items-center gap-2 text-xs  px-2 flex-1'>
                <Image src='/TestLogo.png' alt='' width={200} height={100} />

            </div>

            <div className="flex items-center gap-6 justify-center w-full text-black flex-1 text-lg">
                <div className="flex gap-2 ">
                    <CiHome className="text-2xl" />
                    <span className=" ">  Overview</span>
                </div>
                <div className="flex gap-2 bg-green-600 px-8 py-2 rounded-full">
                    <MdOutlinePeopleAlt className="text-2xl" />
                    <span className="  ">  Patient</span>
                </div>
                <div className="flex gap-2 ">
                    <CiCalendar className="text-2xl" />
                    <span className=" ">  Schedule</span>
                </div>

                <div className="flex gap-2 ">
                    <FiMessageSquare className="text-2xl" />
                    <span className=" ">  Message</span>
                </div>
                <div className="flex gap-2 ">
                    <MdCreditCard className="text-2xl" />
                    <span className=" ">  Transaction</span>
                </div>

            </div>

            <div className="flex items-center gap-6 justify-end w-full flex-1">

                <Image src='/doctor.png' alt="" width={36} height={36} className="rounded-full" />
                <div className="flex flex-col">
                    <span className="text-sm leading-3 font-medium"> Dr. John Simeon</span>
                    <span className="text-sm text-gray-500 text-right">General Practitioner</span>
                </div>

                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
                    <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer">
                        <IoSettingsOutline className="text-2xl" />

                    </div>
                </div>

                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
                    <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer">
                        <IoMdMore className="text-2xl" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar