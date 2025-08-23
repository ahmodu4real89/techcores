import Image from "next/image";

interface CardProps {
  icon: string;
  label: string;
  value: string;
  status: string;
  bgColor?: string;
}

 const Card = ({ icon, label, value, status, bgColor = "bg-gray-100" }: CardProps)=> {
  return (
    <div className={`${bgColor} p-6 rounded-xl`}>
      <Image 
        src={icon} 
        alt={label} 
        height={96} 
        width={96} 
        className=" mb-4" 
      />
      <p className="text-base">{label}</p>
      <p className="font-bold text-3xl">{value}</p>
      <p className="text-sm mt-4 text-gray-600 ">{status}</p>
    </div>
  );
}

export default Card