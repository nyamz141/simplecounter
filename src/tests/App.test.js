import {render,screen,waitFor, within} from '@testing-library/react'
import user from "@testing-library/user-event";
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';

function renderApp(){
    return render(<App />)
}

test('find only 1 heading with value 0 initially',() => {
    renderApp()
    const heading = screen.getByTestId("heading-value")
    expect(heading).toBeInTheDocument()
    expect(heading.innerHTML).toContain("0")
});

test('make sure app has 2 buttons', async () => {
    renderApp()
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2);
});

test('increment value from 0 to 1', () => {
    renderApp()
    const heading = screen.getByTestId("heading-value")
    const increment = screen.getByTestId("increment-button-test")
    expect(increment).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    act(() => {
        increment.click()
    })
    expect(heading.innerHTML).toEqual("1")

})

test('decrement value from 0 to -1',() => {
    renderApp()
    const heading = screen.getByTestId("heading-value")
    const increment = screen.getByTestId("decrement-button-test")
    expect(increment).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    act(() => {
        increment.click()
    })
    expect(heading.innerHTML).toEqual("-1")
})