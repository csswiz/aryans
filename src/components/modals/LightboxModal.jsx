import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, imageSrc, title, description }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <button 
        onClick={onClose}
        className="absolute top-5 right-5 p-2.5 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors z-10"
        aria-label="Close Lightbox"
      >
        <X size={24} />
      </button>

      <div className="max-w-5xl w-full bg-royal-950 rounded-3xl overflow-hidden shadow-2xl border border-gold-500/40 animate-scaleUp flex flex-col">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={imageSrc}
            alt={title || 'Campus Facility'}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 bg-royal-950 text-white border-t border-royal-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-cinzel text-xl font-bold text-white">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-stone-300 font-light mt-1 max-w-2xl">
                {description}
              </p>
            )}
          </div>

          <span className="badge-gold self-start sm:self-center shrink-0">
            The Aryans Campus Life
          </span>
        </div>
      </div>
    </div>
  );
}
