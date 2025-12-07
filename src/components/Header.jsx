import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function Header() {
    const [activeSection, setActiveSection] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const sectionIds = ['llm-projects', 'experience', 'projects', 'skills', 'contact']

        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
            const scrollPosition = window.scrollY + 150

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i])
                if (el && scrollPosition >= el.offsetTop) {
                    setActiveSection(sectionIds[i])
                    return
                }
            }
            setActiveSection(sectionIds[0])
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '#llm-projects', label: 'Research' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ]

    const handleMobileNavClick = (href) => {
        setMobileMenuOpen(false)
        setTimeout(() => {
            const element = document.getElementById(href.replace('#', ''))
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }, 100)
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`backdrop-blur-md bg-slate-900/70 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-300 ${scrolled ? 'bg-slate-900/90 shadow-cyan-900/20' : ''}`}>

                    <motion.a
                        href="#"
                        className="text-xl md:text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Kunj Shah
                    </motion.a>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '')
                            return (
                                <li key={item.href}>
                                    <motion.a
                                        href={item.href}
                                        className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeSection"
                                                className="absolute inset-0 bg-white/5 rounded-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        {item.label}
                                    </motion.a>
                                </li>
                            )
                        })}
                    </ul>

                    {/* Social/Contact Icons Desktop */}
                    <div className="hidden md:flex items-center gap-4 pl-4 border-l border-white/10">
                        <motion.a href="https://github.com/kunjcr2" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" whileHover={{ y: -2 }}><Github size={20} /></motion.a>
                        <motion.a href="https://www.linkedin.com/in/kunjcr2/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" whileHover={{ y: -2 }}><Linkedin size={20} /></motion.a>
                        <motion.a href="mailto:kunjcr2@gmail.com" className="text-slate-400 hover:text-white transition-colors" whileHover={{ y: -2 }}><Mail size={20} /></motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-400 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-4 right-4 mt-2 p-4 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl md:hidden"
                        >
                            <ul className="space-y-2">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.href.replace('#', '')
                                    return (
                                        <li key={item.href}>
                                            <a
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    handleMobileNavClick(item.href)
                                                }}
                                                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${isActive
                                                    ? 'bg-cyan-500/10 text-cyan-400'
                                                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                                    }`}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-white/10">
                                <a href="https://github.com/kunjcr2" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/kunjcr2/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><Linkedin size={24} /></a>
                                <a href="mailto:kunjcr2@gmail.com" className="text-slate-400 hover:text-white"><Mail size={24} /></a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}

export default Header