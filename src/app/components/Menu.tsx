"use client";

import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

type MenuProps = {
  patients: Patient[];
  onSelect: (patient: Patient) => void;
};

type Patient = {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
};

const Menu = ({ patients, onSelect }: MenuProps) => {
  if (!patients || patients.length === 0) {
    return (
      <div className="w-full lg:w-72 xl:w-80 bg-white rounded-xl p-4">
        <h2 className="text-lg font-bold mb-4">Patients</h2>
        <p className="text-sm text-gray-500">No patients found</p>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-72 xl:w-80 bg-white rounded-xl p-4 ">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">Patients</h2>
        <FaSearch className="text-xl" />
      </div>
<div className="max-h-250 overflow-y-auto">
      {patients.map((patient) => (
        <div
          className="flex items-center justify-between gap-2 w-full flex-1 mb-3 cursor-pointer hover:bg-cyan-100 p-2 rounded"
             key={patient.name}   
             onClick={() => onSelect(patient)}
        >
          <div className="flex gap-4">
            {patient.profile_picture ? (
              <Image
                src={patient.profile_picture}
                alt={patient.name}
                width={36}
                height={36}
                className="rounded-full"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  {patient.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}

            <div className="flex flex-col">
              <span className="text-sm font-medium">{patient.name}</span>
              <span className="text-sm text-gray-500">
                {patient.gender}, {patient.age}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
            <IoIosMore className="text-xl" />
          </div>
        </div>
      ))}
</div>

    </div>
  );
};

export default Menu;
