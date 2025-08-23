/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import Menu from "./Menu";
import UserCard from "./UserCard";
import BloodChart from "./Charts";
import LabCard from "./LabCard";
import Tables from "./Tables";
import Card from "./Card";


export default function PatientProvider({ patients }: { patients: any }) {
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      <Menu patients={patients} onSelect={setSelectedPatient} />

      <div className="flex-1 flex flex-col gap-4">

        <div className="bg-white rounded-xl p-4">
          <h1 className="text-2xl font-bold mb-4">Diagnostic History</h1>
          <BloodChart patient={selectedPatient} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <Card
              icon="/respiratory rate.svg"
              label="Respiratory Rate"
              value={`${selectedPatient.diagnosis_history[0]?.respiratory_rate?.value ?? "--"} bpm`}
              status="Normal"
              bgColor="bg-sky-100"
            />

            <Card
              icon="/temperature.svg"
              label="Temperature"
              value={`${selectedPatient.diagnosis_history[0]?.temperature?.value ?? "--"}°F`}
              status="Normal"
              bgColor="bg-fuchsia-100"
            />

            <Card
              icon="/HeartBPM.svg"
              label="Heart Rate"
              value={`${selectedPatient.diagnosis_history[0]?.heart_rate?.value ?? "--"} bpm`}
              status="Lower than Average"
              bgColor="bg-pink-100"
            />
          </div>
        </div>

        <Tables patient={selectedPatient.diagnostic_list} />
      </div>

      <div className="w-full lg:w-1/5 rounded-xl">
        <UserCard patient={selectedPatient} />
        <LabCard patient={selectedPatient.lab_results} />
      </div>
    </div>
  );
}
