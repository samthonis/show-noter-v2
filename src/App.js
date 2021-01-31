import React from 'react';
import InputSection from './InputSection';
import HTMLOutputLines from './HTMLOutputLines';
import HTMLOutput from './HTMLOutput';
import FormattedOutput from './FormattedOutput';
import './App.css';

export class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showNotes: []
      }
      this.submit = this.submit.bind(this);
      this.removeNote = this.removeNote.bind(this);
    }

    submit(note) {
      this.setState({
        showNotes: [{timestamp: ''}]
      })
      let timestamp = note.timestamp;
      if (timestamp.length === 4) {
          timestamp = "0" + timestamp;
      } else if (timestamp.length === 3) {
          timestamp = "00" + timestamp;
      }
      note.timestamp = timestamp;
      this.setState({ showNotes: this.state.showNotes.concat(note)})
    }

    removeNote(id) {
      let notes = this.state.showNotes;
      notes = notes.filter(savedNote => savedNote.id !== id);
      this.setState({showNotes: notes});
    }

    render() {
        return (
            <div>
                <header>
                  <h1><span>SHOW</span>NOTER *beta</h1>
                </header>
                <div id="inputSection">
                  <InputSection submit={this.submit}/>
                </div>
                <div id="htmlOutputLines">
                  <HTMLOutputLines onRemove={this.removeNote} showNotes={this.state.showNotes} />
                </div>
                <div id="htmlOutput">
                  <HTMLOutput showNotes={this.state.showNotes} />
                </div>
                <div id="formattedOutput">
                  <FormattedOutput showNotes={this.state.showNotes} />
                </div>
                <footer>made by sam</footer>
            </div>
        )
    }
}