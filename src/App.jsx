import { useState } from 'react';

import './App.css';

import { Container, Stack } from 'react-bootstrap';

import ProfileActions from './components/ProfileActions';
import Header from './components/Header';
import SocialCard from './components/SocialCard';
import socialLinks from './data/socialLinks';
import MySettings from './components/MySettings';

function App() {
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

  return (
    <main className="profile-page">
      <Header />

      <ProfileActions soundEnabled={soundEnabled} onToggleSound={toggleSound} />

      <MySettings />

      <Container as="nav" aria-label="Social links">
        <Stack>
          {socialLinks.map((link, index) => (
            <SocialCard
              key={link.name}
              link={link}
              index={index}
              soundEnabled={soundEnabled}
            />
          ))}
        </Stack>
      </Container>
    </main>
  );
}

export default App;
