import React from 'react';
import { Atom } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-brand-500/20 transition-colors">
            <Atom className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">Nexus AI</span>
      </div>
      
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
        <a href="#" className="hover:text-white transition-colors">플랫폼 소개</a>
        <a href="#" className="hover:text-white transition-colors">가격 정책</a>
        <a href="#" className="hover:text-white transition-colors">문의하기</a>
      </div>
    </nav>
  );
};

export default Navbar;