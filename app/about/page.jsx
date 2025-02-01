'use client'

import { motion } from 'framer-motion';
import { Users, Target, BarChart } from 'lucide-react';

const stats = [
  { number: '10K+', label: 'Active Buyers' },
  { number: '500+', label: 'Verified Sellers' },
  { number: '₹50Cr+', label: 'Monthly GMV' }
];

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: '/api/placeholder/150/150'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Operations',
    image: '/api/placeholder/150/150'
  },
  {
    name: 'Amit Patel',
    role: 'Technical Lead',
    image: '/api/placeholder/150/150'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-blue-100">
              Revolutionizing the garment stocklot industry by connecting manufacturers 
              directly with buyers, eliminating inefficiencies, and creating value for all stakeholders.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2024, StockLot Hub emerged from a simple observation: the garment 
              industry needed a better way to handle surplus inventory. What started as a 
              small initiative in Dhaka has now grown into Bangladesh's leading stocklot 
              marketplace.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve thousands of manufacturers and buyers across Bangladesh, 
              helping them connect, trade, and grow their businesses efficiently.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}