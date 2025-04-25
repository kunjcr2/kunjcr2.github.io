const Footer = () => {
    return (
        <footer className="bg-black text-white mt-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="mb-4 md:mb-0">&copy; 2025 Kunj Shah | Personal Portfolio</p>
                <div className="flex gap-8">
                    <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                    <a href="#aboutme" className="hover:text-primary transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer