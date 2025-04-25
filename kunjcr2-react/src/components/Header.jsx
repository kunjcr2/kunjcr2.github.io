const Header = () => {
    return (
        <header className="relative min-h-screen bg-black overflow-hidden sm:p-2 flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col justify-center items-center min-h-screen relative z-20 gap-8">
                <nav className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-8 w-full max-w-6xl hidden md:block">
                    <ul className="flex justify-between gap-4">
                        <li>
                            <a href="#experience" className="text-white hover:bg-primary/20 hover:text-primary px-4 py-2 rounded-lg transition-all duration-300">Experience</a>
                        </li>
                        <li>
                            <a href="#hackathons" className="text-white hover:bg-primary/20 hover:text-primary px-4 py-2 rounded-lg transition-all duration-300">Hackathons</a>
                        </li>
                        <li>
                            <a href="#projects" className="text-white hover:bg-primary/20 hover:text-primary px-4 py-2 rounded-lg transition-all duration-300">Projects</a>
                        </li>
                        <li>
                            <a href="#skills" className="text-white hover:bg-primary/20 hover:text-primary px-4 py-2 rounded-lg transition-all duration-300">Skills</a>
                        </li>
                        <li>
                            <a href="#certificates" className="text-white hover:bg-primary/20 hover:text-primary px-4 py-2 rounded-lg transition-all duration-300">Certificates</a>
                        </li>
                        <li>
                            <a href="#aboutme" className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300">About Me</a>
                        </li>
                        <li>
                            <a href="#aboutme" className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300">Connect</a>
                        </li>
                    </ul>
                </nav>

                <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl">
                    <img src="/IMG_3187.jpg" alt="Kunj Shah" className="hidden sm:block w-64 h-64 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300" />
                    <div className="text-center md:text-left w-full my-3">
                        <h1 className="text-5xl font-bold text-white mb-4 text-shadow animate-glow">I'm Kunj Shah</h1>
                        <div className="flex justify-center md:justify-start">
                            <span className="inline-flex items-center gap-2 bg-black text-gray-400 font-medium py-2 rounded-full text-base">
                                Passionate about Artificial Intelligence
                            </span>
                        </div>
                        <div className="flex justify-center md:justify-start gap-6 my-4">
                            <a href="https://github.com/kunjcr2" target="_blank" aria-label="GitHub" className="text-primary hover:text-white bg-black border-2 border-primary hover:bg-primary hover:border-white p-2 rounded-full text-2xl transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary w-12 h-12 flex items-center justify-center">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/kunjcr2/" target="_blank" aria-label="LinkedIn" className="text-primary hover:text-white bg-black border-2 border-primary hover:bg-primary hover:border-white p-2 rounded-full text-2xl transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary w-12 h-12 flex items-center justify-center">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="mailto:kunjcr2@gmail.com" aria-label="Email" className="text-primary hover:text-white bg-black border-2 border-primary hover:bg-primary hover:border-white p-2 rounded-full text-2xl transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary w-12 h-12 flex items-center justify-center">
                                <i className="fa-solid fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header