'use client';

import React, { useState } from 'react';
import { Check, Share2 } from 'lucide-react';

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Gets the full URL of the current page
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2 text-sm font-black uppercase tracking-widest text-gray-400 hover:text-green-600 transition-all active:scale-95">
      {copied ? (
        <>
          <Check
            size={14}
            className="text-green-600"
          />
          <span className="text-green-600">Copied!</span>
        </>
      ) : (
        <>
          <Share2 size={16} />
          <span>Share Issue</span>
        </>
      )}
    </button>
  );
};

export default ShareButton;
