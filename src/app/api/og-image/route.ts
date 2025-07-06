import { NextResponse } from 'next/server';
import { generateOGImageSVG } from '@/lib/og-image';

export async function GET() {
  try {
    const svg = generateOGImageSVG();

    // Convert SVG to response
    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new NextResponse('Error generating image', { status: 500 });
  }
}

export const runtime = 'edge';
