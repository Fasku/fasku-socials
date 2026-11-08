import { useEffect, useRef, useState } from 'react';

import './ProfileActions.css';

function ProfileActions({ soundEnabled, onToggleSound, shareTitle = '@Fasku', shareName = 'profile' }) {
  const [status, setStatus] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  function showStatus(message) {
    setStatus(message);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus(''), 4000);
  }

  async function shareProfile() {
    const url = new URL(window.location.href);
    url.hash = '';
    url.search = '';

    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, url: url.href });
        showStatus(`${shareName} shared!`);
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(url.href);
      showStatus(`${shareName} link copied!`);
    } catch {
      showStatus('Could not copy the link. You can copy it from your address bar.');
    }
  }

  return (
    <div className="profile-actions">
      <div className="profile-action-buttons">
        <button
          className="profile-action"
          type="button"
          aria-pressed={soundEnabled}
          onClick={onToggleSound}
        >
          <span aria-hidden="true">{soundEnabled ? '♫' : '♪'}</span>
          Sound {soundEnabled ? 'on' : 'off'}
        </button>
        <button className="profile-action" type="button" onClick={shareProfile}>
          <span aria-hidden="true">↗</span>
          Share {shareName}
        </button>
      </div>
      <p className="profile-action-status" role="status">{status}</p>
    </div>
  );
}

export default ProfileActions;
