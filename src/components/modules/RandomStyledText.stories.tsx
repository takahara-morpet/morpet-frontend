import React from 'react';
import { Meta, Story } from '@storybook/react';
import RandomStyledText, { RandomStyledTextProps } from './RandomStyledText';

// Storybook のメタデータ
export default {
  title: 'Components/RandomStyledText',
  component: RandomStyledText,
} as Meta;

// テンプレートを定義
const Template: Story<RandomStyledTextProps> = (args) => <RandomStyledText {...args} />;

// デフォルトのストーリー
export const Default = Template.bind({});
Default.args = {
  text: 'テキストマイニングは楽しい',
};

// 別のストーリー例
export const LongText = Template.bind({});
LongText.args = {
  text: '自然言語処理はAIにとって重要な技術です',
};

// さらに異なるテキストのストーリー例
export const CustomText = Template.bind({});
CustomText.args = {
  text: 'データ分析は企業にとって価値がある',
};
