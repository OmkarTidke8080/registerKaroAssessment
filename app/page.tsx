// app/page.tsx
import CompanyList from "./components/CompanyList";
import pool from "../utils/postgres";

async function fetchCompanies() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM public.companies");
    client.release();

    return result.rows.map((company: { id: any; name: any; tagline: any; headquarters: any; locations: any; details: any; about: any; directors: any; }) => ({
      id: company.id,
      name: company.name,
      tagline: company.tagline,
      headquarters: company.headquarters,
      locations: company.locations, 
      details: company.details,
      about: company.about,
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
