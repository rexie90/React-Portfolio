// src/Window.jsx
import { useMemo, useRef } from "react";

export default function Window({ title, onClose, children }) {
  const ref = useRef(null);

  const id = useMemo(() => {
    return `win_${Math.random().toString(16).slice(2)}`;
  }, []);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;

    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
    el.style.setProperty("--glow", "1");
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--glow", "0");
  }

  return (
    <section
      id={id}
      ref={ref}
      className="win"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-label={title}
    >
      <div className="win__bar">
        <div className="traffic" aria-label="Window controls">
          <span
            className="dot red"
            role="button"
            tabIndex={0}
            onClick={onClose}
          />
          <span className="dot yellow" aria-hidden="true" />
          <span className="dot green" aria-hidden="true" />
        </div>

        <div className="win__title">{title}</div>

        <div />
      </div>

      <div className="win__body">{children}</div>
    </section>
  );
}
