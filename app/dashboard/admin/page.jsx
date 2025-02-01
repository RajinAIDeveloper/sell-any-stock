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
  Users,
  DollarSign,
  ShoppingBag,
  AlertCircle,
  CheckCircle,
  XCircle,
  RefreshCw,
  Search,
  Filter,
  Download,
  Menu
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactionStatus = {
  Completed: { class: 'bg-green-100 text-green-800' },
  Processing: { class: 'bg-yellow-100 text-yellow-800' },
  Failed: { class: 'bg-red-100 text-red-800' }
};

const recentTransactions = [
  {
    id: 'TRX001',
    seller: 'Fashion Exports Ltd',
    buyer: 'Style Corp',
    amount: '₹2,45,000',
    status: 'Completed',
    date: '2024-02-01'
  },
  {
    id: 'TRX002',
    seller: 'Garment Hub',
    buyer: 'Trend Traders',
    amount: '₹1,80,000',
    status: 'Processing',
    date: '2024-02-01'
  }
];

const verificationRequests = [
  {
    id: 'REQ001',
    company: 'Fashion Exports Ltd',
    type: 'Seller',
    location: 'Mumbai',
    status: 'Pending',
    date: '2024-02-01'
  },
  {
    id: 'REQ002',
    company: 'Style Traders',
    type: 'Buyer',
    location: 'Delhi',
    status: 'Verified',
    date: '2024-02-01'
  }
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-sm sm:text-base text-gray-600">Platform Overview & Management</p>
          </div>
          <div className="flex w-full sm:w-auto gap-2 sm:gap-4">
            <Button variant="outline" className="flex-1 sm:flex-none justify-center">
              <RefreshCw className="mr-2 h-4 w-4" /> 
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button className="flex-1 sm:flex-none justify-center bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" /> 
              <span className="hidden sm:inline">Export Data</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {[
            { title: 'Total Users', value: '2,456', icon: Users, color: 'blue' },
            { title: 'Platform Revenue', value: '₹12.4L', icon: DollarSign, color: 'green' },
            { title: 'Active Listings', value: '876', icon: ShoppingBag, color: 'purple' },
            { title: 'Pending Verifications', value: '24', icon: AlertCircle, color: 'orange' }
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
                      <p className="text-xs sm:text-sm font-medium text-gray-600">{stat.title}</p>
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
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Verification Requests */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle className="text-lg sm:text-xl">Verification Requests</CardTitle>
                <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-4">
                  <Input 
                    placeholder="Search requests..."
                    className="w-full sm:w-64"
                  />
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="overflow-auto">
              <div className="min-w-[800px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="whitespace-nowrap">ID</TableHead>
                      <TableHead className="whitespace-nowrap">Company</TableHead>
                      <TableHead className="whitespace-nowrap">Type</TableHead>
                      <TableHead className="whitespace-nowrap">Location</TableHead>
                      <TableHead className="whitespace-nowrap">Status</TableHead>
                      <TableHead className="whitespace-nowrap">Date</TableHead>
                      <TableHead className="whitespace-nowrap">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {verificationRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium whitespace-nowrap">{request.id}</TableCell>
                        <TableCell className="whitespace-nowrap">{request.company}</TableCell>
                        <TableCell className="whitespace-nowrap">{request.type}</TableCell>
                        <TableCell className="whitespace-nowrap">{request.location}</TableCell>
                        <TableCell className="whitespace-nowrap">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium
                            ${request.status === 'Verified' ? 'bg-green-100 text-green-800' :
                            request.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'}`}>
                            {request.status}
                          </span>
                        </TableCell>
                        <TableCell className="whitespace-nowrap">{request.date}</TableCell>
                        <TableCell>
                          <div className="flex gap-1 sm:gap-2">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <XCircle className="h-4 w-4 text-red-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle className="text-lg sm:text-xl">Recent Transactions</CardTitle>
                <Button variant="outline" className="w-full sm:w-auto">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="overflow-auto">
              <div className="min-w-[800px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="whitespace-nowrap">ID</TableHead>
                      <TableHead className="whitespace-nowrap">Seller</TableHead>
                      <TableHead className="whitespace-nowrap">Buyer</TableHead>
                      <TableHead className="whitespace-nowrap">Amount</TableHead>
                      <TableHead className="whitespace-nowrap">Status</TableHead>
                      <TableHead className="whitespace-nowrap">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium whitespace-nowrap">{transaction.id}</TableCell>
                        <TableCell className="whitespace-nowrap">{transaction.seller}</TableCell>
                        <TableCell className="whitespace-nowrap">{transaction.buyer}</TableCell>
                        <TableCell className="whitespace-nowrap">{transaction.amount}</TableCell>
                        <TableCell className="whitespace-nowrap">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                            transactionStatus[transaction.status].class
                          }`}>
                            {transaction.status}
                          </span>
                        </TableCell>
                        <TableCell className="whitespace-nowrap">{transaction.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}