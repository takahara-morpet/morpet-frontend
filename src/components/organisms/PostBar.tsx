import React from 'react';
import './PostBar.css';
import GenderBar from '../modules/GenderBar'; // GenderBarコンポーネントをインポート

interface PostBarProps {
  username: string;
  handle: string;
  time: string;
  content: string;
  profileImage: string;
  malePercentage: number;
  femalePercentage: number;
}

const PostBar: React.FC<PostBarProps> = ({
  username,
  handle,
  time,
  content,
  profileImage,
  malePercentage,
  femalePercentage,
}) => {
  return (
    <div className="post-bar">
      <img src={profileImage} alt="Profile" className="profile-img" />
      <div className="post-body">
        <div className="post-header">
          <span className="username">{username}</span>
          <span className="handle">@{handle}</span>
          <span className="time">・{time}</span>
        </div>
        <div className="post-content">{content}</div>

        {/* GenderBar をここに追加 */}
        <GenderBar malePercentage={malePercentage} femalePercentage={femalePercentage} />
      </div>
    </div>
  );
};

export default PostBar;
