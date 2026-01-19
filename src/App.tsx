import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProjectGrid from './components/ProjectGrid';
import ClientListSection from './components/ClientListSection';
import EqualSplitSection from './components/EqualSplitSection';
import ClientListSectionReverse from './components/ClientListSectionReverse';
import EqualSplitSectionTwo from './components/EqualSplitSectionTwo';
import EqualSplitSectionThree from './components/EqualSplitSectionThree';
import QuoteSection from './components/QuoteSection';
import EqualSplitSectionFour from './components/EqualSplitSectionFour';
import LogoGrid from './components/LogoGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';



function App() {
  const [filterIndustry, setFilterIndustry] = useState<string>('all industries');

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <FilterBar currentFilter={filterIndustry} onFilterChange={setFilterIndustry} />
        <ProjectGrid filterIndustry={filterIndustry} />
        <ClientListSection />
        <EqualSplitSection />
        <ClientListSectionReverse />
        <EqualSplitSectionTwo />
        <EqualSplitSectionThree />
        <QuoteSection />
        <EqualSplitSectionFour />
        <LogoGrid />
        <ContactSection />
        <Footer />
      </main>

    </div>
  );
}

export default App;