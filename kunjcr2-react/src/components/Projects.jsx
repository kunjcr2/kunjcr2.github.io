const Projects = () => {
    const projects = [
        {
            title: "Workout Assistant",
            description: "Created an AI-powered workout assistant in Python with OpenCV, MediaPipe, and Flask to track exercise form in real time via live video, offering feedback and personalized tips using OpenAI-generated routines."
        },
        {
            title: "Web Detective",
            description: "Built an AI-driven web intelligence tool using Retrieval-Augmented Generation (RAG), Transformers, and Flask, integrating real-time web scraping and NLP to extract insights, deployed with an interactive UI in a team of two."
        },
        {
            title: "Voice-Activated Assistant",
            description: "Developed a Python assistant using NLP and advanced language models to understand natural commands, automate tasks like web browsing and location finding, and deliver intelligent, real-time responses."
        }
    ]

    return (
        <section id="projects" className="bg-black rounded-2xl shadow-lg p-8 mb-12 transition-all duration-300 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <i className="fa-solid fa-diagram-project"></i> Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-black rounded-xl p-6 hover:shadow-neon hover:scale-105 hover:border-primary border border-transparent transition-all duration-300 flex flex-col">
                        <strong className="text-xl font-semibold text-primary block mb-4">{project.title}</strong>
                        <p className="text-gray-500 leading-relaxed flex-grow">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
            <p className="text-center mt-8 text-gray-400 italic">
                More to be added later... (You can find them on my{" "}
                <a href="https://github.com/kunjcr2" className="text-primary hover:text-primary/80 transition-colors">
                    Github
                </a>
                )
            </p>
        </section>
    )
}

export default Projects