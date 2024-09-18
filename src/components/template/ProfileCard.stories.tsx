import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProfileCard from "./Profile";

// デフォルトのエクスポート設定
export default {
  title: "Components/ProfileCard",
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

// テンプレートの定義
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

// デフォルトのストーリー
export const Default = Template.bind({});
Default.args = {
  icon: "/path/to/default-avatar.jpg", // 画像パスを適切なものに変更
  name: "John Doe",
  id: "johndoe123",
  bio: "A passionate developer and open-source enthusiast.",
  mbti: "INTJ",
  birthday: "1990-01-01",
  gender: "Male",
  followers: ["follower1", "follower2"],
  following: ["following1", "following2"],
};

// フォロワーが多いバージョン
export const PopularUser = Template.bind({});
PopularUser.args = {
  icon: "/path/to/popular-avatar.jpg",
  name: "Jane Smith",
  id: "janesmith456",
  bio: "An influencer with a large following and passion for social media.",
  mbti: "ENFP",
  birthday: "1985-05-15",
  gender: "Female",
  followers: new Array(10000).fill("follower"),
  following: new Array(100).fill("following"),
};

// プライベートアカウントのバージョン
export const PrivateUser = Template.bind({});
PrivateUser.args = {
  icon: "/path/to/private-avatar.jpg",
  name: "Private User",
  id: "privateuser789",
  bio: "This account is private.",
  mbti: "INFP",
  birthday: "1995-07-30",
  gender: "Other",
  followers: [],
  following: [],
};