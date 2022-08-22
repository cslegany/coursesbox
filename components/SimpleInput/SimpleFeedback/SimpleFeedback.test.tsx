import { render } from "@/test-utils";

import { SimpleFeedback } from "./SimpleFeedback";

describe("SimpleFeedback test cases", () => {
    it("Render check for valid", () => {
        const { asFragment } = render(<SimpleFeedback isValid>Looks good!</SimpleFeedback>);

        expect(asFragment()).toMatchSnapshot();
    });
    it("Render check for invalid", () => {
        const { asFragment } = render(
            <SimpleFeedback>Please provide a valid value</SimpleFeedback>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});