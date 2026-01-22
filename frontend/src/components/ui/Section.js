import React from 'react';
import Container from './Container';

const Section = ({ 
  children, 
  className = '',
  background = 'white',
  padding = 'default',
  containerSize = 'default',
  id,
  ...props 
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-secondary-50',
    'gray-light': 'bg-secondary-25',
    primary: 'bg-primary-600',
    'primary-light': 'bg-primary-50',
    'primary-gradient': 'bg-gradient-to-br from-primary-600 to-primary-800',
    transparent: 'bg-transparent'
  };
  
  const paddings = {
    none: '',
    sm: 'py-8 sm:py-12',
    default: 'py-12 sm:py-16 lg:py-20',
    lg: 'py-16 sm:py-20 lg:py-24',
    xl: 'py-20 sm:py-24 lg:py-32'
  };
  
  const classes = [
    backgrounds[background],
    paddings[padding],
    className
  ].filter(Boolean).join(' ');

  return (
    <section className={classes} id={id} {...props}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;