import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header, { Props } from ".";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = function (args: Props) {
  return <Header {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  sideLogo: "https://i.imgur.com/kJA77FC.png",
};
