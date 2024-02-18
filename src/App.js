import logo from './logo.svg';
import './App.css';

import * as api from './api/routing';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super()
    this.state = {
      timestamp:'no timestamp yet',
      text:''
    };
  }

  componentDidMount(){
    api.subscribeToTimer((err,timestamp)=>this.setState({
      timestamp
    }));
  }

  render() {
    return (
      <div>
        <h3>
          Here's the TextEdit component.
        </h3>
  
        <p>
          Time:{this.state.timestamp ? new Date(this.state.timestamp).toLocaleString('en-US',{
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: true,
              timeZoneName: 'short'
          }):'No date yet'}
        </p>
  
        <textarea row="10" cols="50" placeholder="Write something here...">
           {this.state.text}
        </textarea>
  
      </div>
    );
  }
  
}

export default App;
