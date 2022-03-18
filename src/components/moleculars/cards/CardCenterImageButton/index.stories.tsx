import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardCenterImageButton, { Props } from ".";

export default {
  title: "CardCenterImageButton",
  component: CardCenterImageButton,
} as ComponentMeta<typeof CardCenterImageButton>;

const Template: ComponentStory<typeof CardCenterImageButton> = function (
  args: Props,
) {
  return <CardCenterImageButton {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  image: "https://picsum.photos/600/600",
  title: "Recursos de saúde básica para famílias",
  buttonText: "Doar 100",
  onClickButton: () => {},
};
