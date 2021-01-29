import React, { Component } from 'react'

export default class InputSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: '',
            url: '',
            linktext: ''
        }
        this.handleTimestampChange = this.handleTimestampChange.bind(this);
        this.handleLinkTextChange = this.handleLinkTextChange.bind(this);
        this.handleURLChange = this.handleURLChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTimestampChange(e) {
        this.setState({timestamp: e.target.value})
    }

    handleURLChange(e) {
        this.setState({url: e.target.value})
    }

    handleLinkTextChange(e) {
        this.setState({linktext: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submit({ 
            timestamp: this.state.timestamp, 
            url: this.state.url, 
            linktext: this.state.linktext
        });
        this.setState({
            timestamp: '',
            url: '',
            linktext: ''
        })
    }

    
    
    render() {
        return (
            <div>
                <form>
                    <label>
                        Timestamp:
                        <input value={this.state.timestamp} onChange={this.handleTimestampChange} type="text" name="timestamp" required />
                    </label>
                    <label>
                        URL:
                        <input value={this.state.url} onChange={this.handleURLChange} type="text" name="url" />
                    </label>
                    <label>
                        Link text:
                        <input value={this.state.linktext} onChange={this.handleLinkTextChange} type="text" name="linktext" />
                    </label>
                    <button onClick={this.handleSubmit} >Add Note</button>
                </form>
            </div>
        )
    }
}
