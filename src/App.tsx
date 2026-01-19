import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProjectGrid from './components/ProjectGrid';
import ClientListSection from './components/ClientListSection';
import ClientListSectionReverse from './components/ClientListSectionReverse';
import QuoteSection from './components/QuoteSection';
import LogoGrid from './components/LogoGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DualFeatureSection from './components/DualFeatureSection';

// Images for DualFeatureSections
import Section51Image from './assets/desktop/section51.png';
import Section52Image from './assets/desktop/section52.png';
import Image10 from './assets/desktop/image 10.png';
import Image11 from './assets/desktop/image 11.png';
import Image12 from './assets/desktop/image 12.png';
import Image13 from './assets/desktop/image 13.png';
import Image15 from './assets/desktop/image 15.png';
import Frame20 from './assets/desktop/Frame 20.png';


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

        <DualFeatureSection
          left={{
            client: 'BE LIGHTNING',
            description: 'Delivering clarity on a global scale',
            image: Section51Image,
            backgroundColor: 'bg-purple-400'
          }}
          right={{
            client: 'TUI',
            description: 'Swipe to find your next holiday destination',
            image: Section52Image,
            backgroundColor: 'bg-cyan-400'
          }}
        />

        <ClientListSectionReverse />

        <DualFeatureSection
          left={{
            client: 'CHOCOMEL',
            description: 'A campaign for the limited edition letter packs',
            image: Image10,
            backgroundColor: 'bg-yellow-500'
          }}
          right={{
            client: 'JBL',
            description: 'Live like a champion with Jerome Boateng',
            image: Image11,
            backgroundColor: 'bg-blue-600'
          }}
        />

        <DualFeatureSection
          left={{
            client: 'ZALANDO',
            description: 'Innovative SEO and content strategy for Zalando',
            image: Image12,
            backgroundColor: 'bg-orange-200'
          }}
          right={{
            client: 'KONINKLIJKE BIBLIOTHEEK',
            description: 'The search of the most influential book ever',
            image: Image13,
            backgroundColor: 'bg-red-700'
          }}
        />

        <QuoteSection />

        <DualFeatureSection
          left={{
            client: 'LIBERTY GLOBAL',
            description: 'Delivering complex commerce solutions',
            image: Image15,
            backgroundColor: 'bg-slate-800'
          }}
          right={{
            client: 'ARLA',
            description: 'Swipe to find your next holiday destination',
            image: Frame20,
            backgroundColor: 'bg-orange-900'
          }}
        />

        <LogoGrid />
        <ContactSection />
        <Footer />
      </main>

    </div>
  );
}

export default App;