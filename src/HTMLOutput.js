import React, { Component } from 'react'

export default class HTMLOutput extends Component {
    render() {
        return (
            <div>
                <h2>HTML Output</h2>
                {this.props.showNotes.map((note) => {
                    return (
                        <span key={note.id}>
                            {`<li><a class="jump-point button underline" href="#${note.timestamp}">${note.timestamp}</a> - <a href="${note.url}">${note.linktext}</a></li>`}
                        </span>
                    )
                })
                }
            </div>
        )
    }
}

