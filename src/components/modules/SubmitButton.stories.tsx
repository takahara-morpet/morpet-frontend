
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SubmitButton from './SubmitButton';

export default {
  title: 'Components/SubmitButton',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = (args) => <SubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Submit',
  onClick: () => alert('Submitted!'),
};
