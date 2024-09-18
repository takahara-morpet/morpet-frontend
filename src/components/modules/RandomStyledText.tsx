import React from 'react';
import { getRandomStyle } from './randomStyle';

interface RandomStyledTextProps {
  text: string;
}

const RandomStyledText: React.FC<RandomStyledTextProps> = ({ text }) => {
  return (
    <div>
      {text.split(' ').map((word, index) => (
        <span key={index} style={getRandomStyle()}>
          {word}{' '}
        </span>
      ))}
    </div>
  );
};

export default RandomStyledText;

