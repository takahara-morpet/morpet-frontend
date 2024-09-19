// PostList.tsx
import React from 'react';
import Post from '../organisms/Post'; // Postコンポーネントをインポート

export interface PostData {
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
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          handle={post.handle ?? ''}  
          time={post.time ?? 'Unknown'} 
          content={post.content}
          likes={post.likes ?? 0}       
          replies={post.replies ?? 0}   
          profileImage={post.profileImage ?? ''}
        />
      ))}
    </div>
  );
};

export default PostList;
