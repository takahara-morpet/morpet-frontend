// PostList.tsx
import React from 'react';
import Post from '../organisms/Post'; // Postコンポーネントをインポート
import Link from 'next/link';

export interface PostData {
  id:number;
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
      {posts.map((post) => (
        <Link href={`/timeline/${post.id}`} key={post.id}> {/* クリックすると投稿ページに遷移 */}
          <a>
            <Post
              username={post.username}
              handle={post.handle ?? ''}
              time={post.time ?? 'Unknown'}
              content={post.content}
              likes={post.likes ?? 0}
              replies={post.replies ?? 0}
              profileImage={post.profileImage ?? ''}
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
