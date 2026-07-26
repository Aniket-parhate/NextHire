const Home = () => {
    const logos = [
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMq_p2LmS22XA0VCu6xIlPzswju2eTxSy8v-wr-lbNA&s=10",
        "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
        "https://static1.squarespace.com/static/545070b7e4b03ea792c15d50/t/67cb2e93cd5da7536fefbc0c/1784572392618/",
        "https://www.executivegrapevine.com/uploads/articles/story-jp-morgan-rto-plea.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Kone_Logo_2023.svg/3840px-Kone_Logo_2023.svg.png",
        "https://companieslogo.com/img/orig/WIT.D-91671412.png?t=1739861069"
    ];

    return (
        <div className="bg-black min-h-screen text-white">
       
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center">

                    <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                        🚀 Trusted by 10,000+ Job Seekers
                    </span>

                    <h1 className="text-6xl md:text-7xl font-bold mt-8 leading-tight">
                        Find Your
                        <span className="text-gray-400"> Dream Job</span>
                        <br />
                        In Minutes
                    </h1>

                    <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                        Discover thousands of opportunities from top companies.
                        Apply with one click and track your applications.
                    </p>

                    <div className="flex justify-center gap-4 mt-10">
                        <button className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
                            Find Jobs
                        </button>

                        <button className="px-8 py-4 border border-zinc-700 rounded-xl hover:border-white transition">
                            Post a Job
                        </button>
                    </div>

                </div>
            </section>
            <section className="relative py-16 overflow-hidden">
                <p className="text-center text-gray-400 mb-12 text-sm uppercase tracking-[0.2em]">
                    Trusted by Leading Companies
                </p>

                <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <div className="overflow-hidden">
                    <div className="flex w-max animate-marquee items-center gap-24">
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="Company Logo"
                                className="h-12 md:h-14 object-contain hover:scale-110 transition-transform duration-300"
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Get Hired In 3 Simple Steps
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Create your profile, discover opportunities, and
                        land your next role with NextHire.
                    </p>
                </div>

         
                <div className="grid md:grid-cols-3 gap-8">

                
                    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 hover:-translate-y-2 transition-all duration-300">

                        <span className="absolute top-6 right-6 text-5xl font-bold text-zinc-800">
                            01
                        </span>

                        <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center text-3xl mb-8">
                            👤
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                            Create Profile
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Build your professional profile, showcase your
                            skills, experience, and upload your resume.
                        </p>

                    </div>

         
                    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 hover:-translate-y-2 transition-all duration-300">

                        <span className="absolute top-6 right-6 text-5xl font-bold text-zinc-800">
                            02
                        </span>

                        <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center text-3xl mb-8">
                            🔍
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                            Discover Jobs
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Explore thousands of opportunities from startups,
                            enterprises, and leading tech companies.
                        </p>

                    </div>

           
                    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 hover:-translate-y-2 transition-all duration-300">

                        <span className="absolute top-6 right-6 text-5xl font-bold text-zinc-800">
                            03
                        </span>

                        <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center text-3xl mb-8">
                            🚀
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                            Apply & Get Hired
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Apply with a single click, track your applications,
                            and connect directly with recruiters.
                        </p>

                    </div>

                </div>

            </section>
            <section className="max-w-7xl mx-auto px-6 py-24">

          
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Featured Jobs
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Explore hand-picked opportunities from top companies.
                        </p>
                    </div>

                    <button className="mt-6 md:mt-0 px-6 py-3 border border-zinc-700 rounded-xl hover:border-white transition">
                        View All Jobs
                    </button>

                </div>

             
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

               
                    <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 hover:-translate-y-2 transition-all duration-300">

                        <div className="flex justify-between items-start mb-6">

                            <div>
                                <h3 className="text-xl font-semibold">
                                    Frontend Developer
                                </h3>

                                <p className="text-gray-400 mt-1">
                                    Google
                                </p>
                            </div>

                            <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                                Full Time
                            </span>

                        </div>

                        <div className="space-y-3 text-gray-300">

                            <p>📍 Bangalore</p>

                            <p>💰 ₹12 - ₹18 LPA</p>

                            <p>⏳ 2-4 Years Experience</p>

                        </div>

                        <button className="w-full mt-6 py-3 bg-white text-black font-semibold rounded-xl hover:scale-[1.02] transition">
                            Apply Now
                        </button>

                    </div>

               

                    <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 hover:-translate-y-2 transition-all duration-300">

                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-semibold">
                                    Backend Engineer
                                </h3>
                                <p className="text-gray-400 mt-1">
                                    Amazon
                                </p>
                            </div>

                            <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                                Remote
                            </span>
                        </div>

                        <div className="space-y-3 text-gray-300">
                            <p>📍 Remote</p>
                            <p>💰 ₹15 - ₹22 LPA</p>
                            <p>⏳ 3+ Years Experience</p>
                        </div>

                        <button className="w-full mt-6 py-3 bg-white text-black font-semibold rounded-xl">
                            Apply Now
                        </button>

                    </div>

                    <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 hover:-translate-y-2 transition-all duration-300">

                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-semibold">
                                    DevOps Engineer
                                </h3>
                                <p className="text-gray-400 mt-1">
                                    Microsoft
                                </p>
                            </div>

                            <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                                Hybrid
                            </span>
                        </div>

                        <div className="space-y-3 text-gray-300">
                            <p>📍 Pune</p>
                            <p>💰 ₹10 - ₹20 LPA</p>
                            <p>⏳ 1-3 Years Experience</p>
                        </div>

                        <button className="w-full mt-6 py-3 bg-white text-black font-semibold rounded-xl">
                            Apply Now
                        </button>

                    </div>

                </div>

            </section>
            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                 
                    <div>

                        <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
                            Why Choose NextHire
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                            The Smarter Way To
                            <br />
                            Find Your Next Job
                        </h2>

                        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
                            NextHire helps job seekers connect with verified
                            recruiters, discover relevant opportunities, and
                            track applications from one powerful platform.
                        </p>

                        <div className="mt-10 space-y-6">

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold">
                                    ✓
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg">
                                        One-Click Applications
                                    </h3>

                                    <p className="text-gray-400 mt-1">
                                        Apply to multiple jobs quickly using your
                                        saved profile and resume.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold">
                                    ✓
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg">
                                        Verified Recruiters
                                    </h3>

                                    <p className="text-gray-400 mt-1">
                                        Connect with trusted companies and genuine
                                        hiring opportunities.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold">
                                    ✓
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg">
                                        Track Every Application
                                    </h3>

                                    <p className="text-gray-400 mt-1">
                                        Stay updated with application status,
                                        interviews, and recruiter responses.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                
                    <div className="relative">

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                            <div className="flex justify-between items-center mb-8">
                                <h3 className="font-semibold text-xl">
                                    Application Dashboard
                                </h3>

                                <span className="text-green-400 text-sm">
                                    ● Live
                                </span>
                            </div>

                            <div className="space-y-4">

                                <div className="bg-zinc-800 rounded-2xl p-4 flex justify-between">
                                    <div>
                                        <h4 className="font-medium">
                                            Frontend Developer
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            Google
                                        </p>
                                    </div>

                                    <span className="text-yellow-400">
                                        Reviewing
                                    </span>
                                </div>

                                <div className="bg-zinc-800 rounded-2xl p-4 flex justify-between">
                                    <div>
                                        <h4 className="font-medium">
                                            Backend Engineer
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            Amazon
                                        </p>
                                    </div>

                                    <span className="text-blue-400">
                                        Interview
                                    </span>
                                </div>

                                <div className="bg-zinc-800 rounded-2xl p-4 flex justify-between">
                                    <div>
                                        <h4 className="font-medium">
                                            DevOps Engineer
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            Microsoft
                                        </p>
                                    </div>

                                    <span className="text-green-400">
                                        Shortlisted
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </section>

            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-12 md:p-16">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                       

                        <div>

                            <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
                                For Recruiters
                            </span>

                            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                                Hire The Right Talent
                                <br />
                                Faster Than Ever
                            </h2>

                            <p className="text-gray-400 mt-6 text-lg">
                                Post jobs, manage applicants, and connect
                                with qualified candidates all from a single
                                platform.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">

                                <button className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
                                    Post a Job
                                </button>

                                <button className="px-8 py-4 border border-zinc-700 rounded-xl hover:border-white transition">
                                    Learn More
                                </button>

                            </div>

                        </div>

                       

                        <div className="bg-black border border-zinc-800 rounded-3xl p-8">

                            <h3 className="text-xl font-semibold mb-8">
                                Recruiter Dashboard
                            </h3>

                            <div className="space-y-4">

                                <div className="bg-zinc-900 rounded-2xl p-4 flex justify-between">
                                    <span>Frontend Developer</span>
                                    <span className="text-green-400">
                                        124 Applicants
                                    </span>
                                </div>

                                <div className="bg-zinc-900 rounded-2xl p-4 flex justify-between">
                                    <span>DevOps Engineer</span>
                                    <span className="text-green-400">
                                        89 Applicants
                                    </span>
                                </div>

                                <div className="bg-zinc-900 rounded-2xl p-4 flex justify-between">
                                    <span>Backend Engineer</span>
                                    <span className="text-green-400">
                                        143 Applicants
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="grid md:grid-cols-4 gap-6">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
                        <h3 className="text-5xl font-bold">10K+</h3>
                        <p className="text-gray-400 mt-3">
                            Active Job Seekers
                        </p>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
                        <h3 className="text-5xl font-bold">2K+</h3>
                        <p className="text-gray-400 mt-3">
                            Hiring Companies
                        </p>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
                        <h3 className="text-5xl font-bold">50K+</h3>
                        <p className="text-gray-400 mt-3">
                            Applications Submitted
                        </p>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
                        <h3 className="text-5xl font-bold">95%</h3>
                        <p className="text-gray-400 mt-3">
                            Satisfaction Rate
                        </p>
                    </div>

                </div>

            </section>

            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center bg-zinc-900 border border-zinc-800 rounded-[40px] p-16">

                    <h2 className="text-4xl md:text-6xl font-bold">
                        Ready To Take The Next Step?
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        Whether you're looking for your dream job or
                        searching for top talent, NextHire has everything
                        you need.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-10">

                        <button className="px-8 py-4 bg-white text-black rounded-xl font-semibold">
                            Find Jobs
                        </button>

                        <button className="px-8 py-4 border border-zinc-700 rounded-xl">
                            Post a Job
                        </button>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Home;