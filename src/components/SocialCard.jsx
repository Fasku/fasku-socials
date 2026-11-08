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

function SocialCard({ link, index }) {
  function handleClick() {
    playSound(wiiClick, 0.5);
  }

  function handleHover() {
    playSound(wiiHover, 1);
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <div
        className="social-card-entrance"
        style={{ '--delay': index }}
      >
        <Card
          className="social-card mb-2"
          onMouseEnter={handleHover}
          onClick={handleClick}
        >
          <Card.Body className="social-card-body">
            <div className="social-card-icon">
              <img
                src={link.icon}
                alt={`${link.name} icon`}
              />
            </div>

            <span className="social-card-name">
              {link.name}
            </span>

            <div className="social-card-spacer" />
          </Card.Body>
        </Card>
      </div>
    </a>
  );
}

export default SocialCard;