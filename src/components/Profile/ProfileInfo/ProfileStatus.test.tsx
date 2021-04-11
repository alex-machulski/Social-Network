import React from 'react';
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"it-kamasutra"} updateStatus={() => {}}/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe("it-kamasutra");
    });

    test("after creation 'span' with status should be displayed with correct status", () => {
        const component = create(<ProfileStatus status={"it-kamasutra"} updateStatus={() => {}}/>);
        const instance = component.root;
        let span = instance?.findByType("span")
        expect(span).toBeDefined();
    });

    test("after creation 'input' shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={"it-kamasutra"} updateStatus={() => {}}/>);
        const instance = component.root;
        expect(() => instance?.findByType("input")).toThrowError();
    });

    test("after creation 'span' should be display correct text", () => {
        const component = create(<ProfileStatus status={"-----"} updateStatus={() => {}}/>);
        const instance = component.root;
        let span = instance?.findByType("span")
        expect(span?.children[0]).toBe("-----");
    });

    test("input should be displayed in editMode instead span", () => {
        const component = create(<ProfileStatus status={"-----"} updateStatus={() => {}}/>);
        const instance = component.root;
        let span = instance?.findByType("span")
        span?.props?.onDoubleClick();
        let input = instance?.findByType("input")
        expect(input?.props.value).toBe("-----");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={"-----"} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        // @ts-ignore
        instance?.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})