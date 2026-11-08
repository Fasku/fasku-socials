import { useEffect, useId, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

import { setupIcon } from '../data/setup';

import './MySettings.css';

const settings = [
  { label: "Mouse DPI", value: "1600" },
  { label: "OSU! Sens", value: "0.5" },
  { label: "Valorant Sens", value: "0.157" },
  { label: "Mouse", value: "MChose L7 Pro" },
  { label: "Keyboard", value: "Akko Mod 007 V5 HE" },
];

export default function MySettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(null);
  const timeoutRef = useRef(null);
  const contentId = useId();

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  async function handleCopy(value, label) {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(label);
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setCopied(null);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }

  return (
    <Container className="pushdown-overlay">
      <div className="setup-dropdown">
        <button
          type="button"
          className="setup-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls={contentId}
        >
          <span
            className="setup-icon"
            aria-hidden="true"
            style={{ '--setup-icon-size': `${setupIcon.size}px` }}
          >
            {setupIcon.src ? (
              <img src={setupIcon.src} alt="" />
            ) : (
              setupIcon.emoji
            )}
          </span>

          <span className="setup-heading">
            <span className="setup-title">My Setup</span>
            <span className="setup-subtitle">
              Sensitivity & Gear
            </span>
          </span>

          <span className="setup-arrow-container">
            <span
              className={`setup-arrow ${isOpen ? "open" : ""}`}
              aria-hidden="true"
            >
              ▼
            </span>
          </span>
        </button>

        <div
          id={contentId}
          className={`setup-content ${isOpen ? "open" : ""}`}
          inert={!isOpen}
        >
          <div className="setup-content-inner">
            {settings.map(({ label, value }) => (
              <button
                key={label}
                type="button"
                className="setup-row"
                onClick={() => handleCopy(value, label)}
                title={`Copy ${value}`}
              >
                <span className="setup-label">{label}</span>

                <span className="setup-value">
                  {value}
                  <span className="setup-copy-status" aria-live="polite">
                    {copied === label ? " ✓ Copied!" : ""}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
