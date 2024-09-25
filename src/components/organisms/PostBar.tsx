import React from "react";
import "./PostBar.css";
import GenderBar from "../modules/GenderBar"; // GenderBarコンポーネントをインポート
import Image from "next/image";
export interface PostBarProps {
  username: string;
  handle: string;
  time: string;
  content: string;
  profileImage: string;
}

const PostBar: React.FC<PostBarProps> = ({
  username,
  handle,
  time,
  content,
  profileImage,
}) => {
  return (
    <div className="post-bar">
      <Image src={profileImage} alt="Profile" className="profile-img" width={40} height={40} />
      <div className="post-body">
        <div className="post-header">
          <span className="username">{username}</span>
          <span className="handle">@{handle}</span>
          <span className="time">・{time}</span>
        </div>
        <div className="post-content">{content}</div>

        {/* GenderBar をここに追加 */}
        <GenderBar />
      </div>
    </div>
  );
};

export default PostBar;
