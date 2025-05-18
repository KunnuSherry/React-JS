import HelloWorld from "../components/helloworld"
import {fireEvent, render} from "@testing-library/react"
import "@testing-library/jest-dom"
import Child from "../components/child"


//Test for Props
test('Child props value' ,()=>{
    const {getByTestId} = render(<Child count={500}/>)
    const getElement =getByTestId('child-count-value')

    expect(getElement.textContent).toBe('500')
})

test('check toggle text', ()=>{
    const {getByTestId} = render(<Child count={100}/>)
    const getButtonElement = getByTestId('toggle')
    const getToggleTextElement = getByTestId('toggle-text')

    expect(getToggleTextElement.textContent).toBe('False')
    fireEvent.click(getButtonElement)
    expect(getToggleTextElement.textContent).toBe('True')
})