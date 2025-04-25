const Hackathons = () => {
    const hackathons = [
        {
            name: "Cal Hacks 11.0",
            location: "San Francisco, CA",
            date: "October 18, 2024 – October 20, 2024",
            project: "Workout Web App"
        },
        {
            name: "SacHacks",
            location: "Virtual Hackathon",
            date: "March 2, 2025 – March 3, 2025",
            project: "Web Detective"
        },
        {
            name: "HackMerced",
            location: "University of California, Merced",
            date: "March 9, 2025 – March 11, 2025",
            project: "Web Detective (Updated)"
        }
    ]

    return (
        <section id="hackathons" className="bg-black rounded-2xl shadow-lg p-8 transition-all duration-300 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <i className="fa-solid fa-users-rectangle"></i> Hackathons
            </h2>
            <div className="space-y-6">
                {hackathons.map((hack, index) => (
                    <div key={index} className="bg-black rounded-xl p-6 hover:shadow-lg hover:scale-105 hover:border-primary border border-transparent transition-all duration-300">
                        <strong className="text-xl font-semibold text-primary block mb-3">{hack.name}</strong>
                        <div className="space-y-2 text-gray-500">
                            <p><strong className="text-gray-100">Where:</strong> {hack.location}</p>
                            <p><strong className="text-gray-100">When:</strong> {hack.date}</p>
                            <p><strong className="text-gray-100">Project:</strong> {hack.project}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Hackathons