import React from 'react';

const Grid = ({ 
  children, 
  cols = { xs: 1, sm: 2, md: 3, lg: 4 },
  gap = 6,
  className = '',
  ...props 
}) => {
  const getColsClasses = () => {
    if (typeof cols === 'number') {
      return `grid-cols-${cols}`;
    }
    
    const colsClasses = [];
    if (cols.xs) colsClasses.push(`grid-cols-${cols.xs}`);
    if (cols.sm) colsClasses.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) colsClasses.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) colsClasses.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) colsClasses.push(`xl:grid-cols-${cols.xl}`);
    
    return colsClasses.join(' ');
  };
  
  const classes = [
    'grid',
    getColsClasses(),
    `gap-${gap}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Grid;