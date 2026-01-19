import { useState } from 'react';
import MenuOverlay from './MenuOverlay';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-40 bg-transparent text-white px-8 py-6 flex items-center justify-between font-sans transition-colors duration-300 hover:bg-black/90">
                <div className="text-2xl font-bold tracking-tighter cursor-pointer relative z-50">
                    DEPT®
                </div>

                <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide h-full">
                    <a href="#" className="hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-white pb-1">WORK</a>
                    <a href="#" className="hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-white pb-1">CULTURE</a>
                    <a href="#" className="hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-white pb-1">SERVICES</a>
                    <a href="#" className="hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-white pb-1">INSIGHTS</a>
                    <a href="#" className="hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-white pb-1">CAREERS</a>
                    <a href="#" className="hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-white pb-1">CONTACT</a>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="md:hidden flex items-center z-50">
                    <button onClick={() => setIsMenuOpen(true)} className="text-white focus:outline-none uppercase font-bold tracking-widest text-xs">
                        MENU
                    </button>
                </div>

                {/* Desktop 3-dots Menu Trigger */}
                <div className="hidden md:block cursor-pointer z-50" onClick={() => setIsMenuOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:text-gray-300 transition-colors">
                        <circle cx="5" cy="12" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="19" cy="12" r="2" />
                    </svg>
                </div>
            </header>

            {/* Fullscreen Overlay Menu */}
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Header;
