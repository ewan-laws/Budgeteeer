import React from "react";

import { Btn } from "../components/TestStory";

export default {
  title: "Example/Button",
  component: Btn,
};

const Template = (args) => <Btn {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  primary: false,
  label: "Secondary",
};
