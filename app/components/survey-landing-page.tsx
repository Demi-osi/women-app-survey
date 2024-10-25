import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SurveyLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Women&apos;s Health App Survey</h1>
        <p className="text-xl text-gray-600 mb-8">Help us create a better healthcare experience for women</p>
        <Link href="/steps" passHref>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Start Survey
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default SurveyLandingPage;
