import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubmitButton from './SubmitButton';

// メタデータを設定
export default {
  title: 'Template/SubmitButton',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>;

// テンプレートを作成
const Template: ComponentStory<typeof SubmitButton> = (args) => <SubmitButton {...args} />;

// デフォルトストーリー
export const Default = Template.bind({});
Default.args = {};
