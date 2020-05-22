import React,{Component} from 'react';
import './App.css';
import Album_Search from './components/Album_Search';


class App extends Component {

  render() {
      return (
        <div className="App">
          {/*  */}
          <Album_Search />
        </div>
      );
    }
}

export default App;