import Image from "next/image"
import { AiOutlineInsurance } from "react-icons/ai"
import { BsGenderFemale } from "react-icons/bs"
import { FaRegCalendar } from "react-icons/fa"
import { FiPhone } from "react-icons/fi"

type Patient = {
    emergency_contact: string
    gender: string
    age: number
    date_of_birth: string
    name: string
    phone_number: string
    profile_picture: string
    insurance_type: string
};

const UserCard = ({ patient }: { patient: Patient }) => {
    if (!patient) {
        return (
            <div className="w-full lg:w-72 xl:w-80 bg-white rounded-xl p-4">
                <h2 className="text-lg font-bold mb-4">Diagnosist</h2>
                <p className="text-sm text-gray-500">No Diagnosist found</p>
            </div>
        );
    }
    return (
        <div className="w-full mx-auto bg-white p-4 rounded-xl ">
            <div className="flex items-center justify-center flex-col my-6">
                {patient.profile_picture ? (
                    <Image
                        key={patient.name}
                        src={patient.profile_picture}
                        alt={patient.name}
                        width={200}
                        height={200}
                        className="rounded-full mb-2"
                    />
                ) : (
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                            {patient.name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                )}
                <p className="text-2xl font-semibold">{patient.name}</p>


                
            <div className=" mt-6">
                <div className="flex gap-4 mt-2 ">
                    <div className="p-3 rounded-full bg-gray-100">
                        <FaRegCalendar className="text-xl" />
                    </div>
                    <div>
                        <span className="text-sm text-gray-500 block">Date Of Birth</span>
                        <span className="text-sm font-medium">{patient.date_of_birth}</span>
                    </div>
                </div>

                <div className="flex gap-4 mt-2 ">
                    <div className="p-3 rounded-full bg-gray-100">
                        <BsGenderFemale className="text-xl" />
                    </div>
                    <div>
                        <span className="text-sm text-gray-500 block">Gender</span>
                        <span className="text-sm font-medium">{patient.gender}</span>
                    </div>
                </div>

                <div className="flex gap-4 mt-2 ">
                    <div className="p-3 rounded-full bg-gray-100">
                        <FiPhone className="text-xl" />
                    </div>
                    <div>
                        <span className="text-sm text-gray-500 block">Contact Info</span>
                        <span className="text-sm font-medium">{patient.phone_number}</span>
                    </div>
                </div>

                <div className="flex gap-4 mt-2 ">
                    <div className="p-3 rounded-full bg-gray-100">
                        <FiPhone className="text-xl" />
                    </div>
                    <div>
                        <span className="text-sm text-gray-500 block">Emergency Contacts</span>
                        <span className="text-sm font-medium">{patient.emergency_contact}</span>
                    </div>
                </div>

                <div className="flex gap-4 mt-2 ">
                    <div className="p-3 rounded-full bg-gray-100">
                        <AiOutlineInsurance className="text-xl" />
                    </div>
                    <div>
                        <span className="text-sm text-gray-500 block">Insurance Provider</span>
                        <span className="text-sm font-medium">{patient.insurance_type}</span>
                    </div>
                </div>
            </div>
            </div>




            <div className="flex justify-center mt-6">
                <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm transition">
                    Show All Information
                </button>
            </div>
        </div>

    )
}

export default UserCard

