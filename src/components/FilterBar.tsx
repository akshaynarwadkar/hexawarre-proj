
import { useState } from 'react';

interface FilterBarProps {
    currentFilter: string;
    onFilterChange: (filter: string) => void;
}

const FilterBar = ({ currentFilter, onFilterChange }: FilterBarProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const industries = ['all industries', 'Commerce', 'Finance', 'Industry', 'Utilities'];

    return (
        <div className="w-full px-8 md:px-16 py-6 md:py-16 bg-white border-b border-gray-100 md:border-none relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end text-xl md:text-3xl lg:text-4xl text-gray-500 font-light leading-tight h-full">

                <div className="flex flex-row md:flex-col justify-between w-full md:w-auto items-baseline">
                    <div className="mb-0 md:mb-0 mr-4 md:mr-0">
                        <span className="hidden md:inline">Show me </span>
                        <span className="md:hidden">Show me </span>
                        <button className="text-black border-b-2 border-black pb-0 md:pb-1 hover:text-gray-700 hover:border-gray-500 transition-colors">
                            all work
                        </button>
                    </div>

                    <div className="md:mt-0 relative">
                        <span>in </span>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="text-black border-b-2 border-black pb-0 md:pb-1 hover:text-gray-700 hover:border-gray-500 transition-colors focus:outline-none"
                        >
                            {currentFilter}
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md py-2 text-base z-30">
                                {industries.map((industry) => (
                                    <button
                                        key={industry}
                                        onClick={() => {
                                            onFilterChange(industry);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentFilter === industry ? 'font-bold' : ''}`}
                                    >
                                        {industry}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FilterBar;
