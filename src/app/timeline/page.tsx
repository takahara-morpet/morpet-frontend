"use client"; // クライアントコンポーネントとして指定
import './timeline.css'; // CSSファイルをインポート
import React, { useState } from 'react';
import PostList from '@/components/template/PostList'; // PostListコンポーネントをインポート
import Footer from '@/components/organisms/Footer';
import SubmitButton from '@/components/template/SubmitButton'; // SubmitButtonのインポート

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'recommend' | 'follow'>('recommend'); // 初期タブは「おすすめ」

  const handleTabClick = (tab: 'recommend' | 'follow') => {
    setActiveTab(tab);
  };

  return (
    <div className="relative w-full h-full">
      {/* タブのヘッダー部分 */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'recommend' ? 'active' : ''}`}
          onClick={() => handleTabClick('recommend')}
        >
          おすすめ
        </button>
        <button
          className={`tab-button ${activeTab === 'follow' ? 'active' : ''}`}
          onClick={() => handleTabClick('follow')}
        >
          フォロー中
        </button>
      </div>

      {/* タブに応じてPostListを表示 */}
      <div className="post-list-container">
        {activeTab === 'recommend' && <PostList posts={recommendPosts} />}
        {activeTab === 'follow' && <PostList posts={followPosts} />}
      </div>
      <div className="fixed -bottom-80 right-80 z-50">
        <SubmitButton />
      </div>



    </div>
  );
};

export default Page;

// おすすめの投稿データ
const recommendPosts = [
  {
    username: '山田 太郎',
    handle: 'taro_yamada',
    time: '1時間前',
    content: '今日はとても楽しかった！',
    likes: 20,
    retweets: 5,
    replies: 10,
    profileImage: 'https://example.com/profile1.jpg',
  },
  {
    username: '佐藤 花子',
    handle: 'hanako_sato',
    time: '2時間前',
    content: '美味しいご飯を食べました！',
    likes: 30,
    retweets: 10,
    replies: 5,
    profileImage: 'https://example.com/profile2.jpg',
  },
];

// フォロー中の投稿データ
const followPosts = [
  {
    username: 'フォロー中ユーザー1',
    handle: 'follow_user1',
    time: '3時間前',
    content: '今日はランニングをしました。',
    likes: 15,
    retweets: 4,
    replies: 6,
    profileImage: 'https://example.com/profile3.jpg',
  },
  {
    username: 'フォロー中ユーザー2',
    handle: 'follow_user2',
    time: '4時間前',
    content: '新しい本を読みました。面白かった！',
    likes: 25,
    retweets: 7,
    replies: 8,
    profileImage: 'https://example.com/profile4.jpg',
  },
  {
    username: '田中 直子',
    handle: 'naoko_tanaka',
    time: '8時間前',
    content: '友達とカフェに行きました。楽しい時間を過ごしました。',
    likes: 40,
    retweets: 9,
    replies: 13,
    profileImage: 'https://example.com/profile8.jpg',
  },
  {
    username: '本田 圭',
    handle: 'kei_honda',
    time: '9時間前',
    content: '新しい趣味を始めました。頑張ります！',
    likes: 60,
    retweets: 15,
    replies: 25,
    profileImage: 'https://example.com/profile9.jpg',
  },
  {
    username: '井上 真',
    handle: 'makoto_inoue',
    time: '10時間前',
    content: '今日は天気が良かったので散歩しました。',
    likes: 45,
    retweets: 10,
    replies: 17,
    profileImage: 'https://example.com/profile10.jpg',
  },
];
