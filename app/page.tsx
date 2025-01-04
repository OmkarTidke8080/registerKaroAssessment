import CompanyList from "./components/CompanyList";
import pool from "../utils/postgres";
import stylehub from "../public/stylehub.png";
import techCorp from "../public/techCorp.png";
import ecoWorld from "../public/ecoWorld.png";
import healthPlus from "../public/healthPlus.png";
import agriTech from "../public/agriTech.png";
import buildSmart from "../public/buildSmart.png";
import eduSmart from "../public/eduSmart.png";
import finSolve from "../public/finSolve.png";

const companyLogos: { [key: string]: string } = {
  StyleHub: stylehub.src, 
  TechCorp: techCorp.src, 
  HealthPlus: healthPlus.src, 
  EcoWorld: ecoWorld.src, 
  AgriTech: agriTech.src, 
  BuildSmart: buildSmart.src, 
  EduSmart: eduSmart.src, 
  FinSolve: finSolve.src, 
};

async function fetchCompanies() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM public.companies");
    client.release();

    return result.rows.map(
      (company: {
        id: any;
        name: any;
        tagline: any;
        headquarters: any;
        locations: any;
        details: any;
        about: any;
        directors: any;
      }) => ({
        id: company.id,
        name: company.name,
        tagline: company.tagline,
        headquarters: company.headquarters,
        locations: company.locations,
        details: company.details,
        about: company.about,
        directors: company.directors,
        logo: companyLogos[company.name] || "", 
      })
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Home() {
  const companies = await fetchCompanies();

  return <CompanyList companies={companies} />;
}
