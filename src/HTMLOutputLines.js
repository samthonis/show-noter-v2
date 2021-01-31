import React, { Component } from 'react'

export default class HTMLOutputLines extends Component {
    constructor(props) {
        super(props);
        this.removeNote = this.removeNote.bind(this); 
        this.handleClick = this.handleClick.bind(this);
    }

    removeNote(id) {
        this.props.onRemove(id)
    }

    handleClick(e) {
        this.removeNote(e.target.value);
        console.log("target value: " + e.target.value)
    }
    

    render() {
        return (
            <div>
                <h2>HTML Lines</h2>
                <ol>
                {this.props.showNotes.map((note, index) => {
                    return (
                        <li key={index}>
                            {`<li><a class="jump-point button underline" href="#${note.timestamp}">${note.timestamp}</a> - <a href="${note.url}">${note.linktext}</a></li>`}
                            <button value={note.id} onClick={this.handleClick}>x</button>
                        </li>
                    )
                })
                }
                </ol>
            </div>
        )
    }
}

