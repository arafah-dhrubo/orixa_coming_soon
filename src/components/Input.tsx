import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  className?: string;
}

const Input: React.FC<InputProps> = ({ icon, className = '', ...props }) => {
  return (
    <div className={`w-full max-w-sm ${className}`}>
      <div className="relative">
        <input
          {...props}
          className="w-full px-4 py-2 pr-10 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:ring-2 focus:ring-[#cfe0ff]"
        />
        {icon && (
          <div className="absolute w-5 h-5 top-1/2 -translate-y-1/2 right-4 text-slate-600 pointer-events-none flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
