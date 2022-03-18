import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardFullImage, { Props } from ".";

export default {
  title: "CardFullImage",
  component: CardFullImage,
} as ComponentMeta<typeof CardFullImage>;

const Template: ComponentStory<typeof CardFullImage> = function (args: Props) {
  return <CardFullImage {...args} />;
};

export const Default = Template.bind({});
export const Loading = Template.bind({});

Default.args = {
  title: "Doando...",
  subtitle: "Os apoiadores da Ribon são os que pagam pelas doações gratuitas",
  roundImage: "https://i.imgur.com/E1GNgB8.png",
  backgroundImage: "https://i.imgur.com/BwtK2hX.png",
};

Loading.args = {
  title: "Doando...",
  subtitle: "Os apoiadores da Ribon são os que pagam pelas doações gratuitas",
  roundImage: "https://i.imgur.com/E1GNgB8.png",
  loading: true,
};
