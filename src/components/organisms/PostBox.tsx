import React, { useState } from "react";
import "./PostBox.css";
import { PostGetResponse } from "@/types/response/post";
import { createPosts } from "@/lib/api/post";
import { PostCreateRequest } from "@/types/request/post";
import { PostData } from "../template/PostList";

export interface PostBoxProps {
  onPostCreate: (newPost: PostData) => void; // 投稿完了時に呼び出されるコールバック関数
}

const PostBox: React.FC<PostBoxProps> = ({ onPostCreate }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null); // エラーメッセージを保持

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async () => {
    if (text.trim() === "") {
      setError("投稿内容を入力してください。");
      return;
    }

    const postCreateRequest: PostCreateRequest = {
      // 一旦
      userId: 1,
      category: "恋愛",
      content: text, // テキストを postData として設定
    };
    const postData: PostData = {
      id: 1,
      username: "string",
      content: text,
      likes: 0,
      replies: 0,
      profileImage: "",
    };

    try {
      await createPosts(postCreateRequest);
      console.log("投稿が成功しました");
      onPostCreate(postData); // 新しい投稿を親コンポーネントに通知
      setText(""); // 投稿後にテキストをクリア
      setError(null); // エラーメッセージをクリア
    } catch (err) {
      console.error("投稿に失敗しました:", err);
      setError("投稿に失敗しました。");
    }
  };
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="post-box">
      <div className="post-header">
        <img className="profile-image" src="profile.jpg" alt="Profile" />
        <span className="header-text">いまどうしてる？</span>
      </div>
      <textarea
        className="post-input"
        placeholder="いまどうしてる？"
        value={text}
        onChange={handleTextChange}
      />
      <div className="post-actions">
        <button className="post-button" onClick={handleSubmit}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default PostBox;
