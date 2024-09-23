"use client";
import React, { useEffect, useState } from "react";
import { PostData } from "@/components/template/PostList";
import { useParams } from "next/navigation";
import PostDetail from "@/components/template/PostDetail";
import { fetchPosts } from "@/lib/api/post";
import ReplyForm from "@/components/organisms/ReplyForm";
import ReplyList, { ReplyData } from "@/components/template/ReplyList";
import { ReplyCreateRequest } from "@/types/request/reply";
import { createReply, fetchRepliesById } from "@/lib/api/reply";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [replies, setReplies] = useState<ReplyData[] | null>(null);
  useEffect(() => {
    fetchPostData();
    fetchRepliesByPostId();
  }, [id]);

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
  const fetchRepliesByPostId = async () => {
    try {
      const replyGetResponse = await fetchRepliesById(String(id));
      const replyList = replyGetResponse.map((reply) => ({
        id: reply.id,
        senderName: String(reply.senderId) + "user",
        time: reply.sentAt,
        content: reply.content,
        profileImage: "/images/suga.jpg",
      }));
      setReplies(replyList);
    } catch (err) {
      console.error("Failed to fetch replies:", err);
    }
  };
  const handleAddReply = async (content: string) => {
    const newReplyRequest: ReplyCreateRequest = {
      postId: Number(id),
      senderId: Number(10),
      content: content,
    };
    try {
      await createReply(newReplyRequest);
      await fetchRepliesByPostId();
    } catch (err) {
      setError(err as Error);
    }
  };

  if (!post) {
    return <p>Loading...</p>;
  }
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <PostDetail post={post} />
      <ReplyForm onSubmit={handleAddReply} />
      {replies && <ReplyList replyList={replies} />}
    </div>
  );
};

export default PostPage;
