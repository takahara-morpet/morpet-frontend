"use client"; // これを最初に追加してクライアントコンポーネントとして指定
import './timeline.css'; // CSSファイルをインポート
import React, { useState } from 'react';
import PostList from '@/components/template/PostList'; // PostListコンポーネントをインポート
import PostListBar from '@/components/template/PostListBar'; // PostListBarコンポーネントをインポート
import Footer from '@/components/organisms/Footer';

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'recommend' | 'follow' | 'controversial'>('recommend'); // 初期タブは「おすすめ」

  const handleTabClick = (tab: 'recommend' | 'follow' | 'controversial') => {
    setActiveTab(tab);
  };

  return (
    <div>
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
        <button
          className={`tab-button ${activeTab === 'controversial' ? 'active' : ''}`}
          onClick={() => handleTabClick('controversial')}
        >
          賛否両論
        </button>
      </div>

      {/* タブに応じてPostListやPostListBarを表示 */}
      <div className="post-list-container">
        {activeTab === 'recommend' && <PostList posts={recommendPosts} />}
        {activeTab === 'follow' && <PostList posts={followPosts} />}
        {activeTab === 'controversial' && <PostListBar posts={controversialPosts} />} {/* PostListBar に変更 */}
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
];

// 賛否両論の投稿データ
const controversialPosts = [
  {
    username: '木村 拓',
    handle: 'taku_kimura',
    time: '5時間前',
    content: '最近のトレンドには賛否があるけど、僕は肯定派。',
    likes: 50,
    retweets: 20,
    replies: 30,
    profileImage: 'https://example.com/profile5.jpg',
    malePercentage: 60,
    femalePercentage: 40,
  },
  {
    username: '田中 美沙',
    handle: 'misa_tanaka',
    time: '6時間前',
    content: 'その意見には反対だけど、意見交換は大事だね。',
    likes: 35,
    retweets: 10,
    replies: 22,
    profileImage: 'https://example.com/profile6.jpg',
    malePercentage: 55,
    femalePercentage: 45,
  },
  {
    username: '中村 勇',
    handle: 'isamu_nakamura',
    time: '7時間前',
    content: '議論の余地がある問題だけど、自分の立場を明確にしたい。',
    likes: 45,
    retweets: 12,
    replies: 19,
    profileImage: 'https://example.com/profile7.jpg',
    malePercentage: 50,
    femalePercentage: 50,
  },
];
