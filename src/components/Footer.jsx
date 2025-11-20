function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-800 pt-8">
                    <div className="text-center md:text-left">
                        <span className="text-2xl font-bold font-serif tracking-tight mb-2 block">Kunj Shah</span>
                        <p className="text-slate-400 text-sm">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-8 flex-wrap justify-center">
                        <a href="#experience" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Experience</a>
                        <a href="#projects" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Projects</a>
                        <a href="#skills" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Skills</a>
                        <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
