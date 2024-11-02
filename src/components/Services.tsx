import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Website Development',
    description: 'Custom websites that engage your audience and drive results',
    icon: '🌐'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns that convert visitors into customers',
    icon: '📈'
  },
  {
    title: 'Brand Identity',
    description: 'Memorable branding that sets you apart from competitors',
    icon: '✨'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}