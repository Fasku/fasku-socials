
import { useId, useState } from "react";
import "./MySetup.css";

export default function MySetup() {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

const settings = [
    { label: "Mouse DPI", value: "1600" },
    { label: "OSU! Sens", value: "0.5" },
    { label: "Valorant Sens", value: "0.25" },
    { label: "Mouse", value: "MChose L7 Pro" },
    { label: "Keyboard", value: "Akko Mod 007 V5 HE" },
  ];

  return (
    <div className={`setup-dropdown ${isOpen ? "is-open" : ""}`}>
      <button
        className="setup-toggle"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="setup-icon" aria-hidden="true">
          🎮
        </span>

        <span className="setup-heading">
          <span className="setup-title">My Setup</span>
          <span className="setup-subtitle">
            Sensitivity & Gear
          </span>
        </span>

        <span className="setup-arrow-container">
          <svg
            className={`setup-arrow ${isOpen ? "open" : ""}`}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        id={contentId}
        className={`setup-content ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="setup-content-inner">
          {settings.map(({ label, value }) => (
            <div className="setup-row" key={label}>
              <span className="setup-label">{label}</span>
              <span className="setup-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
