'use client';

import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-purple-900/85"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Zap className="text-yellow-400" size={20} />
            <span className="text-white font-medium">Innovative Technology Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Transform Your Business
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              With Cutting-Edge Tech
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Empowering businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:shadow-2xl"
            >
              Explore Services
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <Shield className="text-blue-400 mb-3 mx-auto" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">Bank-grade security protecting your data</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <Zap className="text-yellow-400 mb-3 mx-auto" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Lightning Fast</h3>
              <p className="text-gray-300 text-sm">Optimized performance at scale</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <TrendingUp className="text-green-400 mb-3 mx-auto" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Proven Results</h3>
              <p className="text-gray-300 text-sm">Measurable ROI for your business</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}