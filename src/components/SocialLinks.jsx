import SocialCard from './SocialCard';
import socialLinks from '../data/socialLinks';
import { socialLinksLayout } from '../data/site';

import './SocialLinks.css';

function SocialLinks({ soundEnabled, layout = socialLinksLayout }) {
  const variant = layout === 'cards' ? 'cards' : 'icons';

  return (
    <nav className={`social-links social-links--${variant}`} aria-label="Social links">
      <ul className="social-links-list">
        {socialLinks.map((link, index) => (
          <li key={link.name}>
            <SocialCard
              link={link}
              index={index}
              soundEnabled={soundEnabled}
              layout={variant}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SocialLinks;
