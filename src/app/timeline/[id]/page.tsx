"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PostData } from "@/components/template/PostList"; // PostData型をインポート
import { useParams } from "next/navigation";
import PostDetail from "@/components/template/PostDetail";
import { fetchPosts } from "@/lib/api/post";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostData | null>(null);
  const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPostsData = async () => {
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
        })); // PostData型に変換
        setAllPosts(mappedPosts);
      } catch (err) {
        setError(err as Error);
        console.log(error);
      }
    };
    fetchPostsData();
    if (id && allPosts) {
      const postData = allPosts.find((post) => post.id === Number(id));
      setPost(postData || null);
      console.log(error);
    }
  }, [id,allPosts]);

  if (!post) {
    return <p>Loading...</p>; // データがない場合、読み込み中の表示
  }

  return <PostDetail post={post} />;
};

export default PostPage;
