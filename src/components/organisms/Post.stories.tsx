// Post.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Post, { PostProps } from './Post';

export default {
  title: 'Example/Post', // Storybook上での表示カテゴリ
  component: Post,
} as Meta;

const Template: Story<PostProps> = (args) => <Post {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: '美川タクシー',
  handle: 'mikawataxiehime',
  time: '23時間',
  content: `wwwwwwwwwwwwwwwwwwwww
  wwwwwwwwwwwwwwwwww
  wwwwwww`,
  likes: 52000,
  retweets: 2088,
  replies: 342,
  profileImage: 'https://via.placeholder.com/50',
};
