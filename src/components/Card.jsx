import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 */
const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  shadow = 'shadow',
  rounded = 'rounded-lg',
  hover = false,
  ...rest 
}) => {
  const baseClasses = `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${rounded} ${shadow} ${padding}`;
  const hoverClasses = hover ? 'transition-transform duration-200 hover:scale-105 hover:shadow-lg' : '';
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div className={combinedClasses} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.string,
  shadow: PropTypes.string,
  rounded: PropTypes.string,
  hover: PropTypes.bool,
};

export default Card;