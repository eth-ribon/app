import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardSideSquareImageButton, { Props } from ".";

export default {
  title: "CardSideSquareImageButton",
  component: CardSideSquareImageButton,
} as ComponentMeta<typeof CardSideSquareImageButton>;

const Template: ComponentStory<typeof CardSideSquareImageButton> = function (
  args: Props,
) {
  return <CardSideSquareImageButton {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  text: "Amor em Patas é uma organização que tem o objetivo de resgatar animais abandonados, cuidar deles e procurar por adoção.",
  image: "https://picsum.photos/600/600",
  title: "Sobre Amor em Patas",
  buttonText: "Saiba mais",
};
