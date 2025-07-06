'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Users,
  Briefcase,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

type UserRole = 'freelancer' | 'recruiter';

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>('freelancer');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', { ...formData, role: selectedRole });
    }, 2000);
  };

  const roles = [
    {
      value: 'freelancer' as UserRole,
      label: 'Freelancer',
      description: 'Find amazing projects and grow your career',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      value: 'recruiter' as UserRole,
      label: 'Recruiter',
      description: 'Hire top talent for your projects',
      icon: Briefcase,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-lg space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link href="/" className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StarkHive
            </span>
          </Link>

          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
            <p className="text-muted-foreground mt-2">
              Sign in to your account to continue building the future of work
            </p>
          </div>
        </div>

        {/* Role Selection */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">Choose your role</Label>
          <div className="grid grid-cols-2 gap-3">
            {roles.map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => setSelectedRole(role.value)}
                className={`
                  relative p-4 rounded-lg border-2 transition-all duration-200 text-left
                  ${
                    selectedRole === role.value
                      ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                      : 'border-border hover:border-primary/50 hover:bg-accent/50'
                  }
                `}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-r ${role.gradient} flex items-center justify-center`}
                    >
                      <role.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold">{role.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {role.description}
                  </p>
                </div>

                {selectedRole === role.value && (
                  <div className="absolute -top-1 -right-1">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Selected
                    </Badge>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Login Form */}
        <Card className="border-border/50 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">
              Sign in as {roles.find((r) => r.value === selectedRole)?.label}
            </CardTitle>
            <CardDescription>
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
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

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Sign in
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Sign Up Link */}
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Create one now
            </Link>
          </p>

          <div className="flex items-center gap-4 text-xs text-center justify-center text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
