'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Users,
  Briefcase,
  ArrowRight,
  Sparkles,
  User,
  Building,
  Globe,
  CheckCircle,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

type UserRole = 'freelancer' | 'recruiter';

function SignupForm() {
  const searchParams = useSearchParams();
  const [selectedRole, setSelectedRole] = useState<UserRole>('freelancer');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',

    // Role specific
    company: '',
    title: '',
    bio: '',
    website: '',

    // Agreements
    agreeToTerms: false,
    agreeToPrivacy: false,
    subscribeToUpdates: true,
  });

  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam === 'freelancer' || roleParam === 'recruiter') {
      setSelectedRole(roleParam);
    }
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checkbox.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Signup attempt:', { ...formData, role: selectedRole });
    }, 2000);
  };

  const roles = [
    {
      value: 'freelancer' as UserRole,
      label: 'Freelancer',
      description: 'Showcase your skills and find amazing projects',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Build your portfolio',
        'Apply to projects',
        'Get paid securely',
      ],
    },
    {
      value: 'recruiter' as UserRole,
      label: 'Recruiter',
      description: 'Find and hire the best talent for your company',
      icon: Briefcase,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Post job listings',
        'Access talent pool',
        'Manage applications',
      ],
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Choose Role',
      description: 'Pick your path',
    },
    { number: 2, title: 'Basic Info', description: 'Tell us about yourself' },
    { number: 3, title: 'Complete Setup', description: 'Finish your profile' },
  ];

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1:
        return selectedRole === 'freelancer' || selectedRole === 'recruiter';
      case 2:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.password &&
          formData.confirmPassword
        );
      case 3:
        return formData.agreeToTerms && formData.agreeToPrivacy;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link href="/" className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />{' '}
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StarkHive
            </span>
          </Link>

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Join StarkHive
            </h1>
            <p className="text-muted-foreground mt-2">
              Create your account and start building the future of decentralized
              work
            </p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center space-x-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center space-y-2">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200
                    ${
                      currentStep >= step.number
                        ? 'bg-gradient-to-r from-primary to-secondary border-primary text-white'
                        : isStepComplete(step.number)
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-border text-muted-foreground'
                    }
                  `}
                >
                  {isStepComplete(step.number) && currentStep > step.number ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step.number
                  )}
                </div>
                <div className="text-center hidden sm:block">
                  <p className="text-xs font-medium">{step.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="w-12 sm:w-16 h-0.5 bg-border mx-4" />
              )}
            </div>
          ))}
        </div>

        <Card className="border-border/50 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">
              Step {currentStep}: {steps[currentStep - 1].title}
            </CardTitle>
            <CardDescription>
              {steps[currentStep - 1].description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Role Selection */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    Choose your role
                  </Label>
                  <div className="grid gap-4">
                    {roles.map((role) => (
                      <button
                        key={role.value}
                        type="button"
                        onClick={() => setSelectedRole(role.value)}
                        className={`
                          relative p-6 rounded-lg border-2 transition-all duration-200 text-left
                          ${
                            selectedRole === role.value
                              ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                              : 'border-border hover:border-primary/50 hover:bg-accent/50'
                          }
                        `}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg bg-gradient-to-r ${role.gradient} flex items-center justify-center`}
                            >
                              <role.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <span className="text-lg font-semibold">
                                {role.label}
                              </span>
                              <p className="text-sm text-muted-foreground">
                                {role.description}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {role.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        {selectedRole === role.value && (
                          <div className="absolute -top-2 -right-2">
                            <Badge className="bg-gradient-to-r from-primary to-secondary">
                              <Sparkles className="w-3 h-3 mr-1" />
                              Selected
                            </Badge>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Basic Information */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Profile Setup */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  {selectedRole === 'recruiter' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company name</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="company"
                            name="company"
                            placeholder="Acme Corp"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Company website</Label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="website"
                            name="website"
                            type="url"
                            placeholder="https://acme.com"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="title">
                      {selectedRole === 'freelancer'
                        ? 'Professional title'
                        : 'Your role'}
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder={
                        selectedRole === 'freelancer'
                          ? 'e.g., Full-stack Developer'
                          : 'e.g., Tech Recruiter'
                      }
                      value={formData.title}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">
                      {selectedRole === 'freelancer'
                        ? 'Brief bio'
                        : 'Company description'}
                    </Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      placeholder={
                        selectedRole === 'freelancer'
                          ? 'Tell us about your skills and experience...'
                          : 'Tell us about your company and what you do...'
                      }
                      value={formData.bio}
                      onChange={handleInputChange}
                      className="min-h-[100px]"
                    />
                  </div>

                  {/* Agreements */}
                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked: boolean) =>
                          setFormData({ ...formData, agreeToTerms: checked })
                        }
                        required
                      />
                      <Label
                        htmlFor="agreeToTerms"
                        className="text-sm leading-relaxed"
                      >
                        I agree to the{' '}
                        <Link
                          href="/terms"
                          className="text-primary hover:underline"
                        >
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                          href="/privacy"
                          className="text-primary hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeToPrivacy"
                        name="agreeToPrivacy"
                        checked={formData.agreeToPrivacy}
                        onCheckedChange={(checked: boolean) =>
                          setFormData({ ...formData, agreeToPrivacy: checked })
                        }
                        required
                      />
                      <Label
                        htmlFor="agreeToPrivacy"
                        className="text-sm leading-relaxed"
                      >
                        I acknowledge that I understand and agree to the
                        collection and use of my information as described in the
                        Privacy Policy
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="subscribeToUpdates"
                        name="subscribeToUpdates"
                        checked={formData.subscribeToUpdates}
                        onCheckedChange={(checked: boolean) =>
                          setFormData({
                            ...formData,
                            subscribeToUpdates: checked,
                          })
                        }
                      />
                      <Label
                        htmlFor="subscribeToUpdates"
                        className="text-sm leading-relaxed"
                      >
                        Send me updates about new features and opportunities
                        (optional)
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}

                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium"
                  disabled={isLoading || !isStepComplete(currentStep)}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Creating account...
                    </div>
                  ) : currentStep < 3 ? (
                    <div className="flex items-center gap-2">
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Create account
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Sign In Link */}
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Loading component for Suspense fallback
function SignupLoading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Zap className="w-7 h-7 text-white animate-pulse" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StarkHive
            </span>
          </div>
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded-md mb-4"></div>
            <div className="h-4 bg-muted rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component with Suspense wrapper
export default function SignupPage() {
  return (
    <Suspense fallback={<SignupLoading />}>
      <SignupForm />
    </Suspense>
  );
}
