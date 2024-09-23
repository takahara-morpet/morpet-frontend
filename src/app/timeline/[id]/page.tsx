"use client";
import React, { useEffect, useState } from "react";
import { PostData } from "@/components/template/PostList";
import { useParams } from "next/navigation";
import PostDetail from "@/components/template/PostDetail";
import { fetchPosts } from "@/lib/api/post";
import ReplyForm from "@/components/organisms/ReplyForm";
import ReplyList from "@/components/template/ReplyList";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postlist = await fetchPosts();
        const mappedPosts = postlist.map((post) => ({
          id: post.id,
          username: String(post.userId) + "suga",
          handle: "handle",
          time: "time",
          content: post.content,
          likes: 0,
          replies: 0,
          profileImage: "/images/suga.jpg",
        }));
        const postData = mappedPosts.find((post) => post.id === Number(id));
        setPost(postData || null);
      } catch (err) {
        setError(err as Error);
        console.log(err);
      }
    };
    fetchPostData();
  }, [id]);
  const handleAddReply = (content: string) => {
    console.log(content);
  };

  if (!post) {
    return <p>Loading...</p>;
  }
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <PostDetail post={post} />
      <ReplyForm onSubmit={handleAddReply} />
      <ReplyList replys={dummyReplys} />
    </div>
  );
};

export default PostPage;

// フォロー中の投稿データ
const dummyReplys = [
  {
    id: 32222222,
    senderName: "フォロー中ユーザー1",
    time: "3時間前",
    content: "僕もそれわかります",
    profileImage: "https://example.com/profile3.jpg",
  },
  {
    id: 3222322222,
    senderName: "フォロー中ユーザー2",
    time: "1時間前",
    content: "正直許せませんよね",
    profileImage: "https://example.com/profile3.jpg",
  },
];
