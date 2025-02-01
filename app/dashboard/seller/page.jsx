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
  Package,
  DollarSign,
  Users,
  TrendingUp,
  Plus,
  ShoppingBag,
  MessageSquare,
  Bell
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 2780 },
  { month: 'May', sales: 1890 },
  { month: 'Jun', sales: 2390 },
];

const recentOrders = [
  {
    id: '#ORD001',
    product: 'Cotton T-Shirts Lot',
    quantity: '1000 pcs',
    buyer: 'Fashion Hub',
    status: 'Processing'
  },
  {
    id: '#ORD002',
    product: 'Denim Jeans Stock',
    quantity: '500 pcs',
    buyer: 'Style Corp',
    status: 'Shipped'
  },
  {
    id: '#ORD003',
    product: 'Polo Shirts Bulk',
    quantity: '750 pcs',
    buyer: 'Trend Traders',
    status: 'Delivered'
  },
];

export default function SellerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Seller Dashboard</h1>
            <p className="text-gray-600">Welcome back, Fashion Exports Inc.</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" /> Add New Stocklot
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {[
            { title: 'Active Listings', value: '24', icon: Package, color: 'blue' },
            { title: 'Total Sales', value: '₹4.2L', icon: DollarSign, color: 'green' },
            { title: 'Active Buyers', value: '156', icon: Users, color: 'purple' },
            { title: 'Conversion Rate', value: '68%', icon: TrendingUp, color: 'orange' }
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

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Sales Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div 
                    key={order.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4"
                  >
                    <div>
                      <p className="font-medium">{order.product}</p>
                      <p className="text-sm text-gray-600">
                        {order.id} • {order.quantity}
                      </p>
                    </div>
                    <div className="w-full sm:w-auto text-left sm:text-right">
                      <p className="font-medium">{order.buyer}</p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-800' 
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button variant="outline" className="h-auto py-4">
            <ShoppingBag className="mr-2 h-5 w-5" />
            <span>Manage Inventory</span>
          </Button>
          <Button variant="outline" className="h-auto py-4">
            <MessageSquare className="mr-2 h-5 w-5" />
            <span>Buyer Messages</span>
          </Button>
          <Button variant="outline" className="h-auto py-4">
            <Bell className="mr-2 h-5 w-5" />
            <span>Notifications</span>
          </Button>
        </div>
      </div>
    </div>
  );
}