// PostList.tsx
import React, { useState } from "react";
import Post from "../organisms/Post"; // Postコンポーネントをインポート
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import LikeAnimation from "../modules/LikeAnimation";

export interface PostData {
  id: number;
  username: string;
  handle?: string;
  time?: string;
  content: string;
  likes?: number;
  replies?: number;
  profileImage?: string;
}

interface PostListProps {
  posts: PostData[]; // 投稿データのリストをプロパティとして受け取る
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const [showLikeAnimation, setShowLikeAnimation] = useState(false);

  const handleLike = () => {
    setShowLikeAnimation(true);
    setTimeout(() => {
      setShowLikeAnimation(false);
    }, 1100); // アニメーションの継続時間と一致
  };
  return (
    <div className="post-list">
      {" "}
      <LikeAnimation isVisible={showLikeAnimation} />
      <AnimatePresence mode="wait">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // 遅延を追加してフェードインを調整
          >
            <Post
              username={post.username}
              handle={post.handle ?? ""}
              time={post.time ?? "Unknown"}
              content={post.content}
              likes={post.likes ?? 0}
              replies={post.replies ?? 0}
              profileImage={post.profileImage ?? ""}
              link={`/timeline/${post.id}`}
              onLike={handleLike}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PostList;
