import { Card } from 'react-bootstrap';

import './SocialCard.css';

import wiiClick from '../assets/sounds/wii-click.mp3';
import wiiHover from '../assets/sounds/wii-hover.wav';

function playSound(sound, volume = 1) {
  const audio = new Audio(sound);
  audio.volume = volume;

  audio.play().catch((error) => {
    console.error('Could not play sound:', error);
  });
}

function SocialCard({ link, index, soundEnabled }) {
  function handleClick() {
    if (soundEnabled) playSound(wiiClick, 0.5);
  }

  function handleHover() {
    if (soundEnabled) playSound(wiiHover, 0.35);
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label={`${link.name} (opens in a new tab)`}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onFocus={handleHover}
    >
      <div
        className="social-card-entrance"
        style={{ '--delay': index }}
      >
        <Card
          className="social-card mb-2"
        >
          <Card.Body className="social-card-body">
            <div className="social-card-icon">
              <img
                src={link.icon}
                alt=""
              />
            </div>

            <span className="social-card-name">
              {link.name}
            </span>

            <span className="social-card-arrow" aria-hidden="true">↗</span>
          </Card.Body>
        </Card>
      </div>
    </a>
  );
}

export default SocialCard;
