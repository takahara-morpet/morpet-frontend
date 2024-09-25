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
      className="floating-button tooltip" // CSSクラスを適用
      data-tooltip="投稿する"
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
};

export default FloatingButton;
