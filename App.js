import React, { Component } from 'react'
import NavBar from './NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <News pageSize={5} country="in" category="technology"/>
      </div>
    )
  }
}


