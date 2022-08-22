import { ChangeEventHandler } from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "@/test-utils";

import { SimpleInput } from "./SimpleInput";

describe("SimpleInput test cases", () => {
    it("Render check", () => {
        const onChange = jest.fn();
        const { asFragment } = render(
            <SimpleInput
                onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
                label="Label"
                placeholder="Placeholder"
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("Render check with icon", () => {
        const onChange = jest.fn();
        const { asFragment } = render(
            <SimpleInput
                onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
                icon="Search"
                label="Label"
                placeholder="Placeholder"
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("Check onChange callback", () => {
        const onChange = jest.fn();
        render(
            <SimpleInput
                onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
                label="Label"
                placeholder="Placeholder"
            />
        );
        const element = screen.getByRole("textbox");
        userEvent.type(element, "String");
        expect(onChange).toHaveBeenCalledTimes(6);
    });
});