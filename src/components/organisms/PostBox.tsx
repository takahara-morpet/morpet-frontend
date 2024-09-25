import React, { useState } from "react";
import "./PostBox.css";
import { createPosts } from "@/lib/api/post";
import { PostCreateRequest } from "@/types/request/post";
import { PostData } from "../template/PostList";
import { fetchUserDetail } from "@/lib/api/user";

export interface PostBoxProps {
  onPostCreate: (newPost: PostData) => void; // 投稿完了時に呼び出されるコールバック関数
}

const PostBox: React.FC<PostBoxProps> = ({ onPostCreate }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("ときめき"); // 初期カテゴリを設定
  const [name, setName] = useState("山田太郎");
  const [profileImageUrl, setProfileImageUrl] = useState("/images/star.png");
  const [error, setError] = useState<string | null>(null); // エラーメッセージを保持

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async () => {
    if (text.trim() === "") {
      setError("投稿内容を入力してください。");
      return;
    }

    const userId = localStorage.getItem("userId");
    let UserDetail = { profileImageUrl: "/images/star.png", name: "山田太郎" };
    if (userId !!= null) {
      UserDetail = await fetchUserDetail(userId);
      console.log("UserDetail:" + UserDetail);
    }
    setName(UserDetail.name);
    setProfileImageUrl(UserDetail.profileImageUrl);
    console.log("userId:" + String(userId), "name:" + name, "profileImageUrl:" + profileImageUrl);
    const postCreateRequest: PostCreateRequest = {
      // 一旦
      userId: Number(userId),
      category: category,
      content: text,
      profileImageUrl: profileImageUrl,
    };
    const postData: PostData = {
      id: 1,
      username: name,
      content: text,
      likes: 0,
      replies: 0,
      profileImage: profileImageUrl,
      category: category,
    };

    try {
      await createPosts(postCreateRequest);
      console.log("投稿が成功しました");
      onPostCreate(postData);
      setText("");
      setError(null);
    } catch (err) {
      console.error("投稿に失敗しました:", err);
      setError("投稿に失敗しました。");
    }
  };
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="post-box">
      <div className="post-header">
        <span className="header-text">恋愛記事を投稿しよう</span>
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
        className="post-input"
        placeholder="内容を入力してください"
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
