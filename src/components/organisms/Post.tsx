import React, { useState } from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"; // 必要なアイコンだけをインポート
import "./Post.css";
import Link from "next/link";

interface PostProps {
  username: string;
  handle: string;
  time: string;
  content: string;
  likes: number;
  replies: number;
  profileImage: string;
  link: string;
  onLike: () => void; // いいね時のコールバックを受け取る
}

const Post: React.FC<PostProps> = ({
  username,
  handle,
  time,
  content,
  likes,
  replies,
  profileImage,
  link,
  onLike,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLikeClicked = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setIsLiked(true);
      setLikesCount(likesCount + 1);
      onLike();
    }
  };

  return (
    <div className="post anim-box kiran">
      <div className="post-content-wrapper">
        <Link href={link}>
          <div className="post-link-content">
            <img src={profileImage} alt="Profile" className="profile-img" />
            <div className="post-body">
              <div className="post-header">
                <span className="username">{username}</span>
                <span className="handle">@{handle}</span>
                <span className="time">・{time}</span>
              </div>
              <div className="post-content">{content}</div>
            </div>
          </div>
        </Link>

        <div className="post-actions">
          {/* 返信ボタン */}
          <div className="post-action">
            <ChatBubbleLeftIcon className="icon" />
            <span>{replies}</span>
          </div>

          {/* いいねボタン */}
          <div className="post-action" onClick={handleLikeClicked}>
            {isLiked ? (
              <HeartIconSolid className="icon liked" />
            ) : (
              <HeartIconOutline className="icon" />
            )}
            <span>{likesCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
