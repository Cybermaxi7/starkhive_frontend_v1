export function generateOGImageSVG() {
  return `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f0f23;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#1a1a3a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0f0f23;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#00BFFF;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#00BFFF;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:1" />
        </linearGradient>
        
        <!-- Animated background pattern -->
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.1"/>
        </pattern>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bgGradient)"/>
      <rect width="1200" height="630" fill="url(#grid)"/>
      
      <!-- Decorative elements -->
      <circle cx="150" cy="100" r="3" fill="#00BFFF" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="1050" cy="200" r="2" fill="#8A2BE2" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="200" cy="500" r="4" fill="#00BFFF" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      
      <!-- Main logo and branding -->
      <g transform="translate(100, 150)">
        <!-- Logo icon -->
        <rect width="80" height="80" rx="16" fill="url(#logoGradient)"/>
        <path 
          d="M140 30L115 50h12v20l25-22.5H140z" 
          fill="white" 
          stroke="white" 
          stroke-width="1"
        />
        
        <!-- Main title -->
        <text x="100" y="30" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white">
          StarkHive
        </text>
        
        <!-- Subtitle -->
        <text x="100" y="80" font-family="Arial, sans-serif" font-size="32" fill="#a0a0a0">
          The Future of Decentralized Work
        </text>
        
        <!-- Description -->
        <text x="0" y="140" font-family="Arial, sans-serif" font-size="24" fill="#e0e0e0">
          🚀 Web3 Job Marketplace on Starknet
        </text>
        <text x="0" y="170" font-family="Arial, sans-serif" font-size="24" fill="#e0e0e0">
          ⚡ Smart Contract Payments
        </text>
        <text x="0" y="200" font-family="Arial, sans-serif" font-size="24" fill="#e0e0e0">
          🎯 AI-Powered Job Matching
        </text>
        <text x="0" y="230" font-family="Arial, sans-serif" font-size="24" fill="#e0e0e0">
          🔗 On-Chain Reputation System
        </text>
        
        <!-- Call to action -->
        <rect x="0" y="270" width="300" height="60" rx="12" fill="url(#logoGradient)"/>
        <text x="150" y="308" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">
          Join the Revolution
        </text>
      </g>
      
      <!-- Right side illustration -->
      <g transform="translate(700, 100)">
        <!-- Network nodes -->
        <circle cx="100" cy="100" r="25" fill="url(#logoGradient)" opacity="0.8"/>
        <circle cx="200" cy="150" r="20" fill="#00BFFF" opacity="0.6"/>
        <circle cx="300" cy="80" r="18" fill="#8A2BE2" opacity="0.7"/>
        <circle cx="250" cy="250" r="22" fill="url(#logoGradient)" opacity="0.5"/>
        <circle cx="150" cy="300" r="15" fill="#00BFFF" opacity="0.8"/>
        
        <!-- Connections -->
        <line x1="100" y1="100" x2="200" y2="150" stroke="url(#logoGradient)" stroke-width="2" opacity="0.6"/>
        <line x1="200" y1="150" x2="300" y2="80" stroke="url(#logoGradient)" stroke-width="2" opacity="0.6"/>
        <line x1="200" y1="150" x2="250" y2="250" stroke="url(#logoGradient)" stroke-width="2" opacity="0.6"/>
        <line x1="250" y1="250" x2="150" y2="300" stroke="url(#logoGradient)" stroke-width="2" opacity="0.6"/>
        <line x1="100" y1="100" x2="150" y2="300" stroke="url(#logoGradient)" stroke-width="2" opacity="0.4"/>
        
        <!-- Labels -->
        <text x="70" y="140" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">Freelancers</text>
        <text x="200" y="190" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">Projects</text>
        <text x="300" y="120" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">Companies</text>
        <text x="250" y="290" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">Payments</text>
        <text x="150" y="340" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">Reputation</text>
      </g>
      
      <!-- Bottom branding -->
      <text x="600" y="580" font-family="Arial, sans-serif" font-size="18" fill="#8A2BE2" text-anchor="middle">
        starkhive.dev
      </text>
    </svg>
  `;
}
