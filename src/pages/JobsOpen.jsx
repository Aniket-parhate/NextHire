import React from "react";
import { Link, useParams } from "react-router-dom";

const JobsOpen = () => {
    const { companyName } = useParams();

    const companyJobs = {
        google: [
            {
                id: 1,
                title: "Frontend Developer",
                location: "Bangalore",
                type: "Full Time",
                salary: "₹12 - ₹18 LPA",
            },
            {
                id: 2,
                title: "Backend Engineer",
                location: "Hyderabad",
                type: "Full Time",
                salary: "₹15 - ₹25 LPA",
            },
        ],

        amazon: [
            {
                id: 3,
                title: "DevOps Engineer",
                location: "Pune",
                type: "Hybrid",
                salary: "₹10 - ₹20 LPA",
            },
        ],

        microsoft: [
            {
                id: 4,
                title: "Cloud Engineer",
                location: "Remote",
                type: "Remote",
                salary: "₹18 - ₹30 LPA",
            },
        ],
    };

    const jobs = companyJobs[companyName] || [];

    if (jobs.length === 0) {
        return (
            <div className="bg-black min-h-screen text-white flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">
                        No Jobs Found
                    </h1>

                    <p className="text-gray-400 mt-4 text-lg">
                        There are currently no open positions at{" "}
                        <span className="capitalize">{companyName}</span>.
                    </p>

                    <Link
                        to="/companies"
                        className="inline-block mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
                    >
                        Back To Companies
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen text-white">

            {/* Header */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="text-center">

                    <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                        {jobs.length} Open Positions
                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold capitalize mt-8">
                        {companyName}
                    </h1>

                    <p className="text-gray-400 mt-4 text-lg">
                        Explore exciting career opportunities at {companyName}
                    </p>

                </div>

            </section>

            {/* Jobs Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-white hover:-translate-y-2 transition-all duration-300"
                        >

                            <div className="flex justify-between items-start">

                                <div>
                                    <h2 className="text-2xl font-semibold">
                                        {job.title}
                                    </h2>

                                    <p className="text-gray-400 mt-3">
                                        📍 {job.location}
                                    </p>
                                </div>

                                <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                                    {job.type}
                                </span>

                            </div>

                            <div className="mt-6">

                                <p className="text-lg font-medium">
                                    💰 {job.salary}
                                </p>

                            </div>

                            <Link
                                to={`/jobs/${job.id}`}
                                className="block text-center mt-8 py-3 bg-white text-black rounded-xl font-semibold hover:scale-[1.03] transition"
                            >
                                View Job Details
                            </Link>

                        </div>
                    ))}

                </div>

            </section>

        </div>
    );
};

export default JobsOpen;