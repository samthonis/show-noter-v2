import React from 'react';
import InputSection from './InputSection';
import HTMLOutputLines from './HTMLOutputLines';
import HTMLOutput from './HTMLOutput';
import FormattedOutput from './FormattedOutput';

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
      // if (note.timestamp === '') {
      //   alert('Must have timestamp');
      //   return;
      // }
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

    removeNote(timestamp) {
      let notes = this.state.showNotes;
      notes = notes.filter(savednote => savednote.timestamp !== timestamp);
      this.setState({showNotes: notes});
    }

    render() {
        return (
            <div>
                <h1>ShowNoter beta test</h1>
                <InputSection submit={this.submit}/>
                <HTMLOutputLines onRemove={this.removeNote} showNotes={this.state.showNotes} />
                <HTMLOutput showNotes={this.state.showNotes} />
                <FormattedOutput showNotes={this.state.showNotes} />
            </div>
        )
    }
}