import React from 'react';
import './styles/AnimatedBorderButton.css';

interface AnimatedBorderButtonProps {
  children: React.ReactNode;
}

const AnimatedBorderButton: React.FC<AnimatedBorderButtonProps> = ({ children }) => {
  return (
    <div className="animated-border-button">
      <span className="button-content">{children}</span>
    </div>
  );
};

export default AnimatedBorderButton;