// Post.tsx
import React from 'react';
import { ChatBubbleLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import './Post.css';

interface PostProps {
  username: string;
  handle: string;
  time: string;
  content: string;
  likes: number;
  retweets: number;
  replies: number;
  profileImage: string;
}

const Post: React.FC<PostProps> = ({
  username,
  handle,
  time,
  content,
  likes,
  retweets,
  replies,
  profileImage,
}) => {
  return (
    <div className="post">
      <img src={profileImage} alt="Profile" className="profile-img" />
      <div className="post-body">
        <div className="post-header">
          <span className="username">{username}</span>
          <span className="handle">@{handle}</span>
          <span className="time">・{time}</span>
        </div>
        <div className="post-content">{content}</div>
        <div className="post-actions">
          <span>{replies} 返信</span>
          <span>{likes} いいね</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
