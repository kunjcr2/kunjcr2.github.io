import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send } from 'lucide-react'

function AboutContact() {
    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
                        {/* Decorative Gradient */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500"></div>

                        <div className="grid md:grid-cols-2">
                            {/* Contact Info Side */}
                            <div className="p-8 md:p-12 bg-slate-950/50">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/30 text-cyan-400 text-sm font-medium mb-8">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                    </span>
                                    Open for opportunities
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                                    Let's clean up the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">future</span> together.
                                </h2>

                                <p className="text-slate-400 mb-12 leading-relaxed">
                                    Have an interesting project? Want to discuss LLM architectures?
                                    Just want to say hi? My inbox is always open.
                                </p>

                                <div className="space-y-6">
                                    <a href="mailto:kunjcr2@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                                            <Mail className="text-cyan-400" size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-500">Email</div>
                                            <div className="font-medium">kunjcr2@gmail.com</div>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-4 text-slate-300 group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                            <MessageSquare className="text-purple-400" size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-500">Response Time</div>
                                            <div className="font-medium">Usually within 24 hours</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form/Action Side */}
                            <div className="p-8 md:p-12 relative bg-slate-900/30 flex flex-col justify-center">
                                <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>

                                <div className="text-center relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                                    <p className="text-slate-400 mb-8 text-sm">Fill out the form below to get in touch.</p>

                                    {/* Custom styled iframe wrapper */}
                                    <div className="w-full relative rounded-xl overflow-hidden border border-white/10 shadow-inner bg-slate-950">
                                        <iframe
                                            src="https://docs.google.com/forms/d/e/1FAIpQLSdLanvgNt7DR23VJYfHKKmYYnuA5r8l1YqwXqsspJUcCMkggg/viewform?embedded=true"
                                            width="100%"
                                            height="550"
                                            frameBorder="0"
                                            marginHeight="0"
                                            marginWidth="0"
                                            className="w-full filter invert-[.92] hue-rotate-180 contrast-90 opacity-90 hover:opacity-100 transition-opacity"
                                            title="Contact Form"
                                            style={{ backgroundColor: 'transparent' }}
                                        >
                                            Loading…
                                        </iframe>
                                    </div>
                                    <p className="text-xs text-slate-600 mt-4">
                                        Powered by Google Forms
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutContact
