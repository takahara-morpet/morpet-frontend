// PostList.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import PostList from './PostList'; // PostListコンポーネントをインポート

export default {
  title: 'Components/PostList',
  component: PostList,
} as Meta;

// デフォルトのテンプレート
const Template: Story = (args) => <PostList {...args} />;

// 複数の投稿データを追加
export const ManyPosts = Template.bind({});
ManyPosts.args = {
  posts: [
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
    {
      username: '中村 健',
      handle: 'ken_nakamura',
      time: '3時間前',
      content: '今週末はキャンプに行きます。',
      likes: 15,
      retweets: 3,
      replies: 7,
      profileImage: 'https://example.com/profile3.jpg',
    },
    {
      username: '斎藤 真央',
      handle: 'mao_saito',
      time: '4時間前',
      content: '映画を見ました！とても感動しました。',
      likes: 50,
      retweets: 12,
      replies: 20,
      profileImage: 'https://example.com/profile4.jpg',
    },
    {
      username: '鈴木 一郎',
      handle: 'ichiro_suzuki',
      time: '5時間前',
      content: '新しい本を買いました。週末に読む予定です。',
      likes: 10,
      retweets: 2,
      replies: 3,
      profileImage: 'https://example.com/profile5.jpg',
    },
    {
      username: '小林 花',
      handle: 'hana_kobayashi',
      time: '6時間前',
      content: '今日は美術館に行きました。すごく楽しかったです。あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      likes: 35,
      retweets: 8,
      replies: 15,
      profileImage: 'https://example.com/profile6.jpg',
    },
    {
      username: '加藤 翔',
      handle: 'sho_kato',
      time: '7時間前',
      content: 'ジョギングしました。とてもいい気分です。',
      likes: 25,
      retweets: 6,
      replies: 10,
      profileImage: 'https://example.com/profile7.jpg',
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
  ],
};
