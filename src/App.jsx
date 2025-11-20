import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import LLMProjects from './components/LLMProjects'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hackathons from './components/Hackathons'
import Certificates from './components/Certificates'
import AboutContact from './components/AboutContact'
import Footer from './components/Footer'

function App() {
    useEffect(() => {
        // Smooth scroll handling
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerOffset = window.innerWidth < 768 ? 60 : 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    entry.target.classList.remove("opacity-0", "translate-y-8");
                }
            });
        }, observerOptions);

        // Initialize sections with animations
        document.querySelectorAll("section").forEach((section) => {
            section.style.transitionDuration = "0.8s";
            section.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
            section.classList.add("opacity-0", "translate-y-8");
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <ScrollProgress />
            <BackToTop />
            <Header />
            <Hero />
            <main>
                <LLMProjects />
                <Experience />
                <Projects />
                <Skills />
                <Hackathons />
                <Certificates />
                <AboutContact />
            </main>
            <Footer />
        </div>
    )
}

export default App
