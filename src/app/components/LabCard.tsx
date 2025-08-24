import { FiDownload } from "react-icons/fi"
type Lab = []

const LabCard = ({ patient }: { patient: Lab[] }) => {
  if (!patient || patient.length === 0) {
    return (
      <div className="w-full lg:w-72 xl:w-80 bg-white rounded-xl p-4">
        <h2 className="text-lg font-bold mb-4">Lab Reasult</h2>
        <p className="text-sm text-gray-500">No Lab Reasult found</p>
      </div>
    );
  }
  return (
<div className=" bg-white rounded-lg shadow-sm mt-8 p-4">
   <h1 className="text-2xl mb-6 font-bold">Lab Results</h1>

   <div className=" h-65 overflow-y-auto">
     
      {patient.map((item, id) => (
        <div className="flex justify-between my-4 " key={id}>
          <p className="text-sm font-light"  >{item}</p>
          <FiDownload />
        </div>
      ))}
    </div>
</div>
    
  )
}

export default LabCard