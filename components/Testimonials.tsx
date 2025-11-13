'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO',
      company: 'InnovateCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'Tech Business transformed our entire infrastructure. Their cloud solutions increased our efficiency by 300% and reduced costs significantly.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      title: 'CTO',
      company: 'DataFlow Systems',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      quote: 'The custom development team delivered beyond our expectations. Their attention to detail and technical expertise is unmatched in the industry.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      title: 'Director of Operations',
      company: 'GlobalTech Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'Working with Tech Business was a game-changer. Their strategic approach and innovative solutions helped us achieve our digital transformation goals.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      title: 'Founder',
      company: 'StartupHub',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'From concept to deployment, the team was professional, responsive, and delivered exceptional results. Highly recommend their services!',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      title: 'VP of Technology',
      company: 'FinanceFirst',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      quote: 'Their cybersecurity solutions gave us peace of mind. The team is knowledgeable, proactive, and truly cares about client success.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      title: 'Head of IT',
      company: 'RetailMax',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80',
      quote: 'The mobile app they developed exceeded all our KPIs. User engagement increased by 250% within the first month of launch.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hear from the businesses we've helped transform with our innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="text-blue-200 absolute top-6 right-6" size={48} />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}