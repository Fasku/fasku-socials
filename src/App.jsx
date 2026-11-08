import { useEffect, useState } from 'react';

import HomePage from './pages/HomePage';
import SkinsPage from './pages/SkinsPage';
import './App.css';

function App() {
  // Native links handle navigation, including browser back/forward and new tabs.
  const isSkinsPage = window.location.pathname.replace(/\/$/, '') === '/skins';

  useEffect(() => {
    document.title = isSkinsPage ? 'Fasku | osu! Skins' : 'F a s k u';
  }, [isSkinsPage]);

  const [soundEnabled, setSoundEnabled] = useState(() => {
    try {
      return localStorage.getItem('fasku-sound-enabled') === 'true';
    } catch {
      return false;
    }
  });

  function toggleSound() {
    const nextValue = !soundEnabled;
    setSoundEnabled(nextValue);
    try {
      localStorage.setItem('fasku-sound-enabled', String(nextValue));
    } catch {
      // Sound controls still work when browser storage is unavailable.
    }
  }

  const Page = isSkinsPage ? SkinsPage : HomePage;

  return <Page soundEnabled={soundEnabled} onToggleSound={toggleSound} />;
}

export default App;
