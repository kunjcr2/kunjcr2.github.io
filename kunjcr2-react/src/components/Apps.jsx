const Apps = () => {
    const apps = [
        {
            title: "AI Research Assistant (theHelper)",
            description: "Built an AI-powered tool to analyze and summarize PDFs using PyPDF2, Hugging Face Transformers (BERT, BART), and FAISS for semantic search, delivering a Streamlit-based app for document processing and context-aware Q&A.",
            githubLink: "https://github.com/kunjcr2/AIResearchAssistant"
        },
        {
            title: "Voice-Activated Assistant (Max)",
            description: "Developed a voice-activated AI assistant using Langchain, OpenAI, Hugging Face, and SpeechRecognition to automate tasks like web search, YouTube streaming, and emailing, enhancing user experience through hands-free interaction.",
            githubLink: "https://github.com/kunjcr2/Jarvisv2.0"
        },
        {
            title: "IdeaCheck",
            description: "Developed a web application using an AI Agent in backend to evaluate startup ideas based on user input, utilizing OpenAI's GPT-4o-mini and Langchain for idea validation and feedback, enhancing the entrepreneurial journey with personalized insights and suggestions.",
            githubLink: "https://github.com/kunjcr2/ideaCheck"
        }
    ]

    return (
        <section id="apps" className="bg-black rounded-2xl shadow-lg p-8 transition-all duration-300 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <i className="fa-solid fa-mobile-screen-button"></i> Apps
            </h2>
            <div className="space-y-8">
                {apps.map((app, index) => (
                    <div key={index} className="bg-black rounded-xl p-6 hover:shadow-lg hover:scale-105 hover:border-primary border border-transparent transition-all duration-300">
                        <strong className="text-xl font-semibold text-primary block mb-4">{app.title}</strong>
                        <p className="text-gray-500 leading-relaxed mb-4">
                            {app.description}
                        </p>
                        <a href={app.githubLink} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                            <i className="fa-brands fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Apps