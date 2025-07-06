import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/layout/page-layout';
import {
  BookOpen,
  Play,
  Download,
  Users,
  Clock,
  Star,
  ArrowRight,
  Lightbulb,
  Award,
  Code,
  Shield,
  TrendingUp,
  Globe,
} from 'lucide-react';
import Link from 'next/link';

const learningPaths = [
  {
    id: 1,
    title: 'Web3 Development Fundamentals',
    description:
      'Master the basics of blockchain development and smart contracts',
    level: 'Beginner',
    duration: '4 weeks',
    modules: 12,
    students: 2840,
    rating: 4.8,
    icon: Code,
    topics: [
      'Blockchain Basics',
      'Smart Contracts',
      'Web3.js',
      'MetaMask Integration',
    ],
    color: 'from-blue-500 to-cyan-500',
    featured: true,
  },
  {
    id: 2,
    title: 'Starknet & Cairo Mastery',
    description:
      'Deep dive into Starknet development with Cairo programming language',
    level: 'Intermediate',
    duration: '6 weeks',
    modules: 18,
    students: 1560,
    rating: 4.9,
    icon: Shield,
    topics: [
      'Cairo Syntax',
      'Starknet Architecture',
      'DApp Development',
      'Security Best Practices',
    ],
    color: 'from-purple-500 to-violet-500',
    featured: true,
  },
  {
    id: 3,
    title: 'DeFi Protocol Development',
    description: 'Build sophisticated DeFi applications from scratch',
    level: 'Advanced',
    duration: '8 weeks',
    modules: 24,
    students: 890,
    rating: 4.9,
    icon: TrendingUp,
    topics: ['AMM Design', 'Yield Farming', 'Flash Loans', 'Governance Tokens'],
    color: 'from-green-500 to-emerald-500',
    featured: true,
  },
  {
    id: 4,
    title: 'Freelancing on StarkHive',
    description: 'Learn how to succeed as a freelancer in the Web3 space',
    level: 'Beginner',
    duration: '2 weeks',
    modules: 8,
    students: 4120,
    rating: 4.7,
    icon: Users,
    topics: [
      'Profile Optimization',
      'Proposal Writing',
      'Client Communication',
      'Pricing Strategies',
    ],
    color: 'from-orange-500 to-red-500',
    featured: false,
  },
];

const resources = [
  {
    id: 1,
    title: 'Complete Guide to Smart Contract Security',
    type: 'Guide',
    description:
      'Comprehensive security checklist and best practices for smart contract development',
    downloadCount: 12500,
    pages: 45,
    category: 'Security',
    featured: true,
  },
  {
    id: 2,
    title: 'Web3 Project Pricing Calculator',
    type: 'Tool',
    description:
      'Interactive tool to help freelancers price their Web3 development projects accurately',
    downloadCount: 8900,
    pages: null,
    category: 'Business',
    featured: true,
  },
  {
    id: 3,
    title: 'Starknet Development Templates',
    type: 'Code',
    description:
      'Ready-to-use templates for common Starknet applications and smart contracts',
    downloadCount: 6780,
    pages: null,
    category: 'Development',
    featured: false,
  },
  {
    id: 4,
    title: 'DeFi Market Analysis Report',
    type: 'Report',
    description:
      'Quarterly analysis of DeFi trends, opportunities, and emerging protocols',
    downloadCount: 5420,
    pages: 68,
    category: 'Research',
    featured: false,
  },
];

const webinars = [
  {
    id: 1,
    title: 'Building Your First DApp on Starknet',
    instructor: 'Sarah Chen',
    instructorTitle: 'Senior Blockchain Developer',
    date: 'January 15, 2025',
    time: '2:00 PM UTC',
    duration: '60 minutes',
    attendees: 245,
    description:
      'Learn to build and deploy your first decentralized application on Starknet with hands-on coding.',
    topics: [
      'Starknet Setup',
      'Smart Contract Development',
      'Frontend Integration',
      'Deployment',
    ],
    isLive: false,
    isUpcoming: true,
  },
  {
    id: 2,
    title: 'Scaling Your Freelance Business in Web3',
    instructor: 'Marcus Rodriguez',
    instructorTitle: 'Business Development Expert',
    date: 'January 22, 2025',
    time: '3:00 PM UTC',
    duration: '45 minutes',
    attendees: 189,
    description:
      'Strategies for growing your freelance practice and commanding premium rates in the Web3 industry.',
    topics: [
      'Market Positioning',
      'Premium Pricing',
      'Client Retention',
      'Scaling Strategies',
    ],
    isLive: false,
    isUpcoming: true,
  },
  {
    id: 3,
    title: 'Security Auditing for Smart Contracts',
    instructor: 'Alex Kumar',
    instructorTitle: 'Security Auditor',
    date: 'December 18, 2024',
    time: '4:00 PM UTC',
    duration: '75 minutes',
    attendees: 567,
    description:
      'Master the art of smart contract security auditing with real-world examples and case studies.',
    topics: [
      'Common Vulnerabilities',
      'Audit Process',
      'Tools & Techniques',
      'Reporting',
    ],
    isLive: false,
    isUpcoming: false,
  },
];

export default function LearnPage() {
  return (
    <PageLayout>
      {/* Header */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Level Up Your{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Web3 Skills
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master blockchain development, learn best practices, and stay
              ahead of the curve with our comprehensive learning resources
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline">
                <Play className="h-5 w-5 mr-2" />
                Watch Intro Video
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Learning Paths */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Learning Paths
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured courses designed to take you from beginner to expert in
              Web3 development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths
              .filter((path) => path.featured)
              .map((path) => (
                <Card
                  key={path.id}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${path.color}`} />

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${path.color} flex items-center justify-center`}
                      >
                        <path.icon className="w-5 h-5 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {path.level}
                      </Badge>
                    </div>

                    <CardTitle className="group-hover:text-primary transition-colors">
                      {path.title}
                    </CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {path.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        {path.modules} modules
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {path.students.toLocaleString()} students
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-yellow-500" />
                        {path.rating}/5
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">
                        What you&apos;ll learn:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {path.topics.slice(0, 3).map((topic, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {topic}
                          </Badge>
                        ))}
                        {path.topics.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{path.topics.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button className="w-full">
                      Start Learning
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Learning Paths
            </Button>
          </div>
        </section>

        {/* Free Resources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Free Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download guides, tools, and templates to accelerate your Web3
              development journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <Card
                key={resource.id}
                className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${resource.featured ? 'border-primary/30 bg-primary/5' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          className={
                            resource.featured
                              ? 'bg-gradient-to-r from-primary to-secondary'
                              : ''
                          }
                        >
                          {resource.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {resource.category}
                        </Badge>
                        {resource.featured && (
                          <Badge variant="outline" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                    </div>
                    <div className="ml-4">
                      <Download className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="mb-4">
                    {resource.description}
                  </CardDescription>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      {resource.downloadCount.toLocaleString()} downloads
                    </div>
                    {resource.pages && (
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        {resource.pages} pages
                      </div>
                    )}
                  </div>

                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Live Webinars & Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join live sessions with industry experts and learn from real-world
              experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {webinars.map((webinar) => (
              <Card
                key={webinar.id}
                className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${webinar.isUpcoming ? 'border-primary/30' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {webinar.isUpcoming && (
                          <Badge className="bg-gradient-to-r from-primary to-secondary">
                            Upcoming
                          </Badge>
                        )}
                        {webinar.isLive && (
                          <Badge variant="destructive">Live Now</Badge>
                        )}
                        {!webinar.isUpcoming && !webinar.isLive && (
                          <Badge variant="outline">Recorded</Badge>
                        )}
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {webinar.title}
                      </CardTitle>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div>{webinar.date}</div>
                    <div>{webinar.time}</div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {webinar.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xs">
                        {webinar.instructor
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div>
                        <div className="font-semibold">
                          {webinar.instructor}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {webinar.instructorTitle}
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardDescription className="mb-4">
                    {webinar.description}
                  </CardDescription>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">
                      Topics covered:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {webinar.topics.map((topic, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {webinar.attendees} registered
                    </div>
                  </div>

                  <Button
                    className={`w-full ${webinar.isUpcoming ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                  >
                    {webinar.isUpcoming ? 'Register Free' : 'Watch Recording'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <div className="max-w-3xl mx-auto">
            <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Become a Web3 Expert?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our learning community and start building your expertise in
              blockchain development today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary"
                >
                  <Award className="h-4 w-4 mr-2" />
                  Start Learning Journey
                </Button>
              </Link>
              <Link href="/community">
                <Button size="lg" variant="outline">
                  <Globe className="h-4 w-4 mr-2" />
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
