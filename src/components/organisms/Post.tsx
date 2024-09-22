import React from 'react';
import { ChatBubbleLeftIcon, HeartIcon } from '@heroicons/react/24/outline'; // 必要なアイコンだけをインポート
import './Post.css';

interface PostProps {
  username: string;
  handle: string;
  time: string;
  content: string;
  likes: number;
  replies: number;
  profileImage: string;
}

const Post: React.FC<PostProps> = ({
  username,
  handle,
  time,
  content,
  likes,
  replies,
  profileImage,
}) => {
  return (
    <div className="post anim-box kiran">
    <img src={profileImage} alt="Profile" className="profile-img" />
    <div className="post-body">
      <div className="post-header">
        <span className="username">{username}</span>
        <span className="handle">@{handle}</span>
        <span className="time">・{time}</span>
      </div>
      <div className="post-content">{content}</div>
      <div className="post-actions">
        {/* 返信ボタン */}
        <div className="post-action">
          <ChatBubbleLeftIcon className="icon" />
          <span>{replies}</span>
        </div>

        {/* いいねボタン */}
        <div className="post-action">
          <HeartIcon className="icon" />
          <span>{likes}</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Post;
