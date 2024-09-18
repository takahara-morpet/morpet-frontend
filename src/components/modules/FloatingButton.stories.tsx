import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FloatingButton from './FloatingButton';

// Storybook のメタデータ
export default {
  title: 'Components/FloatingButton', // Storybook の UI で表示されるセクションとコンポーネント名
  component: FloatingButton,
  argTypes: {
    // コントロール可能なプロパティを定義
    icon: {
      control: { type: 'select' }, // select を使ってアイコンを選べるようにする
      options: ['home', 'bell', 'user', 'plus'], // 使用できるアイコンのオプション
    },
    color: {
      control: 'color', // カラーコントロールを使用
    },
    size: {
      control: { type: 'range', min: 4, max: 12 }, // サイズを動的に変更可能
    },
  },
} as ComponentMeta<typeof FloatingButton>;

// テンプレートを作成
const Template: ComponentStory<typeof FloatingButton> = (args) => <FloatingButton {...args} />;

// デフォルトストーリーをエクスポート
export const Default = Template.bind({});
Default.args = {
  icon: 'plus',  // デフォルトで表示されるアイコン
  color: 'blue', // デフォルトのボタンカラー
  size: 6,       // デフォルトのアイコンサイズ
};
