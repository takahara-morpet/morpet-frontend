import React from "react";
import { motion } from "framer-motion";
import { PostData } from "../template/PostList";
import "./PostDetail.css";

interface PostDetailProps {
  post: PostData;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
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
      <h1>{post.content}</h1>
      <p>
        Posted by: {post.username} ({post.handle})
      </p>
      <p>Time: {post.time}</p>
      <p>Likes: {post.likes}</p>
      <p>Replies: {post.replies}</p>
      <motion.img
        src={post.profileImage}
        alt={post.username}
        initial={{ z: -200, opacity: 0 }}
        animate={{ z: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      />
    </motion.div>
  );
};

export default PostDetail;
