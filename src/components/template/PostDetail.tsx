import React from "react";
import { motion } from "framer-motion";
import { PostData } from "../template/PostList";
import "./PostDetail.css";

interface PostDetailProps {
  post: PostData;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  console.log(post);
  const containerVariants = {
    hidden: {
      opacity: 0,
      rotateX: 100,
      rotateY: -120,
      scale: 3,
      perspective: 800,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      perspective: 800,
      transition: {
        duration: 1,
        ease: "backOut",
      },
    },
    exit: {
      opacity: 0,
      rotateY: 90,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      className="post-detail-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="post-header">
        <motion.img
          src={post.profileImageUrl}
          alt={post.username}
          className="profile-image"
          initial={{ z: -200, opacity: 0 }}
          animate={{ z: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />
        <div className="post-header-details">
          <div className="post-header-info">
            <h1>{post.username}</h1>
            <span className="handle">@{post.handle}</span>
            <span className="time">{post.time}</span>
          </div>
          <p className="post-content">{post.content}</p>
        </div>
      </div>
      <div className="post-stats">
        <span>Likes: {post.likes}</span>
        <span>Replies: {post.replies}</span>
      </div>
    </motion.div>
  );
};

export default PostDetail;
