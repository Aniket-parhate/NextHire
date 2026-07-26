import React from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      experience: "1-3 Years",
      salary: "$15,000 - $22,000",
      description:
        "We are looking for a Frontend Developer skilled in React, JavaScript and Tailwind CSS.",
      skills: ["React", "JavaScript", "Tailwind", "HTML", "CSS"]
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Amazon",
      location: "Remote",
      experience: "3-5 Years",
      salary: "$18,000 - $28,000",
      description:
        "Build scalable APIs and backend services using Node.js and MongoDB.",
      skills: ["Node.js", "Express", "MongoDB", "JWT", "REST API"]
    }
  ];

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Job Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">

      <div className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <h1 className="text-5xl font-bold">
            {job.title}
          </h1>

          <p className="text-xl text-gray-400 mt-4">
            {job.company}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <span className="px-4 py-2 bg-zinc-800 rounded-full">
              📍 {job.location}
            </span>

            <span className="px-4 py-2 bg-zinc-800 rounded-full">
              ⏳ {job.experience}
            </span>

            <span className="px-4 py-2 bg-zinc-800 rounded-full">
              💰 {job.salary}
            </span>

          </div>

          <div className="mt-10">

            <h2 className="text-2xl font-semibold mb-4">
              Job Description
            </h2>

            <p className="text-gray-300 leading-relaxed">
              {job.description}
            </p>

          </div>

          <div className="mt-10">

            <h2 className="text-2xl font-semibold mb-4">
              Required Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-zinc-800 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          <button className="mt-12 px-10 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
            Apply Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default JobDetails;