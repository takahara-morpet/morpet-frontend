import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostBar from './PostBar'; // PostBarコンポーネントをインポート

export default {
  title: 'Components/PostBar',
  component: PostBar,
} as ComponentMeta<typeof PostBar>;

const Template: ComponentStory<typeof PostBar> = (args) => <PostBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: 'John Doe',
  handle: 'johndoe',
  time: '2h ago',
  content: 'This is a sample post content for testing purposes.',
  profileImage: 'https://via.placeholder.com/50', // ダミーのプロフィール画像
  malePercentage: 60,
  femalePercentage: 40,
};

export const MostlyMale = Template.bind({});
MostlyMale.args = {
  username: 'Jane Smith',
  handle: 'janesmith',
  time: '3h ago',
  content: 'Testing gender bar with mostly male.',
  profileImage: 'https://via.placeholder.com/50',
  malePercentage: 80,
  femalePercentage: 20,
};

export const MostlyFemale = Template.bind({});
MostlyFemale.args = {
  username: 'Alex Johnson',
  handle: 'alexj',
  time: '1h ago',
  content: 'This post has a higher female percentage.',
  profileImage: 'https://via.placeholder.com/50',
  malePercentage: 30,
  femalePercentage: 70,
};

export const EqualGender = Template.bind({});
EqualGender.args = {
  username: 'Chris Lee',
  handle: 'chrisl',
  time: '5h ago',
  content: 'This post has an equal percentage of male and female.',
  profileImage: 'https://via.placeholder.com/50',
  malePercentage: 50,
  femalePercentage: 50,
};
