// components/PostButton.tsx
import React from 'react';
import './PostButton.scss';

interface PostButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PostButton: React.FC<PostButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};

export default PostButton;