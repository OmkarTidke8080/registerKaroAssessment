// app/page.tsx
import CompanyList from "./components/CompanyList";
import pool from "../utils/postgres";

async function fetchCompanies() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM public.companies");
    client.release();

    return result.rows.map((company) => ({
      id: company.id,
      name: company.name,
      details: company.details,
      directors: company.directors,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Home() {
  const companies = await fetchCompanies();

  return <CompanyList companies={companies} />;
}
