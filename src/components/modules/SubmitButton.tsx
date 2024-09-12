// SubmitButton.tsx
import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
