import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
    return (
        <footer className="bg-slate-950/50 backdrop-blur-sm border-t border-slate-900 py-12 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-2xl font-bold font-display tracking-tight mb-2 block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">Kunj Shah</span>
                        <p className="text-slate-500 text-sm">
                            Building intelligent systems for the future.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/kunjcr2" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/kunj-shah-a58934255/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:kunjcr2@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>

                    <div className="text-slate-600 text-xs">
                        &copy; {new Date().getFullYear()} Kunj Shah. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
