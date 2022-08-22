import { render } from "@/test-utils";
import { WrappedIcon } from "./WrappedIcon";

describe("WrappedIcon test cases", () => {
    it("WrappedIcon render check", () => {
        const { asFragment } = render(<WrappedIcon name="Moon" />);

        expect(asFragment()).toMatchSnapshot();
    });
});
