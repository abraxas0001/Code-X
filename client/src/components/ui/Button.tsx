import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'eraser' | 'tape';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = 'font-handwritten font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed relative';
  
  const variants = {
    // 3D Eraser Style - VIBRANT!
    primary: 'btn-3d bg-crayon-pink text-white font-black rounded-lg hover:bg-crayon-red',
    
    // Mint Green Success Button
    secondary: 'btn-3d bg-crayon-mint text-white font-black rounded-lg hover:bg-crayon-green',
    
    // Purple Accent Button
    ghost: 'btn-3d bg-crayon-purple text-white font-black rounded-lg hover:bg-purple-700',
    
    // Explicit Eraser (Pink)
    eraser: 'btn-3d bg-crayon-pink text-white font-black rounded-lg hover:bg-crayon-red',
    
    // Yellow Highlight Button
    tape: 'btn-3d bg-crayon-yellow text-ink font-black rounded-lg hover:bg-yellow-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  const hoverAnimation = variant === 'primary' || variant === 'eraser' 
    ? {
        scale: 0.98,
        y: 1,
      }
    : variant === 'secondary' || variant === 'tape'
    ? {
        rotate: -1,
        y: -1,
      }
    : {
        scale: 1.02,
      };

  const tapAnimation = variant === 'primary' || variant === 'eraser'
    ? {
        scale: 0.95,
        scaleY: 0.9,
      }
    : {
        scale: 0.95,
      };

  return (
    <motion.button
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {/* Eraser texture lines */}
      {(variant === 'primary' || variant === 'eraser') && (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-white" />
          <div className="absolute top-2/4 left-0 right-0 h-px bg-white" />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-white" />
        </div>
      )}
      
      {/* Tape edge effect */}
      {(variant === 'secondary' || variant === 'tape') && (
        <>
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-ink/5 rounded-full" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-ink/5 rounded-full" />
        </>
      )}
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
