import React, { Component } from 'react'

export default class HTMLOutput extends Component {
    render() {
        return (
            <div>
            {this.props.showNotes.map(note => {
                return (
                    <span key={note.timestamp}>
                        {`<li><a class="jump-point button underline" href="#${note.timestamp}">${note.timestamp}</a> - <a href="${note.url}">${note.linktext}</a></li>`}
                    </span>
                )
            })
            }
            </div>
        )
    }
}

