import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/layout/page-layout';
import {
  Users,
  Briefcase,
  Shield,
  Zap,
  Globe,
  Star,
  ArrowRight,
  TrendingUp,
  Coins,
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <Badge
              variant="secondary"
              className="mb-6 text-sm px-4 py-2 text-wrap"
            >
              🚀 Built on Starknet - The Future of Web3 Jobs
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Decentralized
            </span>
            <br />
            <span className="text-foreground">Job Marketplace</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with top blockchain talent and opportunities on the
            world&apos;s first
            <span className="text-primary font-semibold">
              {' '}
              trustless job platform
            </span>
            . Powered by smart contracts, secured by Starknet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/signup?role=freelancer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6"
              >
                <Users className="w-5 h-5 mr-2" />
                Find Jobs as Freelancer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/signup?role=recruiter">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary/20 hover:border-primary/40 text-lg px-8 py-6"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Hire Top Talent
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">$2M+</div>
              <div className="text-sm text-muted-foreground">Paid Out</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5K+</div>
              <div className="text-sm text-muted-foreground">Jobs Posted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                StarkHive
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of work with blockchain-powered
              transparency, instant payments, and verified reputation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Contract Security</CardTitle>
                <CardDescription>
                  Payments automatically secured by Starknet smart contracts. No
                  disputes, no delays, no middlemen.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>On-Chain Reputation</CardTitle>
                <CardDescription>
                  Build verifiable credentials and reputation through NFT-based
                  reviews that follow you everywhere.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Matching</CardTitle>
                <CardDescription>
                  Advanced algorithms match skills with opportunities, ensuring
                  perfect fits for both sides.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Global Payments</CardTitle>
                <CardDescription>
                  Instant payments in ETH, USDC, STRK, or fiat. Work with
                  anyone, anywhere, anytime.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Zero Platform Fees</CardTitle>
                <CardDescription>
                  Direct peer-to-peer transactions mean you keep 100% of what
                  you earn. No hidden costs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Multi-Currency Support</CardTitle>
                <CardDescription>
                  Accept payments in crypto or fiat. Flexibility to work in your
                  preferred currency.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, secure, and transparent - the way hiring should be.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* For Freelancers */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary">
                For Freelancers
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Create Your Profile</h4>
                    <p className="text-muted-foreground">
                      Showcase your skills, portfolio, and connect your wallet
                      for payments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Find Perfect Jobs</h4>
                    <p className="text-muted-foreground">
                      AI matches you with opportunities that fit your skills and
                      preferences.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Work & Get Paid</h4>
                    <p className="text-muted-foreground">
                      Complete work, get instant payment via smart contracts,
                      build your reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Companies */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-secondary">
                For Companies
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Post Your Job</h4>
                    <p className="text-muted-foreground">
                      Define requirements, budget, and timeline for your
                      project.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Review Top Talent</h4>
                    <p className="text-muted-foreground">
                      AI curates the best candidates with verified skills and
                      reputation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Hire & Collaborate</h4>
                    <p className="text-muted-foreground">
                      Secure payment in escrow, track progress, and release
                      funds automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join thousands of professionals already building the future on
            StarkHive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup?role=freelancer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6"
              >
                Start as Freelancer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/signup?role=recruiter">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary/20 hover:border-primary/40 text-lg px-8 py-6"
              >
                Hire Talent Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
