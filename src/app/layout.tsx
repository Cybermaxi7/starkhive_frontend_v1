import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { faviconMetadata } from '@/lib/favicon-metadata';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'StarkHive | Decentralized Web3 Job Marketplace',
  description:
    'Connect recruiters, companies, and freelancers on the Blockchain. Secure smart contract payments, on-chain reputation, and AI-driven job matching.',
  keywords:
    'web3, blockchain, jobs, freelance, starknet, smart contracts, decentralized',
  authors: [{ name: 'StarkHive Team' }],
  icons: faviconMetadata,
  metadataBase: new URL('https://starkhive.dev'), // Update this to your actual domain
  openGraph: {
    title: 'StarkHive - The Future of Decentralized Work',
    description:
      'Join the Web3 revolution! Connect with top talent and exciting projects on the blockchain. Secure payments, on-chain reputation, and AI-powered matching.',
    type: 'website',
    siteName: 'StarkHive',
    url: 'https://starkhive.dev',
    images: [
      {
        url: '/api/og-image',
        width: 1200,
        height: 630,
        alt: 'StarkHive - Decentralized Job Marketplace on Starknet',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StarkHive - Web3 Job Marketplace',
    description:
      'The future of work is here! Join freelancers and companies building on Starknet. 🚀',
    images: ['/api/og-image'],
    creator: '@cybermaxi7', // Your Twitter handle
    site: '@starkhive', // Update when you create StarkHive Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add when you set up Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
