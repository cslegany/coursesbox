import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WrappedIcon } from "./WrappedIcon";

export default {
  title: "Content/Icon",
  component: WrappedIcon,
} as ComponentMeta<typeof WrappedIcon>;

const Template: ComponentStory<typeof WrappedIcon> = (args) => <WrappedIcon {...args} />;

export const WrappedBasicIcon = Template.bind({});
WrappedBasicIcon.args = {
  name: "Home",
};