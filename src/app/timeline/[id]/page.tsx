"use client";
import React, { useEffect, useState } from "react";
import { PostData } from "@/components/template/PostList";
import { useParams } from "next/navigation";
import PostDetail from "@/components/template/PostDetail";
import { fetchPosts } from "@/lib/api/post";

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

  if (!post) {
    return <p>Loading...</p>;
  }

  return <PostDetail post={post} />;
};

export default PostPage;
