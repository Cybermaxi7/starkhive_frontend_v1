import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/layout/page-layout';
import {
  Star,
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Quote,
  Play,
  Award,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const successStories = [
  {
    id: 1,
    title: 'DeFi Protocol Built from Scratch',
    client: 'CryptoFlow',
    freelancer: 'Alex Chen',
    category: 'Smart Contract Development',
    budget: '$85,000',
    duration: '4 months',
    rating: 5.0,
    image: null,
    description:
      'Complete DeFi lending protocol with advanced features like flash loans, liquidation mechanisms, and governance tokens.',
    results: [
      '$2M+ TVL within first month',
      '99.9% uptime since launch',
      'Featured on CoinGecko',
    ],
    skills: ['Cairo', 'Starknet', 'DeFi', 'Smart Contracts'],
    testimonial:
      'Alex delivered exceptional work. The protocol has been running flawlessly and has attracted significant liquidity. Highly recommend!',
    featured: true,
  },
  {
    id: 2,
    title: 'Complete Web3 Gaming Platform',
    client: 'MetaGame Studios',
    freelancer: 'Sarah Rodriguez',
    category: 'Full-Stack Development',
    budget: '$120,000',
    duration: '6 months',
    rating: 5.0,
    image: null,
    description:
      'Built a complete gaming platform with NFT integration, player rewards, and tournament features.',
    results: [
      '10,000+ active players',
      '15,000+ NFTs minted',
      '500+ daily tournaments',
    ],
    skills: ['React', 'Node.js', 'Web3', 'Gaming', 'NFTs'],
    testimonial:
      'Sarah understood our vision perfectly and delivered beyond expectations. The platform is performing incredibly well.',
    featured: true,
  },
  {
    id: 3,
    title: 'Enterprise Blockchain Integration',
    client: 'TechCorp Global',
    freelancer: 'Marcus Kim',
    category: 'Blockchain Integration',
    budget: '$65,000',
    duration: '3 months',
    rating: 5.0,
    image: null,
    description:
      'Integrated blockchain technology into existing enterprise systems for supply chain transparency.',
    results: [
      '40% reduction in fraud',
      'Real-time tracking implemented',
      'Compliance standards met',
    ],
    skills: ['Blockchain', 'Enterprise', 'APIs', 'Security'],
    testimonial:
      'Marcus helped us modernize our entire supply chain. The transparency and security improvements are remarkable.',
    featured: false,
  },
  {
    id: 4,
    title: 'AI-Powered Trading Bot',
    client: 'QuantTech',
    freelancer: 'Emma Wilson',
    category: 'AI & Machine Learning',
    budget: '$45,000',
    duration: '2 months',
    rating: 4.9,
    image: null,
    description:
      'Advanced trading algorithm with machine learning capabilities for automated DeFi trading strategies.',
    results: [
      '35% average returns',
      '99.5% uptime',
      'Risk-adjusted alpha of 2.3',
    ],
    skills: ['Python', 'Machine Learning', 'DeFi', 'Trading'],
    testimonial:
      'Emma&apos;s expertise in both ML and DeFi is outstanding. The bot has consistently outperformed our expectations.',
    featured: false,
  },
  {
    id: 5,
    title: 'NFT Marketplace with Royalties',
    client: 'ArtChain',
    freelancer: 'David Park',
    category: 'Web3 Development',
    budget: '$75,000',
    duration: '5 months',
    rating: 5.0,
    image: null,
    description:
      'Custom NFT marketplace with advanced features like dynamic royalties, collection management, and auction systems.',
    results: [
      '$500K+ in sales volume',
      '2,000+ active traders',
      '95% customer satisfaction',
    ],
    skills: ['Solidity', 'React', 'IPFS', 'NFTs'],
    testimonial:
      'David created exactly what we envisioned. The marketplace is user-friendly and has great performance.',
    featured: false,
  },
  {
    id: 6,
    title: 'Cross-Chain Bridge Protocol',
    client: 'BridgeX',
    freelancer: 'Lisa Zhang',
    category: 'Protocol Development',
    budget: '$150,000',
    duration: '8 months',
    rating: 5.0,
    image: null,
    description:
      'Secure cross-chain bridge connecting Ethereum and Starknet with advanced security mechanisms.',
    results: [
      '$10M+ bridged volume',
      'Zero security incidents',
      'Sub-10 minute transfers',
    ],
    skills: ['Cairo', 'Solidity', 'Security', 'Cross-chain'],
    testimonial:
      'Lisa&apos;s technical expertise is world-class. The bridge has become a critical infrastructure piece for our ecosystem.',
    featured: true,
  },
];

const stats = [
  {
    number: '$50M+',
    label: 'Total Project Value',
    icon: DollarSign,
    description: 'Completed across all success stories',
  },
  {
    number: '98.7%',
    label: 'Success Rate',
    icon: TrendingUp,
    description: 'Projects completed successfully',
  },
  {
    number: '500+',
    label: 'Happy Clients',
    icon: Users,
    description: 'Businesses that found success',
  },
  {
    number: '4.9/5',
    label: 'Average Rating',
    icon: Star,
    description: 'Client satisfaction score',
  },
];

export default function SuccessStoriesPage() {
  return (
    <PageLayout>
      {/* Header */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories from the{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                StarkHive
              </span>{' '}
              Community
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how businesses and freelancers are building the future
              together on our platform
            </p>

            {/* Video CTA */}
            <div className="relative max-w-2xl mx-auto">
              <div className="aspect-video bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                >
                  <Play className="h-6 w-6 mr-2" />
                  Watch Success Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/30 transition-colors"
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <CardTitle className="text-lg">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Stories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects, real results, real success on StarkHive
            </p>
          </div>

          <div className="space-y-8">
            {successStories
              .filter((story) => story.featured)
              .map((story) => (
                <Card
                  key={story.id}
                  className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="aspect-video md:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Award className="w-16 h-16 text-primary/60 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">
                          {story.title}
                        </h3>
                        <Badge className="bg-gradient-to-r from-primary to-secondary">
                          Featured Project
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline">{story.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="font-semibold">{story.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3">{story.title}</h3>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="font-bold text-primary">
                            {story.budget}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Project Value
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-secondary">
                            {story.duration}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Duration
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-primary">
                            {story.rating}/5
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Rating
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {story.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {story.results.map((result, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-sm"
                            >
                              <TrendingUp className="h-3 w-3 text-green-500" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {story.skills.map((skill, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-accent/50 p-4 rounded-lg mb-4">
                        <Quote className="h-5 w-5 text-primary mb-2" />
                        <p className="text-sm italic">
                          &ldquo;{story.testimonial}&rdquo;
                        </p>
                        <div className="text-xs text-muted-foreground mt-2">
                          — {story.client}
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                        View Full Case Study
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* More Stories Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore additional projects that showcase our community&apos;s
              capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories
              .filter((story) => !story.featured)
              .map((story) => (
                <Card
                  key={story.id}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <CardHeader>
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-primary/60" />
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {story.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span className="text-sm font-semibold">
                          {story.rating}
                        </span>
                      </div>
                    </div>

                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {story.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="font-semibold text-primary">
                          {story.budget}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Project Value
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-secondary">
                          {story.duration}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Duration
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {story.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">
                        Top Results:
                      </h4>
                      <ul className="space-y-1">
                        {story.results.slice(0, 2).map((result, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-xs"
                          >
                            <TrendingUp className="h-3 w-3 text-green-500" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {story.skills.slice(0, 3).map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full">
                      Read Case Study
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and freelancers who have found success
            on StarkHive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup?role=client">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary"
              >
                <Users className="h-4 w-4 mr-2" />
                Hire Top Talent
              </Button>
            </Link>
            <Link href="/signup?role=freelancer">
              <Button size="lg" variant="outline">
                <Zap className="h-4 w-4 mr-2" />
                Start Freelancing
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
