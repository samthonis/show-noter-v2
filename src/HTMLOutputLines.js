import React, { Component } from 'react'

export default class HTMLOutputLines extends Component {
    constructor(props) {
        super(props);
        this.removeNote = this.removeNote.bind(this); 
        this.handleClick = this.handleClick.bind(this);
    }

    removeNote(timestamp) {
        this.props.onRemove(timestamp)
    }

    handleClick(e) {
        this.removeNote(e.target.value);
    }
    

    render() {
        return (
            <ol>
            {this.props.showNotes.map(note => {
                return (
                    <li key={note.timestamp}>
                        {`<li><a class="jump-point button underline" href="#${note.timestamp}">${note.timestamp}</a> - <a href="${note.url}">${note.linktext}</a></li>`}
                        <button value={note.timestamp} onClick={this.handleClick}>-</button>
                    </li>
                )
            })
            }
            </ol>
        )
    }
}

