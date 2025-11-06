import { useEffect, useState } from 'react'

function Header() {
    const [activeSection, setActiveSection] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const sectionIds = ['llm-projects', 'experience', 'projects', 'skills', 'aboutme']

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
        { href: '#aboutme', label: 'About Me' },
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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <span className="text-xl md:text-2xl font-bold text-gray-900 font-mono tracking-tight">KS</span>

                    <ul className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '')
                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`px-4 py-2 text-sm font-medium transition-colors ${isActive
                                            ? 'text-gray-900 border-b-2 border-gray-900'
                                            : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <button
                        className="md:hidden p-2 text-gray-700 hover:text-gray-900"
                        aria-label="Toggle menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 bg-white">
                        <ul className="py-2">
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
                                            className={`block px-4 py-3 text-base font-medium transition-colors ${isActive
                                                ? 'text-gray-900 bg-gray-100 border-l-4 border-gray-900'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                                }`}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header