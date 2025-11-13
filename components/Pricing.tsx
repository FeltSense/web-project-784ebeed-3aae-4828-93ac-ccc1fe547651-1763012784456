'use client';

import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Initial Consultation & Strategy Session',
    'Custom Technology Assessment',
    'Detailed Project Roadmap',
    'Architecture Design & Planning',
    'Proof of Concept Development',
    'Security Audit & Recommendations',
    'Performance Optimization Plan',
    '30 Days of Support & Guidance',
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Launch your digital transformation journey with our comprehensive starter package.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <Zap className="text-yellow-300" size={20} />
                <span className="font-medium">Most Popular</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Starter Package</h3>
              <p className="text-blue-100 mb-6">Everything you need to begin your transformation</p>
              <div className="flex items-baseline justify-center">
                <span className="text-6xl font-bold">$29</span>
                <span className="text-xl ml-2 text-blue-200">one-time</span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="text-green-600" size={16} />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Started Now
              </a>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-500 text-sm mt-8">
                🔒 Secure payment processing • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}