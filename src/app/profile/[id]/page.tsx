"use client"; // これを最初に追加してクライアントコンポーネントとして指定
import "../../globals.css";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ProfileCard from "@/components/template/Profile";
import PostList from "@/components/template/PostList"; // PostListコンポーネントをインポート
import { fetchUserDetail } from "@/lib/api/user";
import { UserDetail } from "@/types/response/user";

const ProfilePage = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"self" | "like">("self"); // 初期タブは「おすすめ」
  const { id } = useParams();
  const [userData, setUserData] = useState<UserDetail | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const handleTabClick = (tab: "self" | "like") => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserDetail(Array.isArray(id) ? id[0] : id);
        console.log(user);
        setUserData(user);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchData();
  }, [id]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {userData && <ProfileCard {...userData} />}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "self" ? "active" : ""}`}
          onClick={() => handleTabClick("self")}
        >
          投稿
        </button>
        <button
          className={`tab-button ${activeTab === "like" ? "active" : ""}`}
          onClick={() => handleTabClick("like")}
        >
          いいね
        </button>
      </div>
      <div className="post-list-container">
        {activeTab === "self" && <PostList posts={selfPosts} />}
        {activeTab === "like" && <PostList posts={likePosts} />}
      </div>
    </div>
  );
};

export default ProfilePage;

// おすすめの投稿データ
const selfPosts = [
  {
    id: 1,
    username: "山田 太郎",
    handle: "taro_yamada",
    time: "1時間前",
    content: "今日はとても楽しかった！",
    likes: 20,
    retweets: 5,
    replies: 10,
    profileImage: "/images/kurage.jpg",
    category: "恋愛",
  }
];

// フォロー中の投稿データ
const likePosts = [
  {
    id: 120,
    username: "フォロー中ユーザー1",
    handle: "follow_user1",
    time: "3時間前",
    content: "今日はランニングをしました。",
    likes: 15,
    retweets: 4,
    replies: 6,
    profileImage: "/images/star.jpg",
    category: "恋愛",
  },
  {
    id: 478923,
    username: "フォロー中ユーザー2",
    handle: "follow_user2",
    time: "4時間前",
    content: "新しい本を読みました。面白かった！",
    likes: 25,
    retweets: 7,
    replies: 8,
    profileImage: "/images/penguin.jpg",
    category: "恋愛",
  },
  {
    id: 46123,
    username: "田中 直子",
    handle: "naoko_tanaka",
    time: "8時間前",
    content: "友達とカフェに行きました。楽しい時間を過ごしました。",
    likes: 40,
    retweets: 9,
    replies: 13,
    profileImage: "/images/azarashi.jpg",
    category: "恋愛",
  },
  {
    id: 1632798,
    username: "本田 圭",
    handle: "kei_honda",
    time: "9時間前",
    content: "新しい趣味を始めました。頑張ります！",
    likes: 60,
    retweets: 15,
    replies: 25,
    profileImage: "/images/suga.jpg",
    category: "恋愛",
  },
  {
    id: 8345,
    username: "井上 真",
    handle: "makoto_inoue",
    time: "10時間前",
    content: "今日は天気が良かったので散歩しました。",
    likes: 45,
    retweets: 10,
    replies: 17,
    profileImage: "/images/elephant.jpg",
    category: "恋愛",
  },
];
