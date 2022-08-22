import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { expect } from "@storybook/jest";
import { screen } from "@storybook/testing-library";

import { SimpleFeedback } from "./SimpleFeedback";

export default {
    title: "Controls/SimpleFeedback",
    component: SimpleFeedback,
} as ComponentMeta<typeof SimpleFeedback>;

export const ValidFeedback: ComponentStoryObj<typeof SimpleFeedback> = {
    play: async () => {
        await expect(screen.getByText("Looks good!")).toBeInTheDocument();
    },
};
ValidFeedback.args = {
    children: "Looks good!",
    isValid: true,
};

export const InvalidFeedback: ComponentStoryObj<typeof SimpleFeedback> = {
    play: async () => {
        await expect(
            screen.getByText("Please provide a valid value")
        ).toBeInTheDocument();
    },
};
InvalidFeedback.args = {
    children: "Please provide a valid value",
    isValid: false,
};