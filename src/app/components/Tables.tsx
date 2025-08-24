type PatientDiagnosist = {
  description: string
  name: string
  status: string
};

const Tables = ({ patient }: { patient?: PatientDiagnosist[] }) => {
   if (!patient || patient.length === 0) {
    return (
      <div className="w-full lg:w-72 xl:w-80 bg-white rounded-xl p-4">
        <h2 className="text-lg font-bold mb-4">Diagnosist</h2>
        <p className="text-sm text-gray-500">No Diagnosist found</p>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-xl p-4">
      <h1 className="mb-4 font-bold text-2xl">Diagnostic List</h1>
    
      
      <div className="h-50 overflow-y-auto">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-100 text-sm rounded-2xl">
            <tr>
              <th className="p-3 text-left">Problem/Diagnosis</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
          {patient.map((item, i)=>(
              <tr className="" key={i}>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.description}</td>
              <td className="p-2">{item.status}</td>
            </tr>
          ))}
          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tables

