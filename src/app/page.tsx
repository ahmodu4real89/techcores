import Navbar from "./components/Navbar";
import PatientProvider from "./components/PatientProvider";

async function fetchMedicalRecords() {
  const res = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        Authorization: "Basic " + Buffer.from("coalition:skills-test").toString("base64"),
      },
    }
  );

  if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);

  return res.json();
}

export default async function Home() {
  const data = await fetchMedicalRecords();
  
  return (
    <>
      <Navbar />
      <PatientProvider patients={data} />
    </>
  );
}
