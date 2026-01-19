import React, { useEffect } from 'react';

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const menuItems = [
        'HOME', 'WORK', 'CULTURE',
        'SERVICES', 'PARTNERS',
        'STORIES', 'CAREERS',
        'EVENTS', 'CONTACT'
    ];

    const countries = [
        'GLOBAL', 'NEDERLAND', 'UNITED STATES',
        'IRELAND', 'UNITED KINGDOM', 'DEUTSCHLAND',
        'SCHWEIZ'
    ];

    return (
        <div className="fixed inset-0 z-50 bg-[#121212] text-white flex flex-col animate-fadeIn">
            <div className="flex justify-between items-center p-8 md:px-12 md:py-8 border-b border-gray-800">
                <div className="text-2xl font-bold tracking-tighter">DEPT®</div>

                <button onClick={onClose} className="text-white focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="flex-1 flex flex-col md:flex-row overflow-y-auto">

                <div className="w-full md:w-1/3 bg-[#0a0a0a] p-8 md:p-12 hidden md:block border-r border-gray-800">
                    <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-8">Landen</h4>
                    <ul>
                        {countries.map((country, idx) => (
                            <li key={idx} className={`mb-4 text-sm font-bold tracking-wide uppercase cursor-pointer hover:text-white transition-colors ${idx === 1 ? 'text-white' : 'text-gray-500'} flex items-center`}>
                                {idx === 1 && <span className="mr-2">▶</span>}
                                {country}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-2/3 p-8 md:p-12 md:pt-24 flex flex-col justify-start">
                    <ul className="space-y-2 md:space-y-4 text-right">
                        {menuItems.map((item, index) => (
                            <li key={index} className="overflow-hidden group">
                                <a href="#" className="block text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tighter hover:italic hover:translate-x-2 transition-transform duration-300 origin-right text-white">
                                    {index === 0 && <span className="inline-block text-2xl align-middle mr-4 transform -translate-y-2">▶</span>}
                                    {item}
                                </a>
                                <div className="w-full h-px bg-gray-800 mt-2"></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default MenuOverlay;
