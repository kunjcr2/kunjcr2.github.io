import { useState } from 'react'

const AboutMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form data:', formData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <section id="aboutme" className="bg-black rounded-2xl shadow-lg p-8 mb-12 transition-all duration-300 animate-slide-up">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 w-full flex items-start flex-col">
                    <h3 className="text-2xl font-bold text-primary mb-4">About Me</h3>
                    <p className="text-lg text-white/90 leading-relaxed mx-auto md:mx-0 max-w-xl">
                        I am a second-year Computer Science student at San Francisco State University with expertise in AI/ML and Full-stack development. Currently serving as Tech Director at SparkSF, I specialize in Machine Learning, NLP, and MERN stack development. My notable projects include AI-powered applications like 'theHelper' research assistant and 'Max' voice assistant. I've participated in multiple hackathons including Cal Hacks 11.0 and SacHacks, creating innovative solutions like Workout Web App and Web Detective. With strong foundations in Python, JavaScript, and various AI frameworks including Hugging Face Transformers and OpenCV, I combine academic excellence (JEE qualifier) with practical development experience to deliver impactful solutions.
                    </p>
                </div>

                <div className="lg:w-1/2 w-full flex flex-col justify-center items-center bg-black rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-primary mb-4">Connect with Me</h3>
                    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="bg-black border-primary/40 rounded-full px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="bg-black border-primary/40 rounded-full px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Anything you want me to know about you?"
                            rows="4"
                            className="bg-black border-primary/40 rounded-2xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        />
                        <button
                            type="submit"
                            className="bg-primary text-black font-semibold rounded-full px-6 py-3 mt-2 hover:bg-primary/80 transition-all"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AboutMe