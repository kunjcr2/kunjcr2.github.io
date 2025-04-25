const Experience = () => {
    const experiences = [
        {
            title: "Tech Director at SparkSF",
            period: "Dec 2024 to Present",
            description: "Developed a responsive website for SparksF, an entrepreneurship club at SF State University, to streamline member access to announcements and account management, enhancing engagement through user authentication and real-time updates, along with a chatbot just for SparksF."
        },
        {
            title: "Intern, Dyna Grow Design Solutions",
            period: "May 2024 to January 2025",
            description: "Built a responsive, user-friendly website using HTML and CSS to enhance Dyna Grow Design Solutions' digital presence, earning a Letter of Recommendation from the founder for delivering lasting impact."
        },
        {
            title: "Officer, SF Hack | Logistic Department",
            period: "September 2024 to April 2025",
            description: "Managed logistics for SF Hack hackathon at SFSU with a team of 6, coordinating vendors, supplies, and event operations to ensure a successful experience for all participants."
        }
    ]

    return (
        <section id="experience" className="bg-black rounded-2xl shadow-lg p-8 mb-12 transition-all duration-300 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <i className="fa-solid fa-briefcase"></i> Experience
            </h2>
            <ul className="space-y-8">
                {experiences.map((exp, index) => (
                    <li key={index} className="bg-black rounded-xl p-6 hover:shadow-lg hover:scale-105 hover:border-primary border border-transparent transition-all duration-300">
                        <strong className="text-xl font-semibold text-primary block mb-2">{exp.title}</strong>
                        <i className="text-gray-400 block mb-4">{exp.period}</i>
                        <p className="text-gray-500 leading-relaxed">
                            {exp.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Experience