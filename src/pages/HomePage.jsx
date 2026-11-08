import { Container, Stack } from 'react-bootstrap';

import Header from '../components/Header';
import MySettings from '../components/MySettings';
import ProfileActions from '../components/ProfileActions';
import SocialCard from '../components/SocialCard';
import socialLinks from '../data/socialLinks';

function HomePage({ soundEnabled, onToggleSound }) {
  return (
    <main className="profile-page">
      <Header />

      <ProfileActions soundEnabled={soundEnabled} onToggleSound={onToggleSound} />

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


export default HomePage;
