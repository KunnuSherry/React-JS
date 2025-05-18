import HelloWorld from "../components/helloworld"
import {render} from "@testing-library/react"
import "@testing-library/jest-dom"


//Test Text
test("render hello world text", ()=>{
    const { getByText } = render(<HelloWorld />)
    const checkHelloWorldText = getByText('Hello World')
    expect(checkHelloWorldText).toBeInTheDocument();
});

test("check name by test-id", ()=>{
    const {getByTestId} = render(<HelloWorld />);
    const getElement = getByTestId('name');
    expect(getElement.textContent).toBe('Kunal Sharma')
})