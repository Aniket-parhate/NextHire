import React, { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    const [experience, setExperience] = useState("");

    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "Google",
            location: "Bangalore",
            experience: "1-3 Years"
        },
        {
            id: 2,
            title: "Backend Engineer",
            company: "Amazon",
            location: "Remote",
            experience: "3-5 Years"
        },
        {
            id: 3,
            title: "DevOps Engineer",
            company: "Microsoft",
            location: "Pune",
            experience: "1-3 Years"
        },
        {
            id: 4,
            title: "React Developer",
            company: "Oracle",
            location: "Hyderabad",
            experience: "Fresher"
        }
    ];

    const filteredJobs = jobs.filter((job) => {
        const matchesTitle =
            searchTerm === "" ||
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesLocation =
            location === "" ||
            job.location.toLowerCase().includes(location.toLowerCase());

        const matchesExperience =
            experience === "" ||
            experience === "Experience" ||
            job.experience === experience;

        return (
            matchesTitle &&
            matchesLocation &&
            matchesExperience
        );
    });
    const categories = [
        "💻 Software Development",
        "☁️ DevOps & Cloud",
        "📱 Mobile Development",
        "🎨 UI/UX Design",
        "📊 Data Science",
        "📈 Marketing",
        "🔐 Cyber Security",
        "💼 Business Analyst",
    ];

    const trendingSearches = [
        "React Developer",
        "Node.js Developer",
        "DevOps Engineer",
        "Frontend Developer",
        "Backend Engineer",
    ];

    return (
        <div className="bg-black min-h-screen text-white">


            <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">

                <div className="text-center">

                    <h1 className="text-5xl md:text-7xl font-bold">
                        Find Your
                        <span className="text-gray-400"> Dream Job</span>
                    </h1>

                    <p className="text-gray-400 text-lg mt-6">
                        10,000+ opportunities waiting for you
                    </p>


                    <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-4 max-w-5xl mx-auto">

                        <div className="grid md:grid-cols-4 gap-4">

                            <div className="flex items-center gap-3 bg-black rounded-2xl px-4 py-4 border border-zinc-800">
                                <Search size={20} className="text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Job title, skills, company"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="bg-transparent outline-none w-full text-white"
                                />
                            </div>

                            <div className="flex items-center gap-3 bg-black rounded-2xl px-4 py-4 border border-zinc-800">
                                <Briefcase size={20} className="text-gray-500" />
                                <select
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    className="bg-transparent outline-none w-full text-white"
                                >
                                    <option value="" className="bg-zinc-900 text-white">
                                        Experience
                                    </option>
                                    <option value="Fresher" className="bg-zinc-900 text-white">
                                        Fresher
                                    </option>
                                    <option value="1-3 Years" className="bg-zinc-900 text-white">
                                        1-3 Years
                                    </option>
                                    <option value="3-5 Years" className="bg-zinc-900 text-white">
                                        3-5 Years
                                    </option>
                                    <option value="5+ Years" className="bg-zinc-900 text-white">
                                        5+ Years
                                    </option>
                                </select>
                            </div>

                            <div className="flex items-center gap-3 bg-black rounded-2xl px-4 py-4 border border-zinc-800">
                                <MapPin size={20} className="text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="bg-transparent outline-none w-full text-white"
                                />
                            </div>

                            <button className="bg-white text-black rounded-2xl font-semibold hover:scale-105 transition">
                                Search Jobs
                            </button>

                        </div>
                    </div>


                    <div className="flex flex-wrap justify-center gap-3 mt-8">

                        {trendingSearches.map((item, index) => (
                            <button
                                key={index}
                                className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-gray-300 hover:border-white hover:text-white transition"
                            >
                                {item}
                            </button>
                        ))}

                    </div>

                </div>

            </section>

            <section className="max-w-7xl mx-auto px-6 pb-24">

                <h2 className="text-3xl font-bold mb-8">
                    Search Results
                </h2>

                {filteredJobs.length > 0 ? (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {filteredJobs.map((job, index) => (

                            <Link
                                to={`/jobs/${job.id}`}
                                className="block bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-white hover:-translate-y-1 transition-all"
                            >
                                <h3 className="text-xl font-semibold">
                                    {job.title}
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    {job.company}
                                </p>

                                <p className="text-gray-400 mt-2">
                                    📍 {job.location}
                                </p>

                                <p className="text-gray-400 mt-2">
                                    ⏳ {job.experience}
                                </p>

                                <button className="w-full mt-6 py-3 bg-white text-black rounded-xl font-semibold">
                                    View Details
                                </button>
                            </Link>
                        ))}

                    </div>

                ) : (

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center">

                        <h3 className="text-3xl font-bold">
                            No Jobs Found
                        </h3>

                        <p className="text-gray-400 mt-3">
                            Try changing the job title, location, or experience filter.
                        </p>

                    </div>

                )}

            </section>



            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="grid md:grid-cols-4 gap-6">

                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 hover:-translate-y-1 transition-all cursor-pointer"
                        >
                            <h3 className="font-semibold text-lg">
                                {category}
                            </h3>
                        </div>
                    ))}

                </div>

            </section>

        </div>
    );
};

export default Jobs;