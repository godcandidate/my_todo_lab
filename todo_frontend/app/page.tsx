'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Code, Rocket, Settings } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Task<span className="text-purple-400">Ops</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            My DevOps sandbox for practicing modern development and deployment workflows
          </p>
          <Link href="/todos">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              Launch Todo App <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader>
              <CheckCircle className="h-8 w-8 text-green-400 mb-2" />
              <CardTitle className="text-white">Task Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Full CRUD operations with modern React patterns
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader>
              <Code className="h-8 w-8 text-blue-400 mb-2" />
              <CardTitle className="text-white">MERN Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                MongoDB, Express, React, Node.js with TypeScript
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader>
              <Settings className="h-8 w-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Docker Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Containerized with Docker Compose for easy deployment
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader>
              <Rocket className="h-8 w-8 text-purple-400 mb-2" />
              <CardTitle className="text-white">DevOps Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                CI/CD, testing, and modern deployment practices
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Built With</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Docker'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800/50 text-gray-300 rounded-full border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}