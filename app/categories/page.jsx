'use client'

import { motion } from 'framer-motion';
import { Shirt, ShoppingBag, CircleDollarSign } from 'lucide-react';
import MotionCard from '@/components/ui/motion-card';
import { CardContent } from "@/components/ui/card";

const categories = [
  {
    name: 'T-Shirts & Polos',
    description: 'Cotton, polyester, and blended t-shirts and polo shirts',
    count: '850',
    features: ['100% Cotton', 'Polyester Blend', 'Printed', 'Plain'],
    icon: Shirt
  },
  {
    name: 'Denim & Trousers',
    description: 'High-quality denim jeans and casual trousers',
    count: '620',
    features: ['Regular Fit', 'Slim Fit', 'Stretch Denim', 'Cotton Twill'],
    icon: ShoppingBag
  },
  {
    name: 'Dresses & Skirts',
    description: 'Fashionable dresses and skirts for all occasions',
    count: '480',
    features: ['A-Line', 'Maxi', 'Casual', 'Formal'],
    icon: CircleDollarSign
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Browse Our Categories
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Explore our wide range of garment stocklots categorized for your convenience
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {categories.map((category) => (
            <MotionCard
              key={category.name}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/80 border border-gray-100"
            >
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex items-start sm:items-center mb-3 sm:mb-4">
                  <category.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">{category.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{category.count} listings</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
}