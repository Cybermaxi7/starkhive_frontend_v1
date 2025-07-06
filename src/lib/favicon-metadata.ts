import type { Metadata } from 'next';

export const faviconMetadata: Metadata['icons'] = {
  icon: [
    {
      url:
        'data:image/svg+xml;base64,' +
        btoa(`
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#00BFFF;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="6" fill="url(#gradient)" />
          <path 
            d="M18 7L8 16h5v8l10-9h-5z" 
            fill="white" 
            stroke="white" 
            stroke-width="0.5"
          />
        </svg>
      `),
      sizes: '32x32',
      type: 'image/svg+xml',
    },
    {
      url:
        'data:image/svg+xml;base64,' +
        btoa(`
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#00BFFF;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="16" height="16" rx="3" fill="url(#gradient)" />
          <path 
            d="M9 3.5L4 8h2.5v4l5-4.5H9z" 
            fill="white" 
          />
        </svg>
      `),
      sizes: '16x16',
      type: 'image/svg+xml',
    },
  ],
  shortcut:
    'data:image/svg+xml;base64,' +
    btoa(`
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#00BFFF;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="url(#gradient)" />
      <path 
        d="M18 7L8 16h5v8l10-9h-5z" 
        fill="white" 
        stroke="white" 
        stroke-width="0.5"
      />
    </svg>
  `),
  apple:
    'data:image/svg+xml;base64,' +
    btoa(`
    <svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#00BFFF;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="180" height="180" rx="40" fill="url(#gradient)" />
      <path 
        d="M100 40L45 90h28v50l55-50H100z" 
        fill="white" 
        stroke="white" 
        stroke-width="2"
      />
    </svg>
  `),
};
