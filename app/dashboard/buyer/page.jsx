'use client'

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  Heart,
  Clock,
  TrendingDown,
  Search,
  Bell,
  MessageSquare,
  Package,
  MapPin,
  DollarSign,
} from 'lucide-react';
import { Input } from "@/components/ui/input";

const recentOrders = [
  {
    id: 'ORD001',
    product: 'Cotton T-Shirts Lot',
    quantity: '1000 pcs',
    seller: 'Fashion Exports Ltd',
    amount: '₹2,45,000',
    status: 'Processing',
    date: '2024-02-01'
  },
  {
    id: 'ORD002',
    product: 'Denim Jeans Stock',
    quantity: '500 pcs',
    seller: 'Style Traders',
    amount: '₹1,80,000',
    status: 'Delivered',
    date: '2024-01-28'
  }
];

const savedStocklots = [
  {
    title: 'Premium Cotton T-Shirts',
    seller: 'Fashion Exports Ltd',
    price: '₹180/pc',
    moq: '1000 pcs',
    location: 'Tirupur'
  },
  {
    title: 'Denim Jeans Collection',
    seller: 'Style Traders',
    price: '₹450/pc',
    moq: '500 pcs',
    location: 'Delhi'
  },
  {
    title: 'Polo Shirts Bulk',
    seller: 'Garment Hub',
    price: '₹250/pc',
    moq: '750 pcs',
    location: 'Mumbai'
  }
];

export default function BuyerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Buyer Dashboard</h1>
            <p className="text-gray-600">Welcome back, Style Corp</p>
          </div>

          {/* Navigation Actions */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button variant="outline" className="justify-between sm:justify-start w-full sm:w-auto">
              <div className="flex items-center">
                <Bell className="mr-2 h-4 w-4" /> 
                <span>Notifications</span>
              </div>
              <span className="ml-2 bg-red-100 text-red-600 rounded-full px-2 py-0.5 text-xs">
                3
              </span>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <Search className="mr-2 h-4 w-4" /> Browse Stocklots
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {[
            { title: 'Total Orders', value: '24', icon: ShoppingBag, color: 'blue' },
            { title: 'Saved Items', value: '16', icon: Heart, color: 'red' },
            { title: 'Pending Orders', value: '3', icon: Clock, color: 'yellow' },
            { title: 'Best Deal', value: '40% Off', icon: TrendingDown, color: 'green' }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <h3 className="text-xl sm:text-2xl font-bold mt-1">{stat.value}</h3>
                    </div>
                    <div className={`p-2 sm:p-3 bg-${stat.color}-100 rounded-full`}>
                      <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle>Recent Orders</CardTitle>
                  <Button variant="outline" className="w-full sm:w-auto">View All Orders</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div 
                      key={order.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4"
                    >
                      <div>
                        <div className="flex items-start sm:items-center gap-3">
                          <Package className="h-8 w-8 text-blue-600 shrink-0" />
                          <div>
                            <p className="font-medium">{order.product}</p>
                            <p className="text-sm text-gray-600">
                              {order.id} • {order.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full sm:w-auto text-left sm:text-right">
                        <p className="font-medium">{order.amount}</p>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Button variant="outline" className="h-auto py-4">
                <MessageSquare className="mr-2 h-5 w-5" />
                <span>Message Sellers</span>
              </Button>
              <Button variant="outline" className="h-auto py-4">
                <Clock className="mr-2 h-5 w-5" />
                <span>Order History</span>
              </Button>
            </div>
          </div>

          {/* Saved Stocklots */}
          <div className="w-full">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Saved Stocklots</CardTitle>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {savedStocklots.map((item) => (
                    <div
                      key={item.title}
                      className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2 shrink-0" />
                          {item.price}
                        </div>
                        <div className="flex items-center">
                          <Package className="h-4 w-4 mr-2 shrink-0" />
                          MOQ: {item.moq}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 shrink-0" />
                          {item.location}
                        </div>
                      </div>
                      <div className="mt-3">
                        <Button size="sm" className="w-full">
                          Contact Seller
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}