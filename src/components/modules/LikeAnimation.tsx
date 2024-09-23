import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import './LikeAnimation.css';

interface LikeAnimationProps {
  isVisible: boolean;
}

const LikeAnimation: React.FC<LikeAnimationProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="like-animation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="heart-icon-wrapper"
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [1.5, 1],
              rotate: [0, -10, 10, -10, 10, 0],
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <HeartIconSolid className="icon" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LikeAnimation;
