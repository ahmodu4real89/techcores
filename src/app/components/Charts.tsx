'use client'
import {
    ResponsiveContainer,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
} from "recharts";
import { FaCaretDown } from "react-icons/fa";
import ChartCard from "./ChartCard";

type DiagnosisEntry = {
  month: string;
  year: number;
  blood_pressure: {
    systolic: { value: number; levels: string };
    diastolic: { value: number; levels: string };
  };
};

type Patient ={
    diagnosis_history:DiagnosisEntry[]
}

const monthShortMap: Record<string, string> = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec",
};

const BloodChart = ({ patient }: { patient: Patient }) => {
    if (!patient) return null;
    const chartData = patient.diagnosis_history?.map((item:DiagnosisEntry) => ({
        month: `${monthShortMap[item.month]}, ${item.year}`,
        systolic: item.blood_pressure?.systolic?.value ?? 0,
        diastolic: item.blood_pressure?.diastolic?.value ?? 0,
    }));

    const latest = patient.diagnosis_history?.[0] ?? null;
    return (
        <div className="flex flex-col lg:flex-row items-center gap-4 bg-violet-50 rounded-xl p-8">
            <div className="flex-2 w-full py-6">
                <div className="rounded-lg p-2 h-[300px] w-full">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-lg font-semibold">Blood Pressure</h1>
                        <div className="flex gap-2">
                            <p className="text-sm">Last 6 months</p>
                            <FaCaretDown />
                        </div>
                    </div>

                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip />
                        
                            <Line type="monotone" dataKey="systolic" stroke="#E66FD2" strokeWidth={3}  dot={{ r: 5, fill: "#E66FD2", stroke: "#E66FD2", strokeWidth: 2 }} />
                            <Line type="monotone" dataKey="diastolic" stroke="#7E6CAB" strokeWidth={3}   dot={{ r: 5, fill: "#8C6FE6", stroke: "#8C6FE6", strokeWidth: 2 }} />
                        </LineChart>
                    </ResponsiveContainer>

                </div>
            </div>

            <div className="flex-1 w-full" >
                <ChartCard
                    title="Systolic"
                    trend="down"
                    color="text-pink-400"
                    value={latest.blood_pressure.systolic.value}
                    status={latest.blood_pressure.systolic.levels}
                />

                <ChartCard
                    title="Diastolic"
                    trend="up"
                    color="text-violet-500"
                    value={latest.blood_pressure.diastolic.value}
                    status={latest.blood_pressure.diastolic.levels}
                />
            </div>
        </div>

    );
};

export default BloodChart;
