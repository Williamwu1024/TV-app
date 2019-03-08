import React, { Component } from 'react';
import MyList from './component/MyList';
import Recommendation from './component/Recommendation';
import './App.css';



class App extends Component {

  render() {
    return (
      <div className='layout'>
        <MyList />
        <Recommendation />
               
      </div>
    );
  }
}

export default App;
