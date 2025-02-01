'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Shirt, Factory, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import MotionCard from '@/components/ui/motion-card';

const HomePage = () => {
   // Animation variants remain the same
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
  }

  const categories = [
    { name: 'T-Shirts & Polos', count: '850', image:'/tshirt-polo.jpg' },
    { name: 'Denim & Trousers', count: '620', image:'/denim.jpg' },
    { name: 'Dresses & Skirts', count: '480', image:'/dress.jpg' },
    { name: 'Shirts & Blouses', count: '550', image:'/shirtsblouses.jpeg' },
    { name: 'Knitwear & Sweaters', count: '320', image:'/sweater.jpeg' },
    { name: 'Jackets & Outerwear', count: '290', image:'/jacket.jpeg' }
    
  ];

  const featuredProducts = [
    {
      category: 'T-Shirts & Polos',
      items: [
        { 
          title: 'Cotton T-Shirts Export Surplus', 
          price: '$2.50/pc', 
          moq: '1000 pcs', 
          location: 'Tirupur', 
          description: '180 GSM, 100% Cotton, Mixed Sizes',
          image:'/jacket.jpeg' 
        },
        { 
          title: 'Polo Shirts Factory Stock', 
          price: '$4.50/pc', 
          moq: '500 pcs', 
          location: 'Delhi NCR',
          image:'/polo.jpeg', 
          description: '220 GSM, Cotton Pique, S-XXL' 
        },
        { 
          title: 'Printed T-Shirts Clearance', 
          price: '$3.00/pc', 
          moq: '800 pcs', 
          location: 'Mumbai', 
          image:'/print tshirt.jpeg', 
          description: '160 GSM, Cotton Blend, All Sizes' 
        }
      ]
    },
    {
      category: 'Denim & Trousers',
      items: [
        { 
          title: 'Men\'s Denim Jeans Lot', 
          price: '$8.00/pc', 
          moq: '300 pcs', 
          location: 'Ahmedabad', 
          image:'/denim.jpg',
          description: '12 oz Denim, Mixed Washes' 
        },
        { 
          title: 'Women\'s Jeggings Stock', 
          price: '$6.50/pc', 
          moq: '500 pcs', 
          location: 'Surat', 
          image:'/jegging.jpeg',
          description: 'Cotton Stretch, Standard Sizes' 
        },
        { 
          title: 'Cargo Pants Surplus', 
          price: '$7.50/pc', 
          moq: '400 pcs', 
          location: 'Bangalore',
          image:'/cargo.jpeg', 
          description: 'Cotton Twill, Multiple Colors' 
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Hero Section with split layout */}
      <div className="relative bg-gradient-to-r from-blue-600 to-violet-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8"></div>
        <div className="container mx-auto px-4 py-16 sm:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Your Gateway to Premium Garment Stock
              </h1>
              <div className="space-y-4 mb-8">
                {['Verified Suppliers', 'Factory-Direct Prices', 'Quality Assured'].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-lg text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50"
                >
                  List Your Stock
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto text-black hover:text-white border-white hover:bg-white/10"
                >
                  Start Buying
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/factory.jpg"
                    alt="Garment Factory"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Active Suppliers', value: '500+' },
            { label: 'Products Listed', value: '10,000+' },
            { label: 'Countries Served', value: '25+' },
            { label: 'Monthly Deals', value: '1,000+' }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Premium Categories
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <MotionCard 
              key={category.name}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={category.image || '/placeholder.jpg'}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-semibold text-xl text-white mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-200">{category.count} listings</p>
                </div>
              </div>
            </MotionCard>
          ))}
        </motion.div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-4 py-12 sm:py-20">
        {featuredProducts.map((category) => (
          <div key={category.category} className="mb-10 sm:mb-16">
            <motion.h3 
              className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {category.category}
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {category.items.map((item) => (
                <MotionCard 
                  key={item.title}
                  className="hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/80 border-0"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="relative w-full mb-3 sm:mb-4">
                      <div className="relative w-full pt-[75%] overflow-hidden rounded-lg"> {/* 4:3 aspect ratio */}
                        <Image
                          src={item.image || '/images/placeholder.jpg'}
                          alt={item.title}
                          fill
                          className="absolute inset-0 object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={90}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm sm:text-base line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-blue-600 text-sm sm:text-base">
                          {item.price}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          MOQ: {item.moq}
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                          Ready to Ship
                        </div>
                        <p>{item.location}</p>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </MotionCard>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Benefits Section - Mobile optimized */}
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Our Platform
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Factory,
              title: "Verified Manufacturers",
              description: "Connect directly with trusted garment factories and exporters"
            },
            {
              icon: TrendingUp,
              title: "Wholesale Prices",
              description: "Access factory-direct prices on premium garment lots"
            },
            {
              icon: Shield,
              title: "Quality Assured",
              description: "All stocklots verified for quality and authenticity"
            }
          ].map((benefit, index) => (
            <MotionCard 
              key={index}
              variants={fadeInUp}
              className="backdrop-blur-sm bg-white/80 border-0"
              whileHover={{ y: -5 }}
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <benefit.icon className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-blue-600" />
                </motion.div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-500">{benefit.description}</p>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;