import React, { Component } from 'react'

export default class FormattedOutput extends Component {
    render() {
        return (
            <div>
                <h2>Formatted Preview</h2>
                <ul>
                {this.props.showNotes.map((note, index) => {
                    return (
                        <li key={index}>
                            {note.timestamp} – <a href={note.url} target="blank">{note.linktext}</a>
                        </li>
                    )
                })
                }
                </ul>
            </div>
        )
    }
}

