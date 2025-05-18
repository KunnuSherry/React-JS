import HelloWorld from "../components/helloworld"
import {render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Counter from "../components/counter"


//Button Trigger Test
test('test counter logic', ()=>{
    const { getByText } = render(<Counter />);
    const counterText = getByText('Count is: 0');
    const getButtonElementText = getByText('Increase Count');

    fireEvent.click(getButtonElementText);
    expect(counterText.textContent).toBe('Count is: 1')
})