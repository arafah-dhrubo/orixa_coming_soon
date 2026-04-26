import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  isSubmitted?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  type = 'button', 
  isSubmitted = false, 
  disabled = false,
  children, 
  onClick, 
  className = '' 
}) => {
  const isDisabled = disabled || isSubmitted;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        h-[40px] py-2 px-4 rounded-md border-none cursor-pointer
        text-white font-semibold text-sm tracking-wide
        transition-colors duration-200 w-full
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#cfe0ff]
        ${isSubmitted ? 'bg-emerald-500 opacity-90 cursor-not-allowed' : 'bg-[#0043ee] hover:bg-[#0031cc]'}
        ${isDisabled ? 'opacity-80 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
