import React from 'react'
import { FaCaretDown, FaCaretUp, FaCircle } from 'react-icons/fa'

type ChartCardProps= {
  title: string;
  value: string | number;
  status: string;
  trend?: "up" | "down"; 
  color?: string; 
};

const ChartCard = ({ title, value, status, trend = "down", color = "text-pink-600" }: ChartCardProps) => {
  return (
      <div className="mb-4 rounded-xl p-4">
      
      <div className="flex items-center gap-2">
        <FaCircle className={`${color} text-xs`} />
        <p className="text-sm font-bold">{title}</p>
      </div>    
      <h2 className="text-2xl font-bold my-4">{value}</h2>   
      <div className="flex items-center gap-2 text-gray-600">
        {trend === "down" ? <FaCaretDown className="text-black" /> : <FaCaretUp className="text-black" />}
        <p className="text-sm">{status}</p>
      </div>
    </div>
  )
}

export default ChartCard