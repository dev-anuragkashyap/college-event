import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import '../Style/Popup.css';

export default function SocialPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasSeenSocialPopup');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem('hasSeenSocialPopup', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <div className="popup-badge">🔥 STAY CONNECTED</div>
          <Dialog.Title className="dialog-title">Join Our Community!</Dialog.Title>
          <Dialog.Description className="dialog-description">
            Never miss an update, photo, or event announcement. Follow Study Hall College on our official channels:
          </Dialog.Description>

          <div className="popup-social-row">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="popup-social-icon instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="popup-social-icon youtube" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="popup-social-icon facebook" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="popup-social-icon twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="popup-social-icon linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
            <button className="popup-dismiss-btn" onClick={() => setOpen(false)}>
              Maybe Later
            </button>
          </div>

          <Dialog.Close asChild>
            <button className="popup-close-btn" aria-label="Close">
              <X className="w-4 h-4" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}