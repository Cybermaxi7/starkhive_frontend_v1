# StarkHive Frontend

A decentralized Web3 job marketplace built on Starknet that connects recruiters, companies, and freelancers. StarkHive combines LinkedIn-style professional networking with Upwork-style marketplace functionality, powered by smart contracts for secure, trustless transactions.

## 🚀 Features

-   **Decentralized Job Marketplace**: Post and apply for jobs with smart contract security
-   **Professional Networking**: LinkedIn-style feed with Web3 focus
-   **Multi-Role Platform**: Freelancers, Recruiters, and Admins
-   **Starknet Integration**: Wallet connection and blockchain payments
-   **Modern UI**: Beautiful dark/light mode with gradient branding
-   **Real-time Features**: Live messaging and notifications

## 🛠 Technology Stack

-   **Framework**: Next.js 15 with App Router and TypeScript
-   **Styling**: Tailwind CSS with shadcn/ui components
-   **State Management**: TanStack Query + Zustand
-   **Authentication**: NextAuth.js v5 with role-based access
-   **Web3**: Starknet integration for wallet connections
-   **Forms**: React Hook Form with Zod validation
-   **Animations**: Framer Motion
-   **Rich Text**: Tiptap editor

## 🏃‍♂️ Getting Started

### Prerequisites

-   Node.js 18+
-   npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd starkhive-frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3001](http://localhost:3001) to view the application.

## 🌐 Backend Integration

This frontend connects to the StarkHive NestJS backend API:

-   **Backend URL**: `http://localhost:3000`
-   **Frontend URL**: `http://localhost:3001`
-   **Authentication**: JWT tokens with refresh mechanism

## 🎨 Brand Guidelines

-   **Colors**: Blue-to-purple gradient (#00BFFF to #8A2BE2)
-   **Design**: Professional Web3 aesthetic
-   **Theme**: Full dark/light mode support
-   **Layout**: Desktop-first with mobile responsiveness

## 🔐 User Roles

-   **Freelancers**: Browse and apply for jobs, build portfolios
-   **Recruiters**: Post jobs, manage applications, hire talent
-   **Admins**: Platform moderation and management

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── layout/           # Layout components
└── lib/                  # Utilities and configurations
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Deployment

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is part of the StarkHive ecosystem - building the future of decentralized work.

---

**StarkHive** - _Decentralized Job Marketplace on Starknet_ 🚀
