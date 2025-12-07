import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Terminal, Cpu, Brain, Network, Code2, Layers } from 'lucide-react'

const TypewriterText = ({ texts }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const text = texts[currentTextIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setCurrentText(text.substring(0, currentText.length + 1))
                if (currentText.length === text.length) {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                setCurrentText(text.substring(0, currentText.length - 1))
                if (currentText === '') {
                    setIsDeleting(false)
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, currentTextIndex, texts])

    return (
        <span className="inline-block min-w-[300px] text-cyan-400">
            {currentText}
            <span className="animate-pulse">|</span>
        </span>
    )
}

function Hero() {
    const handleResumeDownload = () => {
        const link = document.createElement('a')
        link.href = '/resumes/Kunj_Shah_Resume.pdf'
        link.download = 'Kunj_Shah_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/30 text-cyan-400 text-sm font-medium mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                </span>
                                Open for collaborations
                            </div>

                            <h1 className="text-5xl sm:text-7xl font-bold font-display tracking-tight text-white mb-6">
                                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Kunj Shah</span>
                            </h1>

                            <div className="text-xl sm:text-2xl text-slate-400 mb-8 font-mono h-8">
                                I build <TypewriterText texts={['LLM Architectures', 'Reasoning Models', 'Custom Tokenizers', 'Efficient Inference']} />
                            </div>

                            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                                Specializing in the design, pre-training, and fine-tuning of Large Language Models.
                                Focused on advancing model reasoning capabilities and optimizing inference systems.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <motion.a
                                    href="#projects"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white text-base font-medium rounded-xl hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-900/20 group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View Projects
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.a>
                                <motion.button
                                    onClick={handleResumeDownload}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-slate-300 border border-slate-700 text-base font-medium rounded-xl hover:bg-slate-800 hover:text-white transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FileText className="mr-2 w-5 h-5" />
                                    Download CV
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Content (3D Terminal/Card) */}
                    <motion.div
                        className="flex-1 w-full max-w-xl lg:max-w-none"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
                                {/* Terminal Header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="flex-1 text-center text-xs text-slate-500 font-medium tracking-wide">kunj@dev:~/skills</div>
                                </div>

                                {/* Terminal Body - Neofetch Style */}
                                <div className="p-8">
                                    <div className="flex gap-2 mb-6">
                                        <span className="text-green-400 font-bold">➜</span>
                                        <span className="text-cyan-400 font-bold">~</span>
                                        <span className="text-white">neofetch</span>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-8 items-start">
                                        {/* ASCII Art (Left) */}
                                        <div className="hidden sm:block text-cyan-500 font-bold select-none whitespace-pre leading-tight" style={{ textShadow: '0 0 10px rgba(6,182,212,0.3)' }}>
                                            {`       /\\
      /  \\
     /    \\
    /      \\
   /   AI   \\
  /__________\\ `}
                                        </div>

                                        {/* Info (Right) */}
                                        <div className="flex-1 space-y-2">
                                            <div className="flex gap-4">
                                                <span className="text-cyan-400 font-bold min-w-[70px]">Role:</span>
                                                <span className="text-white">LLM Engineer</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="text-cyan-400 font-bold min-w-[70px]">Stack:</span>
                                                <span className="text-slate-300">Python, PyTorch, React</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="text-cyan-400 font-bold min-w-[70px]">Focus:</span>
                                                <span className="text-slate-300">Architecture, Pretraining, Inference</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="text-cyan-400 font-bold min-w-[70px]">Uptime:</span>
                                                <span className="text-slate-300">All Night</span>
                                            </div>

                                            {/* Icons Row at Bottom Right */}
                                            <div className="pt-6 flex justify-end gap-3 text-slate-500">
                                                <span className="hover:text-cyan-400 transition-colors cursor-pointer"><Terminal size={18} /></span>
                                                <span className="hover:text-purple-400 transition-colors cursor-pointer"><Cpu size={18} /></span>
                                                <span className="hover:text-blue-400 transition-colors cursor-pointer"><Brain size={18} /></span>
                                                <span className="hover:text-green-400 transition-colors cursor-pointer"><Network size={18} /></span>
                                                <span className="hover:text-yellow-400 transition-colors cursor-pointer"><Layers size={18} /></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 mt-6">
                                        <span className="text-green-400 font-bold">➜</span>
                                        <span className="text-cyan-400 font-bold">~</span>
                                        <span className="w-2.5 h-5 bg-slate-400 block animate-pulse"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
