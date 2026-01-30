import { useRef, useState } from "react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const trimmed = q.trim();
    if (!trimmed) return;
    onSearch?.(trimmed);
  };

  const toggleVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => setListening(true);
      recognition.onend = () => setListening(false);
      recognition.onerror = () => setListening(false);
      recognition.onresult = (event) => {
        const transcript = event.results?.[0]?.[0]?.transcript;
        if (transcript) {
          setQ(transcript);
        }
      };

      recognitionRef.current = recognition;
    }

    if (listening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  return (
    <form className="search" onSubmit={submit}>
      <button className="search-icon-btn" type="submit" aria-label="Search">
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <circle cx="11" cy="11" r="6.5" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      </button>
      <input
        className="search-input"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search your question here…"
        autoComplete="off"
      />
      <div className="voice-wrap">
        {listening ? <span className="voice-waves" aria-hidden="true" /> : null}
        <button
          className={`search-voice-btn ${listening ? "is-listening" : ""}`}
          type="button"
          aria-label="Voice input"
          onClick={toggleVoice}
        >
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0" />
          <path d="M12 18v3" />
        </svg>
        </button>
      </div>
    </form>
  );
}
