import React, { useState } from "react";
import { useRouter } from "next/navigation"; // useRouter をインポート
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"; // 必要なアイコンだけをインポート
import "./Post.css";
import Image from "next/image";

interface PostProps {
  username: string;
  handle: string;
  time: string;
  content: string;
  likes: number;
  replies: number;
  profileImageUrl: string;
  link: string;
  category: string; // カテゴリーを追加
  onLike: () => void; // いいね時のコールバックを受け取る
}

const Post: React.FC<PostProps> = ({
  username,
  handle,
  time,
  content,
  likes,
  replies,
  profileImageUrl,
  link,
  category,
  onLike,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const router = useRouter(); // useRouter フックを使ってルーターにアクセス

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

  // 返信ボタンクリック時にページ遷移
  const handleReplyClick = () => {
    router.push(link); // 指定されたリンクに遷移
  };

  return (
    <div className="post anim-box kiran">
      <div className="post-content-wrapper">
          <div className="post-link-content">
            <Image src={profileImageUrl} alt="Profile" className="profile-img" width={40} height={40} />
            <div className="post-body">
              <div className="post-header">
                <span className="username">{username}</span>
                <span className="handle">@{handle}</span>
                <span className="time">・{time}</span>
              </div>
              <div className="post-content">{content}</div>
              <div className="post-category">
                {/* カテゴリーの表示を追加 */}
                <span className="category">{category}</span>
              </div>
            </div>
          </div>

        <div className="post-actions">
          {/* 返信ボタン */}
          <div className="post-action tooltip henshin" 
            data-tooltip="返信"
            onClick={handleReplyClick}>
            <ChatBubbleLeftIcon className="icon" />
            <span>{replies}</span>
          </div>

          {/* いいねボタン */}
          <div className="post-action tooltip iine"
             data-tooltip="いいね"
             onClick={handleLikeClicked}>
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
