// PostBox.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import PostBox from './PostBox';  // PostBox コンポーネントをインポート

export default {
  title: 'Example/PostBox',  // Storybook 上で表示されるコンポーネントのカテゴリと名前
  component: PostBox,        // 対象となるコンポーネント
} as Meta;

// Templateはコンポーネントの基本形を定義
const Template: Story = (args) => <PostBox {...args} />;

// 各バリエーションを作成
export const Default = Template.bind({});
Default.args = {
  // 必要に応じてデフォルトのプロパティを指定できます
};
