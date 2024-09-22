import React from "react";
import { PostData } from "../template/PostList"; // PostData 型をインポート
import "./PostDetail.css"; // CSSをインポート

interface PostDetailProps {
  post: PostData; // 投稿データをプロパティとして受け取る
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <div className="post-detail-container">
      <h1>{post.content}</h1>
      <p>
        Posted by: {post.username} ({post.handle})
      </p>
      <p>Time: {post.time}</p>
      <p>Likes: {post.likes}</p>
      <p>Replies: {post.replies}</p>
      <img src={post.profileImage} alt={post.username} />
    </div>
  );
};

export default PostDetail;
