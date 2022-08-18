import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import { SimpleButton } from "./SimpleButton";

export default {
    title: "Controls/SimpleButton",
    component: SimpleButton,
} as ComponentMeta<typeof SimpleButton>;

const Template: ComponentStoryObj<typeof SimpleButton> = (args) => <SimpleButton {...args} />

export const BasicButton = Template.bind({});
BasicButton.args = {
    children: "SimpleButton",
}