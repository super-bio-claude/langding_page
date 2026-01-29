import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
  const Icon = service.icon;

  return (
    <div 
      className="group relative flex flex-col p-6 rounded-2xl border border-white/10 bg-white/60 backdrop-blur-md transition-all duration-300 hover:bg-white/70 hover:border-brand-500/30 hover:shadow-[0_0_15px_rgba(14,165,233,0.15)] animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-500/20 text-brand-500 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} />
      </div>
      
      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-brand-600 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-black text-sm mb-6 flex-grow leading-relaxed">
        {service.description}
      </p>
      
      <a
        href={service.link}
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-black/80 group-hover:text-black transition-colors"
      >
        {service.buttonText}
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
      
      {/* Decorative gradient blob */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-lg -z-10" />
    </div>
  );
};

export default ServiceCard;