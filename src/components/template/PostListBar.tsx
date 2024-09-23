import React from 'react';
import PostBar, { PostBarProps } from '../organisms/PostBar'; // PostBarコンポーネントをインポート
import './PostListBar.css'; // CSSをインポート
import postcss from 'postcss';

interface PostListBarProps {
  posts:PostBarProps[];
}
  


const PostListBar:React.FC<PostListBarProps> = ({ posts }) => {
  return (
    <div className="post-list-bar">
      {posts.map((post, index) => (
        <div key={index} className="post-list-bar-item">
          <PostBar
            username={post.username}
            handle={post.handle}
            time={post.time}
            content={post.content}
            profileImage={post.profileImage}
            malePercentage={post.malePercentage}
            femalePercentage={post.femalePercentage}
          />
        </div>
      ))}
    </div>
  );
};

export default PostListBar;
