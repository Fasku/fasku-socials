import { Container } from 'react-bootstrap';

import './Header.css';

function Header() {
  return (
    <Container className="profile-header pushdown-overlay">
      <img
        src="https://unavatar.io/tiktok/fasku_"
        alt="Fasku profile"
        className="profile-image rounded-circle mb-3 shadow-lg"
      />

      <h1 className="profile-title fw-bold">@Fasku</h1>
      <p className="profile-description">Welcome to my space 🚀</p>
    </Container>
  );
}

export default Header;
