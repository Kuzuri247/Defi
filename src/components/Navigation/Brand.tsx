import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export function Brand() {
  return (
    <Link 
      to="/"
      className="flex items-center space-x-2 transition-opacity hover:opacity-80"
    >
      <Zap className="h-8 w-8 text-indigo-500" />
      <span className="text-xl font-bold text-white">Stable Fun</span>
    </Link>
  );
}