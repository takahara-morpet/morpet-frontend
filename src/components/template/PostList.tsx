// PostList.tsx
import React, { useState } from "react";
import Post from "../organisms/Post"; // Postコンポーネントをインポート
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
  profileImageUrl?: string;
  category: string;
}

interface PostListProps {
  posts: PostData[]; // 投稿データのリストをプロパティとして受け取る
  replyable: boolean;
}

const PostList: React.FC<PostListProps> = ({ posts, replyable }) => {
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
        {posts.slice().reverse().map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // 遅延を追加してフェードインを調整
          >
            <Post
              id={post.id}
              username={post.username}
              handle={post.handle ?? ""}
              time={post.time ?? "Unknown"}
              content={post.content}
              likes={post.likes ?? 0}
              replies={post.replies ?? 0}
              profileImageUrl={post.profileImageUrl ?? ""}
              link={`/timeline/${post.id}`}
              onLike={handleLike}
              category={post.category}
              replyable={replyable}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PostList;
