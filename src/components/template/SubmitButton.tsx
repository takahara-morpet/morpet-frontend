"use client"; 
import React, { useState } from 'react';
import FloatingButton from '../modules/FloatingButton';
import PostBox from '../organisms/PostBox';


const SubmitButton = () => {
  const [showPostBox, setShowPostBox] = useState(false); // PostBoxの表示状態を管理

  // PostBoxの表示を切り替える関数
  const togglePostBox = () => {
    setShowPostBox(!showPostBox);
  };

  return (
    <div className="relative w-full h-screen">
      {/* フローティングボタン */}
      <div>
        <FloatingButton onClick={togglePostBox} />
      </div>

      {/* PostBoxの表示（ボタンを押したら画面中央に表示） */}
      {showPostBox && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative z-10">
            <PostBox />
          </div>
          <div className="absolute inset-0" onClick={togglePostBox} />
        </div>
      )}
    </div>
  );
};

export default SubmitButton;
