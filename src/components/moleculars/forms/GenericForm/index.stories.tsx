import { ComponentStory, ComponentMeta } from "@storybook/react";
import GenericForm, { Props } from ".";

export default {
  title: "GenericForm",
  component: GenericForm,
} as ComponentMeta<typeof GenericForm>;

const Template: ComponentStory<typeof GenericForm> = function (args: Props) {
  return <GenericForm {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  initialState: {},
  formFields: [
    {
      name: "email",
      type: "email",
      id: "email",
      placeholder: "email",
      required: true,
    },
  ],
  onFormSubmit: () => {},
};
