import ProfileActions from '../components/ProfileActions';
import SkinCard from '../components/SkinCard';
import skins from '../data/skins';

import './SkinsPage.css';

function SkinsPage({ soundEnabled, onToggleSound }) {
  return (
    <main className="skins-page">
      <nav className="skins-navigation" aria-label="Page navigation">
        <a href="/">← Back to profile</a>
        <a href="https://osu.ppy.sh/users/11212874" target="_blank" rel="noopener noreferrer">
          osu! profile <span aria-hidden="true">↗</span>
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </nav>

      <header className="skins-header pushdown-overlay">
        <img src="https://a.ppy.sh/11212874" alt="Fasku osu! avatar" width="88" height="88" />
        <h1>Fasku osu! Skins</h1>
        <p>My collection of osu! skins. Find your favorite and make it yours.</p>
      </header>

      <ProfileActions
        soundEnabled={soundEnabled}
        onToggleSound={onToggleSound}
        shareTitle="Fasku | osu! Skins"
        shareName="skins page"
      />

      <section className="skins-grid" aria-label="Available skins">
        {skins.map((skin) => (
          <SkinCard key={skin.id} skin={skin} soundEnabled={soundEnabled} />
        ))}
      </section>
    </main>
  );
}

export default SkinsPage;
