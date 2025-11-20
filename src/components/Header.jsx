import { useEffect, useState } from 'react'

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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-4'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <span className="text-xl md:text-2xl font-bold text-slate-900 font-serif tracking-tight">Kunj Shah</span>

                    <ul className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '')
                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`text-sm font-medium transition-colors ${isActive
                                            ? 'text-slate-900 border-b-2 border-slate-900 pb-1'
                                            : 'text-slate-500 hover:text-slate-900'
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <button
                        className="md:hidden p-2 text-slate-700 hover:text-slate-900"
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
                    <div className="md:hidden border-t border-slate-100 bg-white absolute left-0 right-0 shadow-lg">
                        <ul className="py-4 px-4 space-y-2">
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
                                                ? 'text-slate-900 bg-slate-50'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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