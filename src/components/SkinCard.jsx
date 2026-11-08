import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import wiiClick from '../assets/sounds/wii-click.mp3';

import { playSound } from '../utils/audio';
import './SkinCard.css';

function SkinCard({ skin, soundEnabled }) {
  function playClickSound() {
    if (soundEnabled) playSound(wiiClick, 0.5);
  }

  return (
    <Card className="skin-card h-100">
      <Carousel
        aria-label={`${skin.name} previews`}
        onSelect={playClickSound}
        interval={null}
        indicators={skin.images.length > 1}
        controls={skin.images.length > 1}
      >
        {skin.images.length > 0 ? (
          skin.images.map((image, index) => (
            <Carousel.Item key={image}>
              <a
                href={skin.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="skin-image-link"
                aria-label={`Download ${skin.name}`}
              >
                <Card.Img
                  variant="top"
                  src={image}
                  className="skin-img"
                  loading="lazy"
                  alt={`${skin.name} preview ${index + 1}`}
                />
              </a>
            </Carousel.Item>
          ))
        ) : (
          <Carousel.Item>
            <a
              href={skin.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="skin-image-link"
              aria-label={`Download ${skin.name}`}
            >
              <div className="skin-placeholder">
                <span>Preview coming soon</span>
                <p>Click to download</p>
              </div>
            </a>
          </Carousel.Item>
        )}
      </Carousel>

      <Card.Body className="d-flex align-items-center justify-content-center">
        <div>
          <Card.Title as="h2" className="skin-name">{skin.name}</Card.Title>
          <a
            href={skin.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="skin-download-link"
            aria-label={`Download ${skin.name} (opens in a new tab)`}
          >
            Download skin <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SkinCard;
