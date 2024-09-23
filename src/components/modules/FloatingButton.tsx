import { PlusIcon } from '@heroicons/react/24/outline';
import React, { FC } from 'react';
import './FloatingButton.css'; // CSSファイルをインポート

interface FloatingButtonProps {
  onClick?: () => void;
}

const FloatingButton: FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="floating-button" // CSSクラスを適用
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
};

export default FloatingButton;
