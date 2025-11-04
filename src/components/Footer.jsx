function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Kunj Shah | Personal Portfolio
                    </p>
                    <div className="flex gap-6 flex-wrap justify-center">
                        <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
                        <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
                        <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
                        <a href="#contactForm" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
