import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, ShoppingBag, Link2 } from 'lucide-react';
import Link from 'next/link';


export default function RegistrationChoice() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Join Our Marketplace</h1>
          <p className="text-gray-600">Choose how you want to participate in our platform</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Seller Card */}
          <div className="transform transition-all duration-300 hover:-translate-y-1">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <Store className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Register as Seller</CardTitle>
                <CardDescription>Perfect for businesses looking to expand their reach and sell products</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    List and manage your products
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Access to seller analytics
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Secure payment processing
                  </li>
                </ul>
                <Link href="/dashboard/seller">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Register as Seller
                </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Buyer Card */}
          <div className="transform transition-all duration-300 hover:-translate-y-1">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <ShoppingBag className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Register as Buyer</CardTitle>
                <CardDescription>Ideal for those looking to purchase quality products</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    Access to verified sellers
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    Secure buying process
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    Order tracking & history
                  </li>
                </ul>
                <Link href="/dashboard/buyer">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Register as Buyer
                </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}