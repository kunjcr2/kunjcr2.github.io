import React from 'react';

const BackgroundLayout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-slate-950 overflow-hidden text-slate-100">
            {/* Ambient background effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[100px] animate-blob" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default BackgroundLayout;
