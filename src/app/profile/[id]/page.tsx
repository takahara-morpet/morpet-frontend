"use client"; // これを最初に追加してクライアントコンポーネントとして指定
import "../../globals.css";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ProfileCard from "@/components/template/Profile";
import PostList from "@/components/template/PostList"; // PostListコンポーネントをインポート
import { fetchUserDetail } from "@/lib/api/user";
import { UserDetail } from "@/types/response/user";

interface UserDetailProps {
  user: UserDetail;
}

const ProfilePage: React.FC<UserDetailProps> = () => {
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

// デフォルトの架空のプロフィールを作成して
// const defaultProfile = {
//   icon: "/images/suga.jpg",
//   name: "Suga",
//   id: "suga0609",
//   bio: "BTS. I am a rapper, songwriter, and record producer.",
//   mbti: "INTJ",
//   birthday: "March 9, 1993",
//   gender: "Male",
//   followers: [
//     "jimin1013",
//     "taehyung123",
//     "jungkook456",
//     "hoseok012",
//     "namjoon345",
//     "jin678",
//   ],
//   following: [
//     "jimin1013",
//     "taehyung123",
//     "jungkook456",
//     "hoseok012",
//     "namjoon345",
//     "jin678",
//   ],
// };

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
    profileImage: "https://example.com/profile1.jpg",
  },
  {
    id: 2,
    username: "佐藤 花子",
    handle: "hanako_sato",
    time: "2時間前",
    content: "美味しいご飯を食べました！",
    likes: 30,
    retweets: 10,
    replies: 5,
    profileImage: "https://example.com/profile2.jpg",
  },
];

// フォロー中の投稿データ
const likePosts = [
  {
    id: 1189948290,
    username: "フォロー中ユーザー1",
    handle: "follow_user1",
    time: "3時間前",
    content: "今日はランニングをしました。",
    likes: 15,
    retweets: 4,
    replies: 6,
    profileImage: "https://example.com/profile3.jpg",
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
    profileImage: "https://example.com/profile4.jpg",
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
    profileImage: "https://example.com/profile8.jpg",
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
    profileImage: "https://example.com/profile9.jpg",
  },
  {
    id: 898234874538734583548345,
    username: "井上 真",
    handle: "makoto_inoue",
    time: "10時間前",
    content: "今日は天気が良かったので散歩しました。",
    likes: 45,
    retweets: 10,
    replies: 17,
    profileImage: "https://example.com/profile10.jpg",
  },
];
