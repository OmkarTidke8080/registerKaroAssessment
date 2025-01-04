// app/components/CompanyList.tsx
"use client";

import { useState } from "react";

interface Company {
  id: number;
  name: string;
  details: string;
  directors: string[];
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
          <h2 className="text-xl font-bold mb-4">{selectedCompany.name}</h2>
          <p className="mb-4">{selectedCompany.details}</p>
          <h3 className="font-semibold mb-2">Directors:</h3>
          <ul className="list-disc list-inside">
            {selectedCompany.directors.map((director, index) => (
              <li key={index}>{director}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
