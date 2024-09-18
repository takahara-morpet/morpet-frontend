import { PlusIcon } from '@heroicons/react/24/outline'; // Heroiconsのアウトライン版PlusIconを使用
import React, { FC } from 'react';

interface FloatingButtonProps {
  onClick?: () => void; // onClick ハンドラをオプションとして追加
}

const FloatingButton: FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick} // ボタンに onClick イベントを追加
      className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
};

export default FloatingButton;
