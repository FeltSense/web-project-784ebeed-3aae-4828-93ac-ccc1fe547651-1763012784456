'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Careers', href: '#careers' },
    ],
    services: [
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Custom Development', href: '#services' },
      { name: 'Data Analytics', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Case Studies', href: '#testimonials' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Support', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Compliance', href: '#compliance' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TB</span>
              </div>
              <span className="text-2xl font-bold text-white">Tech Business</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with innovative technology solutions that drive growth and competitive advantage in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <Mail className="text-blue-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <div className="text-white font-semibold mb-1">Email</div>
                <div className="text-gray-400 text-sm">contact@techbusiness.com</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="text-blue-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <div className="text-white font-semibold mb-1">Phone</div>
                <div className="text-gray-400 text-sm">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <div className="text-white font-semibold mb-1">Location</div>
                <div className="text-gray-400 text-sm">San Francisco, CA 94102</div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Tech Business. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}