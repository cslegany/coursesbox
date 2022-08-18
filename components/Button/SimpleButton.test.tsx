import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SimpleButton } from "./SimpleButton";

describe("SimpleButton test cases", () => {
    it("Render check", () => {
        const onClick = jest.fn();
        const { asFragment } = render(<SimpleButton onClick={onClick}>SimpleButton</SimpleButton>);

        expect(asFragment()).toMatchSnapshot();
    });
    it("Check onClick callback", () => {
        const onClick = jest.fn();
    
        render(<SimpleButton onClick={onClick}>SimpleButton</SimpleButton>);
    
        screen.debug();

        const element = screen.getByRole("button");
        
        userEvent.click(element);

        expect(onClick).toHaveBeenCalled();
      });
});