import React, { useState } from 'react';
import './PostBox.css';

const PostBox = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    alert(`投稿内容: ${text}`);
  };

  return (
    <div className="post-box">
      <div className="post-header">
        <img className="profile-image" src="profile.jpg" alt="Profile" />
        <span className="header-text">いまどうしてる？</span>
      </div>
      <textarea
        className="post-input"
        placeholder="いまどうしてる？"
        value={text}
        onChange={handleTextChange}
      />
      <div className="post-actions">
        <button className="post-button" onClick={handleSubmit}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default PostBox;
