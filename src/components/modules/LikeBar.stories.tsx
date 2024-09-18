import React from "react";
import { Meta, Story } from "@storybook/react";
import LikeBar from "./LikeBar";

export default {
  title: "Components/LikeBar",
  component: LikeBar,
} as Meta;

const Template: Story<{ percentages: number[], colors: string[] }> = (args) => <LikeBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentages: [28, 31, 12, 15, 7],
  colors: ["#A70000", "#FF4500", "#FFA07A", "#FFA500", "#FFD700"],
};

export const Custom = Template.bind({});
Custom.args = {
  percentages: [20, 25, 30, 15, 10],
  colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"],
};
