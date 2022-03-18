import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardSquareImage, { Props } from ".";

export default {
  title: "CardSquareImage",
  component: CardSquareImage,
} as ComponentMeta<typeof CardSquareImage>;

const Template: ComponentStory<typeof CardSquareImage> = function (
  args: Props,
) {
  return (
    <div style={{ width: 144, height: 144 }}>
      <CardSquareImage {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  image: "https://picsum.photos/300/300",
};
