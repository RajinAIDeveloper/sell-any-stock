'use client'

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 98765 43210',
    subDetails: 'Mon-Fri 9am to 6pm IST'
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'support@stocklothub.com',
    subDetails: '24/7 Support'
  },
  {
    icon: MapPin,
    title: 'Office',
    details: 'Tirupur, Tamil Nadu',
    subDetails: 'India'
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our platform? We're here to help you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="backdrop-blur-sm bg-white/80">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Tell us how we can help..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-blue-100">
                Feel free to reach out to us through any of these channels.
                Our team is ready to assist you.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="backdrop-blur-sm bg-white/80">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        <p className="text-gray-600">{info.details}</p>
                        <p className="text-sm text-gray-500">{info.subDetails}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* FAQ Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-8"
            >
              <p className="text-gray-600">
                Have more questions? Check out our{' '}
                <a href="/faq" className="text-blue-600 hover:underline">
                  FAQ page
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}