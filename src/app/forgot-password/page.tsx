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
import {
  Hexagon,
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Clock,
} from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link href="/" className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Hexagon className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StarkHive
            </span>
          </Link>

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {isEmailSent ? 'Check your email' : 'Forgot password?'}
            </h1>
            <p className="text-muted-foreground mt-2">
              {isEmailSent
                ? 'We sent a password reset link to your email address'
                : "Don't worry, we'll send you reset instructions"}
            </p>
          </div>
        </div>

        <Card className="border-border/50 shadow-xl">
          {!isEmailSent ? (
            <>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl">Reset your password</CardTitle>
                <CardDescription>
                  Enter your email address and we&apos;ll send you a link to
                  reset your password
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium"
                    disabled={isLoading || !email}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending reset link...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Send reset link
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </>
          ) : (
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Reset link sent!</h3>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ve sent a password reset link to{' '}
                    <strong>{email}</strong>
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    What to do next:
                  </div>
                  <ol className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>1. Check your email inbox</li>
                    <li>2. Click the reset link in the email</li>
                    <li>3. Create a new password</li>
                    <li>4. Sign in with your new password</li>
                  </ol>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Didn&apos;t receive the email? Check your spam folder.</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setIsEmailSent(false);
                      setEmail('');
                    }}
                    className="text-primary hover:text-primary/80"
                  >
                    Try a different email address
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Back to Login */}
        <div className="text-center space-y-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to sign in
          </Link>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
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
