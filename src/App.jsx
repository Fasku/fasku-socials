import './App.css';

import { Container, Stack } from 'react-bootstrap';

import Header from './components/Header';
import SocialCard from './components/SocialCard';
import socialLinks from './data/socialLinks';
import MySettings from './components/MySettings';

function App() {
  return (
    <>
      <div className="card-line" />

      <Header />

      <MySettings />

      <Container>
        <Stack>
          {socialLinks.map((link, index) => (
            <SocialCard
              key={link.name}
              link={link}
              index={index}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default App;
