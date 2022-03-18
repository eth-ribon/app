import { ComponentStory, ComponentMeta } from "@storybook/react";
import image from "assets/images/newspaper.svg";
import ModalImage, { Props } from ".";

export default {
  title: "ModalImage",
  component: ModalImage,
} as ComponentMeta<typeof ModalImage>;

const Template: ComponentStory<typeof ModalImage> = function (args: Props) {
  return <ModalImage {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: "title",
  body: "body",
  primaryButtonText: "primary",
  secondaryButtonText: "secondary",
  image,
  visible: true,
};
