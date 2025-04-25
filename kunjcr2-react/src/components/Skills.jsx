import { useState } from 'react'

const SkillCategory = ({ title, skills, icon }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-black rounded-xl overflow-hidden">
            <summary
                className="p-4 cursor-pointer flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <i className={`fa-solid fa-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''} ml-auto text-xl`}></i>
            </summary>
            {isOpen && (
                <ul className="p-4 space-y-2">
                    {skills.map((skill, index) => (
                        <li key={index} className="bg-black p-3 rounded-lg">{skill}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

const Skills = () => {
    const skillCategories = [
        {
            title: "AI/ML",
            icon: "brain",
            skills: [
                "Generative AI",
                "Hugging Face Transformers",
                "Natural Language Processing",
                "AI Agents",
                "Retrieval Augmented Generation",
                "TensorFlow & Keras",
                "PyTorch",
                "Scikit-learn"
            ]
        },
        {
            title: "Computer Vision",
            icon: "eye",
            skills: [
                "OpenCV",
                "YOLO",
                "Mediapipe",
                "Gesture Control"
            ]
        },
        {
            title: "Web Dev & Database",
            icon: "code",
            skills: [
                "MERN Stack",
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "Flask",
                "Tailwind CSS",
                "MySQL"
            ]
        },
        {
            title: "Programming Languages",
            icon: "laptop-code",
            skills: [
                "Python",
                "JavaScript",
                "Java",
                "C++",
                "HTML",
                "CSS",
                "SQL"
            ]
        }
    ]

    return (
        <section id="skills" className="bg-black rounded-2xl shadow-lg p-8 mb-12 transition-all duration-300">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <i className="fa-solid fa-book"></i> Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, index) => (
                    <SkillCategory
                        key={index}
                        title={category.title}
                        skills={category.skills}
                        icon={category.icon}
                    />
                ))}
            </div>
        </section>
    )
}

export default Skills