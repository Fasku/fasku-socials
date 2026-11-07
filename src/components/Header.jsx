import { useState } from 'react';
import { Container } from 'react-bootstrap';

import fasku from '../assets/images/mecrop.jpg';
import kenma from '../assets/images/kenma.jpg';

function Header() {
  const [profilePic, setProfilePic] = useState(fasku);

  // Use for onClick, TODO: refactor prob
  function toggleProfilePic() {
    setProfilePic((currentPicture) =>
      currentPicture === fasku ? kenma : fasku
    );
  }

  return (
    <Container className="pushdown-overlay">
      <img
        src={"https://unavatar.io/tiktok/fasku_"}
        alt="Fasku profile"
        className="rounded-circle mb-3 shadow-lg profile-click-animate"
        style={{
          cursor: 'pointer',
          width: '200px',
          height: '200px',
          objectFit: 'cover',
        }}
      />

      <h1
        className="fw-bold light"
        style={{ fontSize: '30px' }}
      >
        @Fasku
      </h1>

      <p
        className="light"
        style={{ fontSize: '18px' }}
      >
        Welcome to my space 🚀
      </p>
    </Container>
  );
}

export default Header;