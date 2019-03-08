import React, { Component } from 'react';
import MyList from './component/MyList';
import Recommendation from './component/Recommendation';
import image from './image/netflix-logo.jpg';
import { connect } from "react-redux";
import './App.css';




class App extends Component {

  componentDidMount(){
    fetch('./data.json')
    .then(res => res.json())
    .then(res => this.props.Initial(res))
 }

  render() {
    return (
      <>
        <header>
          <img className='label' src={image} alt='Netflex'/>
        </header>
        <div className='layout'>
          <MyList />
          <Recommendation />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      Initial: (data) => dispatch({type: 'INITIAL', payload: data})
  };
}

export default connect(null,mapDispatchToProps)(App);
