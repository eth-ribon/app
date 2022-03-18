import { ComponentStory, ComponentMeta } from "@storybook/react";
import Arrow, { Props } from ".";

export default {
  title: "Arrow",
  component: Arrow,
} as ComponentMeta<typeof Arrow>;

const Template: ComponentStory<typeof Arrow> = function (args: Props) {
  return <Arrow {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  onClick: () => {},
  direction: "left",
};
