'use client'

import React from 'react';
import { Package } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Package className="h-6 w-6" />
              <span className="font-bold">StockLot Hub</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Bangladesh's premier marketplace for garment stocklots, factory surplus, and export excess.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="transition-colors hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/help" className="transition-colors hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="transition-colors hover:text-foreground">
                  Seller Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="transition-colors hover:text-foreground">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-medium">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for updates.
            </p>
            <form className="mt-4 space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StockLot Hub. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;