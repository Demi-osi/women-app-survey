'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Users, Calendar, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const LandingPage = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: "Personalized Health Tracking",
      description: "Customized health monitoring tailored to your unique needs"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Community Support",
      description: "Connect with others on similar health journeys"
    },
    {
      icon: <Calendar className="w-6 h-6 text-green-500" />,
      title: "Smart Reminders",
      description: "Never miss important health appointments"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Shape the Future of Women's Health
              </h1>
              <p className="text-xl text-gray-600">
                Help us create a revolutionary health app designed exclusively for women. 
                Your feedback matters in building a better healthcare experience.
              </p>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full"
                onClick={() => window.location.href = '/steps'}
              >
                Take the Survey
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative flex justify-center items-center"
            >
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center overflow-hidden">
                <Image
                  src="/woman.jpg"
                  alt="Women's Health App"
                  width={256}
                  height={256}
                  className="rounded-full transform -rotate-6 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Your Input Matters
          </h2>
          <p className="text-xl text-gray-600">
            Help us build features that truly make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      >
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-12 rounded-3xl">
          <CardContent className="space-y-8">
            <h2 className="text-4xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-xl">
              Your feedback will help shape the future of women's healthcare technology
            </p>
            <Button 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
              onClick={() => window.location.href = '/steps'}
            >
              Start the Survey
              <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">About</h3>
              <p className="text-gray-600">
                We're dedicated to improving women's healthcare through technology and community feedback.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <p className="text-gray-600">
                Have questions? Reach out to our support team.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Privacy</h3>
              <p className="text-gray-600">
                Your data is secure and protected. Read our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
