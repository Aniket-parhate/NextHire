import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Companies = () => {
  const companies = [
    {
      name: "Google",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeQdBiMyEajJNRGrQGV8O2iv5kVI1723qYQrnV3b1B4f-DUl-LKsr4ljI&s=10",
      jobs: 120,
      industry: "Technology",
    },
    {
      name: "Amazon",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/amazon-dark-logo-png-transparent.png",
      jobs: 85,
      industry: "E-Commerce",
    },
    {
      name: "Microsoft",
      logo: "https://static.vecteezy.com/system/resources/previews/021/496/322/non_2x/microsoft-software-brand-logo-symbol-with-name-design-illustration-with-black-background-free-vector.jpg",
      jobs: 95,
      industry: "Technology",
    },
    {
      name: "Meta",
      logo: "https://static.vecteezy.com/system/resources/previews/026/135/319/non_2x/meta-social-media-symbol-logo-design-illustration-with-black-background-free-vector.jpg",
      jobs: 70,
      industry: "Social Media",
    },
    {
      name: "CRED",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/CRED_%28FinTech_company%29_logo.png",
      jobs: 40,
      industry: "Technology",
    },
    {
      name: "Oracle",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuq3L37BxW5U-peElrXwaA_nNtjrKGTUX2i07LT-POOuqmRS_U3TsK1Ed&s=10",
      jobs: 55,
      industry: "Software",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <>
      <div className="bg-black min-h-screen text-white">


        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center">

            <h1 className="text-5xl md:text-6xl font-bold">
              Discover Top Companies
            </h1>

            <p className="text-gray-400 mt-5 text-lg">
              Explore companies actively hiring on NextHire.
            </p>

            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-8 w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 outline-none focus:border-white transition"
            />

          </div>

        </section>


        <section className="max-w-7xl mx-auto px-6 pb-20">

          <h2 className="text-3xl font-bold mb-10">
            Featured Companies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company, index) => (
                <Link
                  key={index}
                  to={`/companies/${company.name.toLowerCase()}/jobs`}
                  className="block bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 hover:-translate-y-1 transition-all"
                >

                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-20 mb-6  rounded-xl p-2"
                  />

                  <h3 className="text-2xl font-semibold">
                    {company.name}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {company.industry}
                  </p>

                  <div className="mt-6 flex justify-between items-center">

                    <span className="text-white font-medium">
                      {company.jobs}+ Open Jobs
                    </span>

                    <button className="px-4 py-2 bg-white text-black rounded-xl font-semibold">
                      View Jobs
                    </button>

                  </div>

                </Link>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20">
                <h3 className="text-4xl font-bold">
                  Company Not Found
                </h3>

                <p className="text-gray-400 mt-3">
                  No company matches "{searchTerm}"
                </p>
              </div>
            )}

          </div>

        </section>

      </div>
    </>
  )
}

export default Companies