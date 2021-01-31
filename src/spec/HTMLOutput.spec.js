import { render, screen } from '@testing-library/react';
import HTMLOutput from '../HTMLOutput';

describe('HTMLOutput', () => {
    it('renders copyable html for an li containing formatted show notes info', () => {
        // render component wiht some test props
        const showNotes = [
            { id: 1, timestamp: '1:14', url: 'https://example.com', linktext: 'the best part'}
        ]
        render(<HTMLOutput showNotes={showNotes} />)
        screen.getByText('<li><a class="jump-point button underline" href="#1:14">1:14</a> - <a href="https://example.com">the best part</a></li>')
    })

    it("renders multiple LIs for multiple show notes", () => {
        const showNotes = [
            { id: 1, timestamp: '1:14', url: 'https://example.com', linktext: 'the best part'},
            { id: 2, timestamp: '3:14', url: 'https://example2.com', linktext: 'the second best part'}
        ]
        render(<HTMLOutput showNotes={showNotes} />)
        screen.getByText('<li><a class="jump-point button underline" href="#1:14">1:14</a> - <a href="https://example.com">the best part</a></li>')
        screen.getByText('<li><a class="jump-point button underline" href="#3:14">3:14</a> - <a href="https://example2.com">the second best part</a></li>')
    })
})
