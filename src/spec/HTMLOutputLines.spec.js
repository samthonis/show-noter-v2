import { fireEvent, render, screen } from '@testing-library/react';
import HTMLOutputLines from '../HTMLOutputLines';

describe('HTMLOutputLines', () => {
    it.todo('renders <ol> of html-formatted <li>s containing formatted show notes info')
    it('has a button that removes a list item', () => {
        const mock = jest.fn()
        render(<HTMLOutputLines onRemove={mock} showNotes={[{ id: 1 }]} />)
        fireEvent.click(screen.getByText("x"))

        expect(mock).toHaveBeenCalled()
    })
})