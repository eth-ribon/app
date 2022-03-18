import { ComponentStory, ComponentMeta } from "@storybook/react";
import SliderImage, { Props } from ".";

export default {
  title: "SliderImage",
  component: SliderImage,
} as ComponentMeta<typeof SliderImage>;

const Template: ComponentStory<typeof SliderImage> = function (args: Props) {
  return <SliderImage {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  sliderImages: [
    { imageUrl: "https://picsum.photos/600/600" },
    { imageUrl: "https://picsum.photos/600/600?random=2" },
  ],
};
