import { PlusIcon } from '@heroicons/react/24/outline'; // Heroiconsのアウトライン版PlusIconを使用
import React, { FC } from 'react';
import colors from '../../constants/color'; // colorをインポート

interface FloatingButtonProps {
  onClick?: () => void; // onClick ハンドラをオプションとして追加
}

const FloatingButton: FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick} // ボタンに onClick イベントを追加
      className="p-4 rounded-full shadow-lg transition duration-300"
      style={{
        color: colors.background,
        backgroundColor: colors.primary,
      }}
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
};

export default FloatingButton;
