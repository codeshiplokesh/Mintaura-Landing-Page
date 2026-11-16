import { useState, useEffect, useCallback } from 'react';
import { HeroSection } from './components/HeroSection';
import { EcosystemSection } from './components/EcosystemSection';
import { ParticipantsSection } from './components/ParticipantsSection';
import { DealsSection } from './components/DealsSection';
import { FaqSection } from './components/FaqSection';
import { LeadSection } from './components/LeadSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { AccountDeletion } from './components/AccountDeletion';

type PageType = 'home' | 'privacy' | 'delete-account';

function getInitialPage(): PageType {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (
    path === '/delete-account' ||
    path === '/delete-account.html' ||
    path === '/account-deletion' ||
    path === '/account-deletion.html' ||
    hash === '#/delete-account' ||
    hash === '#/account-deletion' ||
    hash === '#delete-account' ||
    hash === '#account-deletion'
  ) {
    return 'delete-account';
  }

  if (
    path === '/privacy-policy' ||
    path === '/privacy' ||
    path === '/privacy.html' ||
    hash === '#/privacy-policy' ||
    hash === '#/privacy' ||
    hash === '#privacy-policy' ||
    hash === '#privacy'
  ) {
    return 'privacy';
  }

  return 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);

  // Sync route on popstate or hashchange
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = useCallback((page: PageType) => {
    setCurrentPage(page);
    if (page === 'delete-account') {
      window.history.pushState(null, '', '/delete-account');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (page === 'privacy') {
      window.history.pushState(null, '', '/privacy-policy');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#E5E7EB] selection:bg-gold-500 selection:text-amber-950 flex flex-col justify-between">
      {currentPage === 'delete-account' ? (
        <div className="flex-1 flex flex-col">
          <AccountDeletion 
            onBackToHome={() => navigateTo('home')}
            onNavigateToPrivacy={() => navigateTo('privacy')}
          />
        </div>
      ) : currentPage === 'privacy' ? (
        <div className="flex-1 flex flex-col">
          <PrivacyPolicy 
            onBackToHome={() => navigateTo('home')} 
            onNavigateToDeleteAccount={() => navigateTo('delete-account')}
          />
        </div>
      ) : (
        <main className="flex-1 flex flex-col">
          <HeroSection />
          <EcosystemSection />
          <ParticipantsSection />
          <DealsSection />
          <LeadSection />
          <FaqSection />
          <CtaBanner />
        </main>
      )}

      {/* Institutional Footer across all views */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
