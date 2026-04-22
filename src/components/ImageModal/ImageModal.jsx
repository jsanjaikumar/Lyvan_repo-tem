import { useEffect } from "react";
import "./ImageModal.css";

export default function ImageModal({ item, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!item) {
    return null;
  }

  return (
    <div className="image-modal" role="presentation" onClick={onClose}>
      <div
        className="image-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={item.label}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="image-modal__header">
          <strong>{item.label}</strong>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <img src={item.image} alt={item.label} />
      </div>
    </div>
  );
}
