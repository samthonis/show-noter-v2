import React, { Component } from 'react'

export default class FormattedOutput extends Component {
    render() {
        return (
            <ul>
            {this.props.showNotes.map(note => {
                return (
                    <li key={note.timestamp}>
                        {note.timestamp} – <a href={note.url}>{note.linktext}</a>
                    </li>
                )
            })
            }
            </ul>
        )
    }
}

