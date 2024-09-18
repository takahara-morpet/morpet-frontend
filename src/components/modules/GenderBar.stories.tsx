import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GenderBar from './GenderBar'; // GenderBarコンポーネントをインポート

export default {
  title: 'Components/GenderBar',
  component: GenderBar,
} as ComponentMeta<typeof GenderBar>;

const Template: ComponentStory<typeof GenderBar> = (args) => <GenderBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  malePercentage: 60,
  femalePercentage: 40,
};

export const FiftyFifty = Template.bind({});
FiftyFifty.args = {
  malePercentage: 50,
  femalePercentage: 50,
};

export const MaleDominant = Template.bind({});
MaleDominant.args = {
  malePercentage: 80,
  femalePercentage: 20,
};

export const FemaleDominant = Template.bind({});
FemaleDominant.args = {
  malePercentage: 20,
  femalePercentage: 80,
};
