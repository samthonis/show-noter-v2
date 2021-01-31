import React, { Component } from 'react'

let id = 1;

export default class InputSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: '',
            url: '',
            linktext: '',
            id: ''
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
        this.setState({ id: `${id}` })
        this.props.submit({ 
            timestamp: this.state.timestamp, 
            url: this.state.url, 
            linktext: this.state.linktext,
            id: this.state.id
        });
        this.setState({
            timestamp: '',
            url: '',
            linktext: ''
        });
        id++;
    }

    
    
    render() {
        return (
            <div>
                <form>
                    <div id="entryFields">
                        <label>
                            <p>Timestamp :</p>
                            <input value={this.state.timestamp} onChange={this.handleTimestampChange} type="text" name="timestamp" required />
                        </label>
                        <label>
                            <p>URL :</p>
                            <input value={this.state.url} onChange={this.handleURLChange} type="text" name="url" />
                        </label>
                        <label>
                            <p>Link text :</p>
                            <input value={this.state.linktext} onChange={this.handleLinkTextChange} type="text" name="linktext" />
                        </label>
                    </div>
                    <button onClick={this.handleSubmit} >Add Note</button>
                </form>
            </div>
        )
    }
}
