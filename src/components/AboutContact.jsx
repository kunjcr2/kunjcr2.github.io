import React from 'react';

function AboutContact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 font-serif">Get in Touch</h2>
                    <div className="w-20 h-1 bg-slate-900 mx-auto rounded-full"></div>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="bg-slate-50 rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Send me a message</h3>
                        <p className="text-slate-600">Fill out the form below and I'll get back to you as soon as possible.</p>
                    </div>

                    {/* Google Form */}
                    <div className="w-full bg-white rounded-lg overflow-hidden">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdLanvgNt7DR23VJYfHKKmYYnuA5r8l1YqwXqsspJUcCMkggg/viewform?embedded=true"
                            width="100%"
                            height="800"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            className="w-full"
                            title="Contact Form"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutContact
