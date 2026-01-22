import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md',
  variant = 'default',
  ...props 
}) => {
  const baseClasses = 'card';
  
  const variants = {
    default: '',
    glass: 'glass',
    gradient: 'bg-gradient-to-br from-white to-secondary-50',
    bordered: 'border-2 border-secondary-200'
  };
  
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  const hoverEffect = hover ? 'card-hover' : '';
  
  const classes = `
    ${baseClasses} 
    ${variants[variant]} 
    ${hoverEffect}
    ${paddings[padding]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;