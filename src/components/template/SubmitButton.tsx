import React, { useState } from 'react';
import FloatingButton from '../modules/FloatingButton';
import PostBox from '../organisms/PostBox';
import { PostData } from './PostList';
import { AnimatePresence, motion } from 'framer-motion'; 

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

      <AnimatePresence>
        {showPostBox && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              className="relative z-50"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.8 }}    
              transition={{ duration: 0.3 }}      
            >
              <PostBox onPostCreate={onPostCreate} onCloseModal={handleCloseModal} />
            </motion.div>
            {/* 背景をクリックするとモーダルを閉じる */}
            <motion.div
              className="absolute inset-0"
              onClick={handleCloseModal}
              initial={{ opacity: 0 }}              
              animate={{ opacity: 0.5 }}            
              exit={{ opacity: 0 }}                 
              transition={{ duration: 0.3 }}        
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubmitButton;
