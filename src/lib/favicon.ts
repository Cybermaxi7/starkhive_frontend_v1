export function generateFavicon() {
  const svg = `
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
  `;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}
