"use client"; // クライアントコンポーネントとして指定

import React, { useState } from "react";
import "./PostBox.css";
import { createPosts } from "@/lib/api/post";
import { PostCreateRequest } from "@/types/request/post";
import { PostData } from "../template/PostList";
import { fetchUserDetail } from "@/lib/api/user";
import { UserDetail } from "@/types/response/user";

export interface PostBoxProps {
  onPostCreate: (newPost: PostData) => void; // 投稿完了時に呼び出されるコールバック関数
  onCloseModal: () => void; // モーダルを閉じるためのコールバック関数
}

const PostBox: React.FC<PostBoxProps> = ({ onPostCreate, onCloseModal }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("ときめき"); // 初期カテゴリを設定
  // const [userData, setUserData] = useState<UserDetail | null>(null); // ユーザー情報を保持
  const [error, setError] = useState<string | null>(null); // エラーメッセージを保持

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (error) {
      setError(null); // ユーザーが入力を開始したらエラーをクリア
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  
  const handleSubmit = async () => {
    if (text.trim() === "") {
      setError("投稿を記入してください。");
      return;
    }
  
    const userId = localStorage.getItem("userId");
    const fetchData = async () => {
      try {
        const user = await fetchUserDetail(String(userId));
        console.log(user);
        // setUserData(user);
  
        if (!user) {
          setError("ユーザー情報が取得できませんでした。");
          return;
        }
  
        const postCreateRequest: PostCreateRequest = {
          userId: Number(userId),
          category: category,
          content: text,
          profileImageUrl: user.profileImageUrl,
        };
        const postData: PostData = {
          id: 1,
          username: user.name,
          content: text,
          likes: 0,
          replies: 0,
          profileImageUrl: user.profileImageUrl,
          category: category,
        };
  
        try {
          await createPosts(postCreateRequest);
          console.log("投稿が成功しました");
          onPostCreate(postData);
          setText("");
          setError(null);
          onCloseModal(); // 投稿成功後にモーダルを閉じる
        } catch (err) {
          console.error("投稿に失敗しました:", err);
          setError("投稿に失敗しました。");
        }
      } catch (err) {
        console.error("ユーザー情報の取得に失敗しました:", err);
        setError((err as Error).message);
      }
    };
    await fetchData();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form className="post-box" onSubmit={handleFormSubmit}>
      <div className="post-header">
        <span className="header-text">恋愛記事を投稿しよう</span>
        <button 
          className="close-button tooltip"
          data-tooltip="閉じる"
          type="button" onClick={onCloseModal}>
          &times;
        </button>
      </div>
      <select
        className="category-select"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="ときめき">ときめき</option>
        <option value="面白い恋愛">面白い恋愛</option>
        <option value="イライラ恋愛">イライラ恋愛</option>
        <option value="片思い">片思い</option>
      </select>
      <textarea
        className={`post-input ${error ? "input-error" : ""}`}
        placeholder={error ? error : "内容を入力してください"}
        value={text}
        onChange={handleTextChange}
      />
      {error && <div className="error-message">{error}</div>}
      <div className="post-actions">
        <button type="submit" className="post-button">
          投稿する
        </button>
      </div>
    </form>
  );
};

export default PostBox;
