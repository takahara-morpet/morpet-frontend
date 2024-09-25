import React, { useState } from 'react';
import FloatingButton from '../modules/FloatingButton';
import PostBox from '../organisms/PostBox';
import { PostData } from './PostList';

interface SubmitButtonProps {
  onPostCreate: (newPost: PostData) => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPostCreate }) => {
  const [showPostBox, setShowPostBox] = useState(false); // PostBoxの表示状態を管理

  // PostBoxの表示を切り替える関数
  const togglePostBox = () => {
    setShowPostBox(!showPostBox);
  };

  // モーダルを閉じる関数
  const handleCloseModal = () => {
    setShowPostBox(false);
  };

  return (
    <div className="fixed bottom-12 right-6 z-50">
      {/* フローティングボタン */}
      <FloatingButton onClick={togglePostBox} />

      {/* PostBoxの表示（ボタンを押したら画面中央に表示） */}
      {showPostBox && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative z-50" onClick={(e) => e.stopPropagation()}>
            <PostBox onPostCreate={onPostCreate} onCloseModal={handleCloseModal} />
          </div>
          <div className="absolute inset-0" onClick={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default SubmitButton;
