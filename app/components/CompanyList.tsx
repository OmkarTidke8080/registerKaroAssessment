"use client";

import { useState } from "react";

interface Company {
  id: number;
  name: string;
  tagline: string;
  headquarters: string;
  locations: string[];
  directors: string[];
  about: string;
}

export default function CompanyList({ companies }: { companies: Company[] }) {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Company Showcase</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        {companies.map((company) => (
          <button
            key={company.id}
            onClick={() => setSelectedCompany(company)}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg focus:ring focus:ring-indigo-300 text-center"
          >
            {company.name}
          </button>
        ))}
      </div>

      {selectedCompany && (
        <div className="mt-8 w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
          {/* Company Name */}
          <h2 className="text-xl font-bold mb-4">{selectedCompany.name}</h2>

          {/* Tagline */}
          <p className="italic text-lg mb-4">{selectedCompany.tagline}</p>

          {/* Headquarters */}
          <h3 className="font-semibold mb-2">Headquarters:</h3>
          <p className="mb-4">{selectedCompany.headquarters}</p>

          {/* Locations */}
          <h3 className="font-semibold mb-2">Locations:</h3>
          {/* <ul className="list-disc list-inside mb-4">
            {selectedCompany.locations.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul> */}

          {/* Directors */}
          <h3 className="font-semibold mb-2">Directors:</h3>
          <ul className="list-disc list-inside mb-4">
            {selectedCompany.directors.map((director, index) => (
              <li key={index}>{director}</li>
            ))}
          </ul>

          {/* About */}
          <h3 className="font-semibold mb-2">About the Company:</h3>
          <p>{selectedCompany.about}</p>
        </div>
      )}
    </div>
  );
}
