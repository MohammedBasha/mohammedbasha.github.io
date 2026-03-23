import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(() => searchParams.get('tag') || 'all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const tag = searchParams.get('tag');
    if (tag && tag !== activeFilter) {
      setActiveFilter(tag);
    } else if (!tag && activeFilter !== 'all') {
      setActiveFilter('all');
    }
  }, [searchParams]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ tag: filter });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Portfolio activeFilter={activeFilter} onFilterChange={handleFilterChange} showAll />
      </div>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
