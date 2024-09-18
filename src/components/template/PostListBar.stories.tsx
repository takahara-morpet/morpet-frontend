import React from 'react';
import { Meta, Story } from '@storybook/react';
import PostListBar from './PostListBar';

export default {
  title: 'Components/PostListBar',
  component: PostListBar,
} as Meta;

const Template: Story = (args) => <PostListBar {...args} />;

export const ManyPosts = Template.bind({});
ManyPosts.args = {
  posts: [
    {
      username: '山田 太郎',
      handle: 'taro_yamada',
      time: '1時間前',
      content: '今日はとても楽しかった！',
      profileImage: 'https://example.com/profile1.jpg',
      malePercentage: 60,
      femalePercentage: 40,
    },
    {
      username: '佐藤 花子',
      handle: 'hanako_sato',
      time: '2時間前',
      content: '美味しいご飯を食べました！',
      profileImage: 'https://example.com/profile2.jpg',
      malePercentage: 50,
      femalePercentage: 50,
    },
    {
      username: '鈴木 一郎',
      handle: 'ichiro_suzuki',
      time: '3時間前',
      content: '新しい本を買いました。週末に読む予定です。',
      profileImage: 'https://example.com/profile3.jpg',
      malePercentage: 55,
      femalePercentage: 45,
    },
  ],
};
