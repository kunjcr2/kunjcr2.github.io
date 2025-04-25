const Learning = () => {
    return (
        <section id="learning" className="bg-black rounded-2xl shadow-lg p-8 mb-12 transition-all duration-300 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <i className="fa-solid fa-graduation-cap"></i> What am I learning
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
                Currently learning to <span className="text-primary font-semibold">how to build Large Language Models (LLMs) from scratch</span>, diving deep into transformer architectures, tokenization, and training pipelines. Exploring advanced AI concepts to enhance my understanding and practical skills in generative AI.
            </p>
        </section>
    )
}

export default Learning