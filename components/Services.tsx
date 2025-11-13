'use client';

import { Cloud, Code, Database, Smartphone, Lock, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services that ensure your business operates seamlessly with maximum uptime and flexibility.',
      color: 'bg-blue-500',
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique business needs, built with cutting-edge technologies and best practices.',
      color: 'bg-purple-500',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and business intelligence solutions that drive informed decisions.',
      color: 'bg-green-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.',
      color: 'bg-pink-500',
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets, ensure compliance, and safeguard against evolving threats.',
      color: 'bg-red-500',
    },
    {
      icon: BarChart,
      title: 'Digital Strategy',
      description: 'Strategic consulting and roadmap development to align technology initiatives with your business goals and market opportunities.',
      color: 'bg-orange-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <span>Discuss Your Project</span>
          </a>
        </div>
      </div>
    </section>
  );
}