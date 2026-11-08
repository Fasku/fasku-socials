import Header from '../components/Header';
import MySettings from '../components/MySettings';
import ProfileActions from '../components/ProfileActions';
import SocialLinks from '../components/SocialLinks';

function HomePage({ soundEnabled, onToggleSound }) {
  return (
    <main className="profile-page">
      <Header />

      <ProfileActions soundEnabled={soundEnabled} onToggleSound={onToggleSound} />

      <MySettings />

      <SocialLinks soundEnabled={soundEnabled} />
    </main>
  );
}

export default HomePage;
