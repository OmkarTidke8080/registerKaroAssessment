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
  logo: string; // Logo is a string URL
}

export default function CompanyList({ companies }: { companies: Company[] }) {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold opacity-90 mb-4">
          Companies Registered with
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold opacity-90">
          <span className="text-blue-800">Register</span><span className="text-yellow-700">Karo.</span>
        </h1>
      </div>

      {/* Company List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4">
        {companies.map((company) => (
          <div
            key={company.id}
            onClick={() => setSelectedCompany(company)}
            className="cursor-pointer bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Company Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={company.logo} // Use logo as string URL
                alt={`${company.name} logo`}
                className="h-24 w-24 object-contain"
              />
            </div>
            {/* Company Name */}
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              {company.name}
            </h3>
            {/* Company Tagline */}
            <p className="text-sm text-center text-gray-500">
              {company.tagline}
            </p>
          </div>
        ))}
      </div>

      {/* Selected Company Details Section */}
      {selectedCompany && (
        <div className="mt-12 w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          {/* Company Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={selectedCompany.logo} // Use logo as string URL
              alt={`${selectedCompany.name} logo`}
              className="h-32 w-32 object-contain mb-4"
            />
          </div>

          {/* Company Name */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            {selectedCompany.name}
          </h2>

          {/* Tagline */}
          <p className="italic text-lg text-center text-gray-600 mb-6">
            "{selectedCompany.tagline}"
          </p>

          {/* Headquarters */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Headquarters:
            </h3>
            <p className="text-gray-600">{selectedCompany.headquarters}</p>
          </div>

          {/* Locations */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Locations:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {selectedCompany.locations.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>

          {/* Directors */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Directors:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {selectedCompany.directors.map((director, index) => (
                <li key={index}>{director}</li>
              ))}
            </ul>
          </div>

          {/* About the Company */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              About the Company:
            </h3>
            <p className="text-gray-600">{selectedCompany.about}</p>
          </div>
        </div>
      )}
    </div>
  );
}
