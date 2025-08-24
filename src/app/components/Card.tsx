import Image from "next/image";

interface CardProps {
  icon: string;
  label: string;
  value: string;
  status: string;
  bgColor?: string;
   fontawe?: React.ReactNode;
}

 const Card = ({ icon, label, value, status, bgColor = "bg-gray-100", fontawe }: CardProps)=> {
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
      <div className="flex gap-2 mt-4"> 
        {fontawe && <div className="text-xl">{fontawe}</div>}
          <p className="text-sm  text-gray-600 ">{status}</p>
         
      </div>

    </div>
  );
}

export default Card