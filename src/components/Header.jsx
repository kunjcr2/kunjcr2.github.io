import { useEffect, useState } from 'react'

function Header() {
    const [activeSection, setActiveSection] = useState('')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
            const sections = ['llm-projects', 'experience', 'projects', 'skills', 'contactForm']
            const scrollPosition = window.pageYOffset + 150

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '#llm-projects', label: 'Research' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contactForm', label: 'Contact' },
    ]

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl md:text-2xl font-bold text-gray-900 font-mono tracking-tight">
                            KS
                        </span>
                    </div>
                    <ul className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`px-4 py-2 text-sm font-medium transition-colors ${activeSection === item.href.replace('#', '')
                                            ? 'text-gray-900 border-b-2 border-gray-900'
                                            : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile menu button */}
                    <button className="md:hidden p-2 text-gray-700 hover:text-gray-900">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
