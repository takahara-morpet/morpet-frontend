import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // useRouter をインポート
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"; // 必要なアイコンだけをインポート
import "./Post.css";
import GenderBar from "../modules/GenderBar";
import { fetchPostById, updatePostPercentage } from "@/lib/api/post";
import { PostPercentageUpdateResponse } from "@/types/response/post";
import Image from "next/image";
import "../../app/globals.css"

interface PostProps {
  id: number;
  username: string;
  handle: string;
  time: string;
  content: string;
  likes: number;
  replies: number;
  profileImageUrl: string;
  link: string;
  category: string; // カテゴリーを追加
  replyable: boolean;
  onLike: () => void; // いいね時のコールバックを受け取る
}

const Post: React.FC<PostProps> = ({
  id,
  username,
  handle,
  time,
  content,
  likes,
  replies,
  profileImageUrl,
  link,
  category,
  replyable,
  onLike,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const router = useRouter(); // useRouter フックを使ってルーターにアクセス
  const [malePercentage, setMalePercentage] = useState(50);
  const [femalePercentage, setFemalePercentage] = useState(50);

  useEffect(() => {
    // ページ初期読み込み時にバックエンドからパーセンテージを取得
    const fetchPercentages = async () => {
      try {
        const response = await fetchPostById(String(id));

        setMalePercentage(response.malePercentage);
        setFemalePercentage(response.femalePercentage);
      } catch (error) {
        console.error("Failed to fetch percentages:", error);
      }
    };

    fetchPercentages();
  }, [id]);

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

  const handleMaleClick = () => {
    if (malePercentage < 100) {
      const newMalePercentage = Math.min(malePercentage + 10, 100);
      const newFemalePercentage = Math.max(femalePercentage - 10, 0);
      setMalePercentage(newMalePercentage);
      setFemalePercentage(newFemalePercentage);
      updatePercentages(newMalePercentage, newFemalePercentage);
    }
  };

  const handleFemaleClick = () => {
    if (femalePercentage < 100) {
      const newFemalePercentage = Math.min(femalePercentage + 10, 100);
      const newMalePercentage = Math.max(malePercentage - 10, 0);
      setFemalePercentage(newFemalePercentage);
      setMalePercentage(newMalePercentage);
      updatePercentages(newMalePercentage, newFemalePercentage);
    }
  };
  const updatePercentages = async (
    newMalePercentage: number,
    newFemalePercentage: number
  ) => {
    try {
      const percentages: PostPercentageUpdateResponse = {
        malePercentage: newMalePercentage,
        femalePercentage: newFemalePercentage,
      };
      await updatePostPercentage(String(id), percentages);
    } catch (error) {
      console.error("Failed to update percentages:", error);
    }
  };
  // 返信ボタンクリック時にページ遷移
  const handleReplyClick = () => {
    if (replyable) {
      router.push(link);
    }
    else {
      alert("この投稿には返信できません");
    }
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
                <span className="time invisible">・{time}</span>
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
        <GenderBar
          malePercentage={malePercentage}
          femalePercentage={femalePercentage}
          onMaleClick={handleMaleClick}
          onFemaleClick={handleFemaleClick}
        />
      </div>
    </div>
  );
};

export default Post;
