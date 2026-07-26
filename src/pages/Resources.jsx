import React from "react";
import { Search, FileText, Briefcase, IndianRupee, TrendingUp } from "lucide-react";

const Resources = () => {
    const categories = [
        {
            icon: <FileText size={32} />,
            title: "Resume Tips",
            description: "Build ATS-friendly resumes that get noticed."
        },
        {
            icon: <Briefcase size={32} />,
            title: "Interview Prep",
            description: "Prepare for technical and HR interviews."
        },
        {
            icon: <IndianRupee size={32} />,
            title: "Salary Guides",
            description: "Explore salaries across different roles."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Career Growth",
            description: "Roadmaps, skills, and career advice."
        }
    ];

    const featuredResources = [
        {
            title: "How to Create an ATS-Friendly Resume",
            category: "Resume Tips",
            readTime: "5 min read"
        },
        {
            title: "Top 50 React Interview Questions",
            category: "Interview Prep",
            readTime: "8 min read"
        },
        {
            title: "Complete DevOps Roadmap for Beginners",
            category: "Career Growth",
            readTime: "10 min read"
        },
        {
            title: "Node.js Developer Salary Guide 2026",
            category: "Salary Guide",
            readTime: "6 min read"
        }
    ];

    return (
        <div className="bg-black min-h-screen text-white">

          
            <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">

                <div className="text-center">

                    <h1 className="text-5xl md:text-7xl font-bold">
                        Career
                        <span className="text-gray-400"> Resources</span>
                    </h1>

                    <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                        Resume tips, interview preparation, salary guides,
                        and career growth resources.
                    </p>

               
                    <div className="max-w-3xl mx-auto mt-10">

                        <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4">

                            <Search
                                size={22}
                                className="text-gray-500"
                            />

                            <input
                                type="text"
                                placeholder="Search resources..."
                                className="bg-transparent outline-none ml-3 w-full text-white"
                            />

                        </div>

                    </div>

                </div>

            </section>

       
            <section className="max-w-7xl mx-auto px-6 pb-24">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >

                            <div className="w-14 h-14 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold mt-6">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 mt-3">
                                {item.description}
                            </p>

                        </div>
                    ))}

                </div>

            </section>

         
            <section className="max-w-7xl mx-auto px-6 pb-24">

                <div className="mb-12">

                    <h2 className="text-4xl font-bold">
                        Featured Resources
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Popular career guides and articles.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {featuredResources.map((resource, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition-all duration-300 cursor-pointer"
                        >

                            <span className="inline-block px-3 py-1 rounded-full bg-black border border-zinc-800 text-sm text-gray-300">
                                {resource.category}
                            </span>

                            <h3 className="text-2xl font-semibold mt-5">
                                {resource.title}
                            </h3>

                            <p className="text-gray-400 mt-4">
                                {resource.readTime}
                            </p>

                            <button className="mt-6 text-white font-medium hover:underline">
                                Read Article →
                            </button>

                        </div>
                    ))}

                </div>

            </section>

        </div>
    );
};

export default Resources;