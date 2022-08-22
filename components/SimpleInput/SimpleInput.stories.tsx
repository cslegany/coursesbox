import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { expect } from "@storybook/jest";
import { screen, userEvent } from "@storybook/testing-library";

import { SimpleInput } from "./SimpleInput";
import { SimpleFeedback } from "./SimpleFeedback/SimpleFeedback";

export default {
    title: "Controls/SimpleInput",
    component: SimpleInput,
    args: {
        placeholder: "Your name",
        label: "Name:"
    },
} as ComponentMeta<typeof SimpleInput>;

export const PrimarySimpleInput: ComponentStoryObj<typeof SimpleInput> = {
    play: async ({ args }) => {
        await userEvent.type(screen.getByRole("textbox"), "String");
        // @todo: https://github.com/storybookjs/storybook/issues/16941
        await expect(args.onChange).toHaveBeenCalledTimes(6);
    },
    args: {
        feedback: "Looks cool!",
    }
};

export const WithIcon: ComponentStoryObj<typeof SimpleInput> = {
    args: {
        icon: "User",
    },
};

export const WithInvalidFeedback: ComponentStoryObj<typeof SimpleInput> = {
    args: {
        placeholder: "Some text",
        feedback: <SimpleFeedback isValid={false}>Required!</SimpleFeedback>,
    },
    argTypes: {
        feedback: {
            control: false,
        },
    },
};

export const WithValidFeedback: ComponentStoryObj<typeof SimpleInput> = {
    args: {
        placeholder: "Some text",
        label: "Text:",
        feedback: <SimpleFeedback isValid={true}>Looks good!</SimpleFeedback>,
    },
    argTypes: {
        feedback: {
            control: false,
        },
    },
};