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
import { motion } from "framer-motion"; // framer-motionをインポート
import { fetchUserDetail } from "@/lib/api/user";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostData | null>(null);
  const [error, setError] = useState<Error | string | null>(null);
  const [replies, setReplies] = useState<ReplyData[]>([]);
  const [newReplyId, setNewReplyId] = useState<number | null>(null); // 新しいリプライをトラッキング
  const [isNewReplyVisible, setIsNewReplyVisible] = useState(true); // 新規リプライの可視フラグ

  useEffect(() => {
    fetchPostData();
    fetchRepliesByPostId();
  }, [id]);

  const fetchPostData = async () => {
    
    try {
      const postlist = await fetchPosts();
      const userId = postlist.find((post) => post.id === Number(id))?.userId;
      console.log("ユーザーID:", userId);
      const fetchData = async () => {
        const user = await fetchUserDetail(String(userId));
  
        if (!user) {
          setError("ユーザー情報が取得できませんでした。");
          return;
        }
        const mappedPosts = postlist.map((post) => ({
          id: post.id,
          username: user.name,
          handle: "handle",
          time: "time",
          content: post.content,
          likes: 0,
          replies: 0,
          profileImageUrl: user.profileImageUrl,
          category: post.category,
        }));
        const postData = mappedPosts.find((post) => post.id === Number(id));
        setPost(postData || null);
      };
      await fetchData();
    } catch (err) {
      setError(err as Error);
      console.log(err);
    }
  };
  const fetchRepliesByPostId = async () => {
    try {
      if (post === null) return;
      const replyGetResponse = await fetchRepliesById(String(id));
      const userId = replyGetResponse.find((reply) => reply.postId === Number(id))?.senderId;
      const fetchData = async () => {
        const user = await fetchUserDetail(String(userId));
  
        if (!user) {
          setError("ユーザー情報が取得できませんでした。");
          return;
        }
        const replyList = replyGetResponse.map((reply) => ({
          id: reply.id,
          senderName: user.name,
          time: reply.sentAt,
          content: reply.content,
          profileImage: user.profileImageUrl,
          category: post.category,
        }));
        setReplies(replyList);
      }
      await fetchData();
    } catch (err) {
      console.error("Failed to fetch replies:", err);
    }
  };

  const handleAddReply = async (content: string) => {
    const tmpUserId = localStorage.getItem("userId");
    if (tmpUserId) {
      console.log("現在のユーザーID:", tmpUserId);
    }
    const newReplyRequest: ReplyCreateRequest = {
      postId: Number(id),
      senderId: Number(tmpUserId),
      content: content,
    };

    try {
      const newReplyId = await createReply(newReplyRequest);
      setNewReplyId(newReplyId); // 新しく投稿されたリプライのIDを設定
      setIsNewReplyVisible(true); // 新規リプライのアニメーションを開始
      // const newReply: ReplyData = {
      //   id: newReplyId,
      //   senderName: String(tmpUserId) + "user",
      //   time: reply.sentAt,
      //   content: reply.content,
      //   profileImage: "/images/suga.jpg",
      // };
      await fetchRepliesByPostId();
    } catch (err) {
      setError(err as Error);
    }
  };

  const handleAnimationComplete = () => {
    setIsNewReplyVisible(false); // アニメーション終了後にリストに戻す
  };

  if (!post) {
    return <p>Loading...</p>;
  }
  if (error) return <div>Error: {error.message}</div>;

  const replyVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      x: "-50vw",
      y: "-50vh",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <PostDetail post={post} />
      <ReplyForm onSubmit={handleAddReply} />

      {/* 新しく投稿されたリプライが一瞬中央に表示される部分 */}
      {newReplyId && isNewReplyVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={replyVariants}
          onAnimationComplete={handleAnimationComplete} // アニメーション完了時にリストに戻す
          className="reply-container"
        >
          {/* 安全にリプライデータを取得 */}
          {replies.find((r) => r.id === newReplyId) ? (
            <ReplyList
              replyList={[replies.find((r) => r.id === newReplyId)!]}
            />
          ) : (
            <p>リプライが見つかりませんでした。</p>
          )}
        </motion.div>
      )}

      {/* すべてのリプライ（新規リプライも含む） */}
      {replies
        .filter((reply) => reply.id !== newReplyId || !isNewReplyVisible) // 新規リプライが表示されている間はリストに表示しない
        .map((reply) => (
          <div key={reply.id}>
            <ReplyList replyList={[reply]} />
          </div>
        ))}
    </div>
  );
};

export default PostPage;
