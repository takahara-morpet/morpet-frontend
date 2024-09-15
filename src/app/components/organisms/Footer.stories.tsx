import React from 'react';
import { Meta, Story } from '@storybook/react';
import Footer from './Footer'; // Footerコンポーネントをインポート

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    activePage: {
      control: {
        type: 'select',
        options: ['timeline', 'profile', 'notifications'], // 3つのページオプション
      },
    },
  },
} as Meta;

// デフォルトのテンプレート
const Template: Story = (args) => <Footer {...args} />;

export const TimelineFooter = Template.bind({});
TimelineFooter.args = {
  activePage: 'timeline',
  handlePageClick: (page) => console.log(`Switched to ${page}`), // デバッグ用にページ切り替えの動作をログ表示
};

export const ProfileFooter = Template.bind({});
ProfileFooter.args = {
  activePage: 'profile',
  handlePageClick: (page) => console.log(`Switched to ${page}`),
};

export const NotificationsFooter = Template.bind({});
NotificationsFooter.args = {
  activePage: 'notifications',
  handlePageClick: (page) => console.log(`Switched to ${page}`),
};
